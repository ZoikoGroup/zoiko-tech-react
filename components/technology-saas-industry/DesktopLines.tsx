import { Fragment } from "react";

/**
 * Renders copy with the exact line breaks from the Figma desktop frame.
 * The <br> only shows from xl (1280px) up; below that the text reflows.
 */
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
