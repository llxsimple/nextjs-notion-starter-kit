module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'c8602e50f69041dfa2c93898f6fe0bc9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '凌晨',
  domain: 'xlingchen.me',
  author: '凌晨',

  // open graph metadata (optional)
  description: '凌晨',
  socialImageTitle: 'https://sparkling-napkin-318.notion.site/Homepage-c8602e50f69041dfa2c93898f6fe0bc9',
  socialImageSubtitle: '凌晨! 👋',

  // social usernames (optional)
  github: 'Ted0916',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
