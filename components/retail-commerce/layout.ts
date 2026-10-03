/**
 * Shared section container for the three views:
 *  - mobile  (< 768px)  : 24px / 40px (from 640px) side padding, aligned with the site header
 *  - tablet  (768–1023) : 40px side padding   (Figma 768 frame)
 *  - desktop (>= 1024)  : 64px, then 130px from 1280px (Figma 1440 frame), content capped at 1180px
 */
export const WRAP =
  "mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20";
