import localFont from "next/font/local";

/* =========================================================
   SELF-HOSTED FONTS
   Loaded once here and imported wherever needed, so builds
   never fetch from Google Fonts. Files are latin woff2 from
   Fontsource (variable fonts where available).
========================================================= */

export const geistSans = localFont({
  src: "./geist-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = localFont({
  src: "./geist-mono-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});

export const poppins = localFont({
  src: [
    { path: "./poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./poppins-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const plusJakarta = localFont({
  src: "./plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const manrope = localFont({
  src: "./manrope-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});

export const urbanist = localFont({
  src: "./urbanist-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-urbanist",
  display: "swap",
});

export const roboto = localFont({
  src: "./roboto-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-roboto",
  display: "swap",
});
