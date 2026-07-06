import { RefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { loadResizeSizes, saveResizeSizes, type ResizeSizes } from '../browser-storage.js';

/**
 * Persists the user-driven textarea height across popup reloads.
 *
 * - On mount, restores the saved height for `storageKey` before paint.
 * - Observes the textarea's height; debounces writes so we don't hammer storage while dragging.
 * - Only persists heights it can read as a numeric pixel value (the inline style the resize
 *   handle sets). Falls back gracefully when storage is unavailable or the value is missing.
 *
 * Returns a ref to attach to the <textarea>.
 */
export const useTextareaResize = (storageKey: string): RefObject<HTMLTextAreaElement | null> => {
    const ref = useRef<HTMLTextAreaElement | null>(null);
    const [hydratedHeight, setHydratedHeight] = useState<number | null>(null);
    const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const initial = useRef(true);

    // Hydrate saved height before paint so users don't see the textarea snap to its CSS default.
    useLayoutEffect(() => {
        let cancelled = false;
        loadResizeSizes()
            .then((result) => {
                if (cancelled) return;
                const height = result.value?.[storageKey];
                if (typeof height === 'number' && height > 0) {
                    setHydratedHeight(height);
                }
            })
            .catch(() => {
                /* storage unavailable — silently degrade to default height */
            });
        return () => {
            cancelled = true;
        };
    }, [storageKey]);

    // Apply the hydrated height once the textarea element exists.
    useLayoutEffect(() => {
        if (hydratedHeight === null) return;
        const ta = ref.current;
        if (!ta) return;
        ta.style.height = `${hydratedHeight}px`;
    }, [hydratedHeight]);

    // Persist user-driven resize changes (debounced).
    const scheduleSave = useCallback(
        (height: number) => {
            if (saveTimer.current) clearTimeout(saveTimer.current);
            saveTimer.current = setTimeout(async () => {
                try {
                    const result = await loadResizeSizes();
                    const sizes: ResizeSizes = { ...(result.value ?? {}), [storageKey]: height };
                    await saveResizeSizes(sizes);
                } catch {
                    /* ignore — best effort persistence */
                }
            }, 400);
        },
        [storageKey],
    );

    useEffect(() => {
        const ta = ref.current;
        if (!ta) return;

        const observer = new ResizeObserver((entries) => {
            // Skip the initial layout-triggered observation; we only persist user-driven changes.
            if (initial.current) {
                initial.current = false;
                return;
            }
            for (const entry of entries) {
                const height = entry.contentRect.height;
                if (Number.isFinite(height) && height > 0) {
                    scheduleSave(Math.round(height));
                }
            }
        });
        observer.observe(ta);
        return () => {
            observer.disconnect();
            if (saveTimer.current) clearTimeout(saveTimer.current);
        };
    }, [scheduleSave]);

    return ref;
};
