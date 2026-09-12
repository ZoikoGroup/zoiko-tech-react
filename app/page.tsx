import type { Metadata } from "next";

import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "Zoiko Tech | Global AI, Cloud & Enterprise Technology",
  description:
    "Zoiko Tech is a global technology company building AI, cloud, cybersecurity, enterprise software and intelligent infrastructure for organizations worldwide.",
};

export default function Home() {
  return <HomePage />;
}
