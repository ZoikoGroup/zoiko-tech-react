import { Fragment } from "react";

/** Copy with the exact Figma tablet line breaks (<br> active from md up; phones reflow). */
export default function TabletLines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && (
            <>
              {" "}
              <br className="hidden md:block" />
            </>
          )}
        </Fragment>
      ))}
    </>
  );
}
