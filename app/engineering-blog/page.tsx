import {
  EngineeringBlogSection,
  WhatYouWillDiscoverSection,
  GlobalConversationsSection,
} from "@/components/engineering-blog";

export default function EngineeringPage() {
  return (
    <main>
      <EngineeringBlogSection />
      <WhatYouWillDiscoverSection />
      <GlobalConversationsSection />
    </main>
  );
}
