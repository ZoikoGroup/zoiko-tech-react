import { Fragment } from "react";

/**
 * Copy with the exact line breaks from the Figma mobile frame (412px).
 * The <br> only shows from 400px up to 639px; on narrower phones and on
 * wider screens the text reflows naturally.
 */
export default function MobileLines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && (
            <>
              {" "}
              <br className="hidden min-[400px]:max-sm:block" />
            </>
          )}
        </Fragment>
      ))}
    </>
  );
}
