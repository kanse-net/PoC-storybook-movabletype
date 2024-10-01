const blockTags = [
  "AuthorHasContent",
  "Actions",
  "ActionsComment",
  "ActionsEntry",
  "ActionsFavorite",
  "ActionsFooter",
  "ActionsHeader",
  "ActionStreams",
  "App:Form",
  "App:Listing",
  "App:Setting",
  "App:SettingGroup",
  "App:StatusMsg",
  "App:Widget",
  "ArchiveList",
  "ArchiveListFooter",
  "ArchiveListHeader",
  "ArchiveNext",
  "ArchivePrevious",
  "Archives",
  "Asset",
  "AssetIfTagged",
  "AssetIsFirstInRow",
  "AssetIsLastInRow",
  "Assets",
  "AssetsFooter",
  "AssetsHeader",
  "AssetTags",
  "AudioCustomFields",
  "AuthorCommentResponses",
  "AuthorComments",
  "AuthorCustomFields",
  "AuthorFollowers",
  "AuthorFollowing",
  "AuthorFollowingComments",
  "AuthorFollowingEntries",
  "AuthorFollowingFavorites",
  "AuthorHasEntry",
  "AuthorHasPage",
  "AuthorIfFollowed",
  "AuthorIfFollowing",
  "AuthorNext",
  "AuthorPrevious",
  "Authors",
  "AuthorUserpicAsset",
  "BlogCustomFields",
  "BlogIfCCLicense",
  "BlogIfCommentsOpen",
  "BlogParentWebsite",
  "BlogResultFooter",
  "BlogResultHeader",
  "Blogs",
  "Calendar",
  "CalendarIfBlank",
  "CalendarIfContents",
  "CalendarIfEntries",
  "CalendarIfNoContents",
  "CalendarIfNoEntries",
  "CalendarIfToday",
  "CalendarWeekFooter",
  "CalendarWeekHeader",
  "Categories",
  "CategoryCustomFields",
  "CategoryIfAllowPings",
  "CategoryNext",
  "CategoryPrevious",
  "CategorySets",
  "ChildSites",
  "CommentCustomFields",
  "CommentEntry",
  "CommenterIfTrusted",
  "CommenterUserpicAsset",
  "CommentIfModerated",
  "CommentParent",
  "CommentReplies",
  "Comments",
  "CommentsFooter",
  "CommentsHeader",
  "ContentAuthorUserpicAsset",
  "ContentCalendar",
  "ContentField",
  "ContentFieldFooter",
  "ContentFieldHeader",
  "ContentFields",
  "ContentFieldsFooter",
  "ContentFieldsHeader",
  "ContentNext",
  "ContentPrevious",
  "Contents",
  "ContentsFooter",
  "ContentsHeader",
  "CustomFieldAsset",
  "CustomFieldIsRequired",
  "DateFooter",
  "DateHeader",
  "Else",
  "ElseIf",
  "Entries",
  "EntriesFooter",
  "EntriesHeader",
  "EntriesWithSubCategories",
  "EntryAdditionalCategories",
  "EntryAssets",
  "EntryAuthorUserpicAsset",
  "EntryCategories",
  "EntryCustomFields",
  "EntryIfAllowComments",
  "EntryIfAllowPings",
  "EntryIfCategory",
  "EntryIfCommentsOpen",
  "EntryIfExtended",
  "EntryIfTagged",
  "EntryNext",
  "EntryPrevious",
  "EntryPrimaryCategory",
  "EntryTags",
  "Feed",
  "FeedEntries",
  "FileCustomFields",
  "FolderCustomFields",
  "FolderFooter",
  "FolderHeader",
  "FolderNext",
  "FolderPrevious",
  "Folders",
  "For",
  "HasNoParentCategory",
  "HasNoParentFolder",
  "HasNoSubCategories",
  "HasNoSubFolders",
  "HasParentCategory",
  "HasParentFolder",
  "HasSubCategories",
  "HasSubFolders",
  "If",
  "IfAllowCommentHTML",
  "IfAnonymousRecommendAllowed",
  "IfArchiveType",
  "IfArchiveTypeEnabled",
  "IfBlog",
  "IfCategory",
  "IfCommenterIsAuthor",
  "IfCommenterIsEntryAuthor",
  "IfCommenterTrusted",
  "IfCommentParent",
  "IfCommentReplies",
  "IfCommentsAccepted",
  "IfCommentsActive",
  "IfCommentsAllowed",
  "IfCommentsModerated",
  "IfCurrentPage",
  "IfDynamic",
  "IfExternalUserManagement",
  "IfFolder",
  "IfImageSupport",
  "IfIsAncestor",
  "IfIsDescendant",
  "IfLoggedIn",
  "IfMaxResultsCutoff",
  "IfMoreResults",
  "IfNeedEmail",
  "IfNonEmpty",
  "IfNonZero",
  "IfPingsAccepted",
  "IfPingsActive",
  "IfPingsAllowed",
  "IfPingsModerated",
  "IfPreviousResults",
  "IfRegistrationAllowed",
  "IfRegistrationNotRequired",
  "IfRegistrationRequired",
  "IfRequireCommentEmails",
  "IfStatic",
  "IfStraightSearch",
  "IfTagSearch",
  "IfTypeKeyToken",
  "IfWebsite",
  "Ignore",
  "ImageCustomFields",
  "IncludeBlock",
  "IndexList",
  "Loop",
  "MarkdownOptions",
  "MultiBlog",
  "MultiBlogIfLocalBlog",
  "MultiBlogLocalBlog",
  "NoSearch",
  "NoSearchResults",
  "OtherBlog",
  "OtherProfiles",
  "PageAssets",
  "PageCustomFields",
  "PageFolder",
  "PageIfTagged",
  "PageNext",
  "PagePrevious",
  "PagerBlock",
  "Pages",
  "PagesFooter",
  "PagesHeader",
  "PageTags",
  "ParentCategories",
  "ParentCategory",
  "ParentFolder",
  "ParentFolders",
  "ParentSite",
  "PingEntry",
  "Pings",
  "PingsFooter",
  "PingsHeader",
  "PingsSent",
  "ProfileServices",
  "SearchResults",
  "Section",
  "SetHashVar",
  "SetVarBlock",
  "SetVars",
  "SetVarTemplate",
  "SiteHasChildSite",
  "SiteIfCommentsOpen",
  "Sites",
  "SitesIfLocalSite",
  "SitesLocalSite",
  "SubCategories",
  "SubCatIsFirst",
  "SubCatIsLast",
  "SubFolders",
  "Tags",
  "TemplateCustomFields",
  "Textile",
  "TopLevelCategories",
  "TopLevelFolder",
  "TopLevelFolders",
  "TopLevelParent",
  "Unless",
  "VideoCustomFields",
  "WebsiteCustomFields",
  "WebsiteHasBlog",
  "WebsiteIfCCLicense",
  "WebsiteIfCommentsOpen",
  "Websites",
];

const functionTags = [
  "AssetBlogID",
  "AssetSiteID",
  "AudioCustomFieldDescription",
  "AudioCustomFieldName",
  "AudioCustomFieldValue",
  "AuthorCommentCount",
  "AuthorContentCount",
  "AuthorEntriesCount",
  "AuthorEntryCount",
  "BlogCustomFieldDescription",
  "BlogCustomFieldName",
  "BlogCustomFieldValue",
  "BlogDateLanguage",
  "BlogThemeID",
  "CanonicalLink",
  "CanonicalURL",
  "CategorySetName",
  "CommentCustomFieldDescription",
  "CommentCustomFieldName",
  "CommentCustomFieldValue",
  "CommentParentID",
  "CommentReplyToLink",
  "CommentSiteID",
  "ContentAuthorDisplayName",
  "ContentAuthorEmail",
  "ContentAuthorID",
  "ContentAuthorLink",
  "ContentAuthorURL",
  "ContentAuthorUsername",
  "ContentAuthorUserpic",
  "ContentAuthorUserpicURL",
  "ContentCreatedDate",
  "ContentDataSearchScript",
  "ContentDate",
  "ContentFieldLabel",
  "ContentFieldValue",
  "ContentID",
  "ContentIdentifier",
  "ContentLabel",
  "ContentModifiedAuthorDisplayName",
  "ContentModifiedAuthorEmail",
  "ContentModifiedAuthorID",
  "ContentModifiedAuthorLink",
  "ContentModifiedAuthorURL",
  "ContentModifiedAuthorUsername",
  "ContentModifiedAuthorUserpic",
  "ContentModifiedAuthorUserpicAsset",
  "ContentModifiedDate",
  "ContentPermalink",
  "ContentsCount",
  "ContentSiteDescription",
  "ContentSiteID",
  "ContentSiteName",
  "ContentSiteURL",
  "ContentStatus",
  "ContentTypeDescription",
  "ContentTypeID",
  "ContentTypeName",
  "ContentTypeUniqueId",
  "ContentUniqueID",
  "ContentUnpublishedDate",
  "CurrentPage",
  "DataAPIScript",
  "DataAPIVersion",
  "EntryModifiedAuthorDisplayName",
  "EntryModifiedAuthorEmail",
  "EntryModifiedAuthorID",
  "EntryModifiedAuthorLink",
  "EntryModifiedAuthorURL",
  "EntryModifiedAuthorUsername",
  "EntryModifiedAuthorUserpic",
  "EntryModifiedAuthorUserpicAsset",
  "EntryModifiedAuthorUserpicURL",
  "EntrySiteDescription",
  "EntrySiteID",
  "EntrySiteName",
  "EntrySiteURL",
  "EntryStatus",
  "FileCustomFieldDescription",
  "FileCustomFieldName",
  "FileCustomFieldValue",
  "ImageCustomFieldDescription",
  "ImageCustomFieldName",
  "ImageCustomFieldValue",
  "Include",
  "NextLink",
  "OtherProfileVar",
  "PageModifiedAuthorDisplayName",
  "PageModifiedAuthorEmail",
  "PageModifiedAuthorLink",
  "PagerLink",
  "PreviousLink",
  "SearchMaxResults",
  "SiteArchiveURL",
  "SiteCategoryCount",
  "SiteCCLicenseImage",
  "SiteCCLicenseURL",
  "SiteCommentCount",
  "SiteContentCount",
  "SiteDateLanguage",
  "SiteDescription",
  "SiteEntryCount",
  "SiteHost",
  "SiteID",
  "SiteLanguage",
  "SiteName",
  "SitePageCount",
  "SiteParentSite",
  "SitePath",
  "SitePingCount",
  "SiteRelativeURL",
  "SiteThemeID",
  "SiteTimezone",
  "SiteURL",
  "StatsSnippet",
  "SupportDirectoryURL",
  "TemplateCustomFieldDescription",
  "TemplateCustomFieldName",
  "TemplateCustomFieldValue",
  "TotalPages",
  "VideoCustomFieldDescription",
  "VideoCustomFieldName",
  "VideoCustomFieldValue",
  "WebsiteCCLicenseImage",
  "WebsiteCCLicenseURL",
  "WebsiteCommentCount",
  "WebsiteCustomFieldDescription",
  "WebsiteCustomFieldName",
  "WebsiteCustomFieldValue",
  "WebsiteDateLanguage",
  "WebsiteDescription",
  "WebsiteEntryCount",
  "WebsiteFileExtension",
  "WebsiteHost",
  "WebsiteID",
  "WebsiteLanguage",
  "WebsiteName",
  "WebsitePageCount",
  "WebsitePath",
  "WebsitePingCount",
  "WebsiteRelativeURL",
  "WebsiteThemeID",
  "WebsiteTimezone",
  "WebsiteURL",
  "Var",
];

const mtTagRegex = /<mt:.*?>|<\/mt:.*?>|<mt:.*?\/>/g;

function wrapBlockTags(template) {
  blockTags.forEach((tag) => {
    const regex = new RegExp(
      `<mt:${tag}.*?>|<\/mt:${tag}>|<mt:${tag}.*?\/>`,
      "g"
    );
    template = template.replace(regex, (match) => {
      return `<div style="background-color:skyblue">${match}</div>`;
    });
  });
  return template;
}

function wrapFunctionTags(template) {
  functionTags.forEach((tag) => {
    const regex = new RegExp(
      `<mt:${tag}.*?>|<\/mt:${tag}>|<mt:${tag}.*?\/>`,
      "g"
    );
    template = template.replace(regex, (match) => {
      return `<div style="background-color:seagreen">${match}</div>`;
    });
  });
  return template;
}

export function processTemplate(template) {
  let modifiedTemplate = template;
  modifiedTemplate = wrapBlockTags(modifiedTemplate);
  modifiedTemplate = wrapFunctionTags(modifiedTemplate);
  modifiedTemplate = modifiedTemplate.replace(mtTagRegex, (match) => {
    return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  });
  return modifiedTemplate;
}
