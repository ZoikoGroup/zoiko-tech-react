import {
  MediaHeaderSection,
  MediaAnnouncementsSection,
  ThoughtLeadershipSection,
  MediaLibraryAssetsSection,
  MediaSmartAlertsSection,
} from "@/components/media-center";

export default function MediaCenterPage() {
  return (
    <main>
      <MediaHeaderSection />
      <MediaAnnouncementsSection />
      <ThoughtLeadershipSection />
      <MediaLibraryAssetsSection />
      <MediaSmartAlertsSection />
    </main>
  );
}
