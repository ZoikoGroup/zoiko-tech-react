import {
  NewsUpdates,
  FeaturedStory,
  LatestNewsIndex,
  SearchFilterSort,
  BrowseTopicType,
  ArticleCardContract,
  ArticleDetailTemplate,
  PublicationStateCorrections,
  ExternalCoverageReferences,
  PressReleasesBoundary,
  MediaResourcesBoundary,
  NewspaperNewsroomFAQ,
  AuthoritativeAnswers,
} from "@/components/newspaper";

export default function NewspaperPage() {
  return (
    <main>
      <NewsUpdates />
      <FeaturedStory />
      <LatestNewsIndex />
      <SearchFilterSort />
      <BrowseTopicType />
      <ArticleCardContract />
      <ArticleDetailTemplate />
      <PublicationStateCorrections />
      <ExternalCoverageReferences />
      <PressReleasesBoundary />
      <MediaResourcesBoundary />
      <NewspaperNewsroomFAQ />
      <AuthoritativeAnswers />
    </main>
  );
}
