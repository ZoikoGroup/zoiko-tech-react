import {
  OfficialZoikoTechPressReleases,
  LatestApprovedRelease,
  OfficialReleaseArchive,
  SearchApprovedPublicationMetadata,
  BrowseByYearAndTopic,
  ReleaseEssentials,
  AFormalStatementStaysIntact,
  QuotesBoilerplateAndContactRecords,
  CorrectionsBelongToThePublicRecord,
  EditorialBoundariesAndNewsroomDistinction,
  SpecialistFactsRetainTheirSource,
  UnavailableInformationFailsClosed,
  ClearAnswersForCitationAndReuse,
} from "@/components/press-releases";

export default function PressReleasesPage() {
  return (
    <main>
      <OfficialZoikoTechPressReleases />
      <LatestApprovedRelease />
      <OfficialReleaseArchive />
      <SearchApprovedPublicationMetadata />
      <BrowseByYearAndTopic />
      <ReleaseEssentials />
      <AFormalStatementStaysIntact />
      <QuotesBoilerplateAndContactRecords />
      <CorrectionsBelongToThePublicRecord />
      <EditorialBoundariesAndNewsroomDistinction />
      <SpecialistFactsRetainTheirSource />
      <UnavailableInformationFailsClosed />
      <ClearAnswersForCitationAndReuse />
    </main>
  );
}
