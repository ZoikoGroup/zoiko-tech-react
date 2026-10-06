import type { Metadata } from "next";
import {
  DesktopSection01,
  DesktopSection02,
  DesktopSection03,
  DesktopSection04,
  DesktopSection05,
  DesktopSection06,
  DesktopSection07,
  DesktopSection08,
  DesktopSection09,
  DesktopSection10,
  DesktopSection11,
  DesktopSection12,
  MobileSection01,
  MobileSection02,
  MobileSection03,
  MobileSection04,
  MobileSection05,
  MobileSection06,
  MobileSection07,
  MobileSection08,
  MobileSection09,
  MobileSection10,
  MobileSection11,
  MobileSection12,
} from "@/components/cybersecurity-protection";

export const metadata: Metadata = {
  title: "Cybersecurity & Protection | Zoiko Tech",
  description:
    "Cybersecurity and protection from Zoiko Tech — protect critical systems, identity and data with governed, evidence-led security.",
};

/**
 * Desktop (>= 1024px) and mobile (< 1024px) are separate components with
 * separate images (Desktop* / Mobile* files), so editing one never affects
 * the other. Only one set is visible at a time (CSS).
 */
export default function CybersecurityProtectionPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="hidden lg:block">
        <DesktopSection01 />
        <DesktopSection02 />
        <DesktopSection03 />
        <DesktopSection04 />
        <DesktopSection05 />
        <DesktopSection06 />
        <DesktopSection07 />
        <DesktopSection08 />
        <DesktopSection09 />
        <DesktopSection10 />
        <DesktopSection11 />
        <DesktopSection12 />
      </div>

      <div className="lg:hidden">
        <MobileSection01 />
        <MobileSection02 />
        <MobileSection03 />
        <MobileSection04 />
        <MobileSection05 />
        <MobileSection06 />
        <MobileSection07 />
        <MobileSection08 />
        <MobileSection09 />
        <MobileSection10 />
        <MobileSection11 />
        <MobileSection12 />
      </div>
    </div>
  );
}
