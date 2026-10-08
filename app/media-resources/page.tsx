import { Metadata } from "next";
import Hero from "@/components/media-resources/Hero";
import MediaSectionResourceLibrary from "@/components/media-resources/MediaSectionResourceLibrary";
import MediaSectionHighlights from "@/components/media-resources/MediaSectionHighlights";
import MediaSectionLogos from "@/components/media-resources/MediaSectionLogos";
import MediaSectionVerifiedFacts from "@/components/media-resources/MediaSectionVerifiedFacts";
import MediaSectionImagery from "@/components/media-resources/MediaSectionImagery";
import MediaSectionLeadership from "@/components/media-resources/MediaSectionLeadership";
import MediaSectionScreenshots from "@/components/media-resources/MediaSectionScreenshots";
import MediaSectionMediaKit from "@/components/media-resources/MediaSectionMediaKit";
import MediaSectionUsage from "@/components/media-resources/MediaSectionUsage";
import MediaSectionDownloads from "@/components/media-resources/MediaSectionDownloads";
import MediaSectionLifecycle from "@/components/media-resources/MediaSectionLifecycle";
import MediaSectionHandoffs from "@/components/media-resources/MediaSectionHandoffs";
import MediaSectionPermissionRequest from "@/components/media-resources/MediaSectionPermissionRequest";
import MediaSectionQuestions from "@/components/media-resources/MediaSectionQuestions";
import MediaSectionNextSteps from "@/components/media-resources/MediaSectionNextSteps";

export const metadata: Metadata = {
  title: "Media Resources | Zoiko Tech",
  description: "Find approved logos, verified company facts and public-use media assets.",
};

export default function MediaResourcesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <Hero />
      <MediaSectionResourceLibrary />
      <MediaSectionHighlights />
      <MediaSectionLogos />
      <MediaSectionVerifiedFacts />
      <MediaSectionImagery />
      <MediaSectionLeadership />
      <MediaSectionScreenshots />
      <MediaSectionMediaKit />
      <MediaSectionUsage />
      <MediaSectionDownloads />
      <MediaSectionLifecycle />
      <MediaSectionHandoffs />
      <MediaSectionPermissionRequest />
      <MediaSectionQuestions />
      <MediaSectionNextSteps />

    </div>
  );
}
