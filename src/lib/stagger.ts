import type { CSSProperties } from "react";

/** Sets the `--i` index used by `.enter` and `[data-reveal]` to stagger delays. */
export function stagger(i: number): CSSProperties {
  return { "--i": i } as CSSProperties;
}
