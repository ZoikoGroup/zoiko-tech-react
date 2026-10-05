import { Fragment } from "react";

type Props = {
  /** Lines exactly as broken in the Figma desktop frame (1440px). Used from xl (1280px). */
  desktop?: string[];
  /** Lines exactly as broken in the Figma tablet frame (768px). Used from md to lg (768–1023px). */
  tablet?: string[];
};

const norm = (lines: string[]) => lines.join(" ").replace(/\s+/g, " ").trim();

/** Offsets (in words) after which a line break occurs. */
const breakSet = (lines: string[] | undefined) => {
  const set = new Set<number>();
  if (!lines) return set;
  let count = 0;
  lines.forEach((line, i) => {
    count += line.trim().split(/\s+/).filter(Boolean).length;
    if (i < lines.length - 1) set.add(count);
  });
  return set;
};

/**
 * Copy with the exact Figma line breaks per view, written once.
 * Desktop breaks only show from xl, tablet breaks only between md and lg,
 * and on mobile (or between lg and xl) the text simply wraps.
 * The desktop and tablet line arrays must contain the same words.
 */
export default function Lines({ desktop, tablet }: Props) {
  const source = desktop ?? tablet ?? [];
  const words = norm(source).split(" ");
  const d = breakSet(desktop);
  const t = breakSet(tablet);
  return (
    <span className={desktop ? "xl:whitespace-nowrap" : undefined}>
      {words.map((w, i) => {
        const pos = i + 1;
        const bd = d.has(pos);
        const bt = t.has(pos);
        const cls =
          bd && bt
            ? "hidden md:block lg:hidden xl:block"
            : bd
              ? "hidden xl:block"
              : bt
                ? "hidden md:block lg:hidden"
                : null;
        return (
          <Fragment key={i}>
            {w}
            {i < words.length - 1 && (cls ? <><br className={cls} />{" "}</> : " ")}
          </Fragment>
        );
      })}
    </span>
  );
}
