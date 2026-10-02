import { Fragment } from "react";

/** Copy with the exact Figma desktop line breaks (<br> active from xl up). */
export default function DesktopLines({ lines }: { lines: string[] }) {
  return (
    <span className="xl:whitespace-nowrap">
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && (
            <>
              {" "}
              <br className="hidden xl:block" />
            </>
          )}
        </Fragment>
      ))}
    </span>
  );
}
