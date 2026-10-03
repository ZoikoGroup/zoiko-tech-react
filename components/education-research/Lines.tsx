import { Fragment } from "react";

/**
 * Copy with the exact line breaks from the Figma desktop frame (1440px).
 * The <br> only shows from xl (1280px) up; on tablet and mobile the text wraps naturally.
 */
export default function Lines({ lines }: { lines: string[] }) {
  return (
    <span className={lines.length > 1 ? "xl:whitespace-nowrap" : undefined}>
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
