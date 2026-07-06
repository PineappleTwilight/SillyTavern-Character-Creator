import { describe, expect, test } from 'vitest';
import {
    CHARACTER_RESIZE_KEY,
    CHARACTER_SESSION_KEY,
    loadCharacterSession,
    loadResizeSizes,
    saveCharacterSession,
    saveResizeSizes,
} from '../browser-storage.js';
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

describe('resize sizes storage', () => {
  test('loads and saves textarea resize heights through localforage', async () => {
    const storage = new MemoryLocalForage();
    const sizes = { 'value:name': 220, 'prompt:description': 90 };

    expect((await saveResizeSizes(sizes, storage)).persisted).toBe(true);
    expect((await loadResizeSizes(storage, new MemoryLegacyStorage())).value).toEqual(sizes);
  });

  test('merges additional resize sizes on subsequent saves', async () => {
    const storage = new MemoryLocalForage();
    await saveResizeSizes({ 'value:name': 220 }, storage);
    await saveResizeSizes({ 'value:description': 180, 'value:name': 240 }, storage);

    const result = await loadResizeSizes(storage, new MemoryLegacyStorage());
    expect(result.value).toEqual({ 'value:name': 240, 'value:description': 180 });
  });

  test('migrates legacy resize sizes from localStorage', async () => {
    const storage = new MemoryLocalForage();
    const legacyStorage = new MemoryLegacyStorage();
    const sizes = { 'value:name': 200 };
    legacyStorage.setItem(CHARACTER_RESIZE_KEY, JSON.stringify(sizes));

    const result = await loadResizeSizes(storage, legacyStorage);

    expect(result.migrated).toBe(true);
    expect(result.value).toEqual(sizes);
    expect(await storage.getItem(CHARACTER_RESIZE_KEY)).toEqual(sizes);
    expect(legacyStorage.getItem(CHARACTER_RESIZE_KEY)).toBeNull();
  });

  test('does not throw when browser storage quota is exceeded', async () => {
    const storage = new MemoryLocalForage(true);

    const result = await saveResizeSizes({ 'value:name': 200 }, storage);

    expect(result.persisted).toBe(false);
    expect(result.error).toBeInstanceOf(DOMException);
  });
});
