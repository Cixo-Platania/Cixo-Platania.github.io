import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{png,jpg,jpeg}', {
  eager: true,
});

/** Resolve a path relative to src/assets/ (e.g. "vaf-kart/cover.jpg"). */
export function image(path: string): ImageMetadata {
  const file = files[`/src/assets/${path}`];
  if (!file) throw new Error(`Image not found: src/assets/${path}`);
  return file.default;
}
