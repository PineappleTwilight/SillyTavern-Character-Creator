import { describe, expect, test } from 'vitest';
import { CHARACTER_SESSION_KEY, loadCharacterSession, saveCharacterSession } from '../browser-storage.js';
import type { Session } from '../generate.js';

class MemoryLocalForage {
  private items = new Map<string, unknown>();

  constructor(private failOnSet = false) {}

  async getItem<T>(key: string): Promise<T | null> {
    return (this.items.get(key) as T | undefined) ?? null;
  }

  async setItem<T>(key: string, value: T): Promise<T> {
    if (this.failOnSet) {
      throw new DOMException('The quota has been exceeded.', 'QuotaExceededError');
    }
    this.items.set(key, value);
    return value;
  }

  async removeItem(key: string): Promise<void> {
    this.items.delete(key);
  }
}

class MemoryLegacyStorage {
  private items = new Map<string, string>();

  getItem(key: string): string | null {
    return this.items.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.items.set(key, value);
  }

  removeItem(key: string): void {
    this.items.delete(key);
  }
}

const createSession = (): Session => ({
  selectedCharacterIndexes: ['0'],
  selectedWorldNames: ['Lore'],
  fields: { name: { label: 'Name', prompt: '', value: 'Test' } },
  draftFields: {},
  lastLoadedCharacterId: 'test.png',
});

describe('browser storage', () => {
  test('loads and saves Character Creator session through localforage', async () => {
    const storage = new MemoryLocalForage();
    const session = createSession();

    expect((await saveCharacterSession(session, storage)).persisted).toBe(true);
    expect((await loadCharacterSession(storage, new MemoryLegacyStorage())).value).toEqual(session);
  });

  test('migrates legacy Character Creator session from localStorage', async () => {
    const storage = new MemoryLocalForage();
    const legacyStorage = new MemoryLegacyStorage();
    const session = createSession();

    legacyStorage.setItem(CHARACTER_SESSION_KEY, JSON.stringify(session));

    const result = await loadCharacterSession(storage, legacyStorage);

    expect(result.migrated).toBe(true);
    expect(result.value).toEqual(session);
    expect(await storage.getItem(CHARACTER_SESSION_KEY)).toEqual(session);
    expect(legacyStorage.getItem(CHARACTER_SESSION_KEY)).toBeNull();
  });

  test('does not throw when browser storage quota is exceeded', async () => {
    const storage = new MemoryLocalForage(true);

    const result = await saveCharacterSession(createSession(), storage);

    expect(result.persisted).toBe(false);
    expect(result.error).toBeInstanceOf(DOMException);
  });
});
