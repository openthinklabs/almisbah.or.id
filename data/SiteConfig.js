module.exports = {
  siteTitle: "Yayasan Al-Misbah Ulumul Al-Qur'an", // Site title.
  siteTitleShort: "Yayasan Al-Misbah", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Al-Misbah", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://www.almisbah.or.id", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Yayasan Al-Misbah Ulumul Al-Qur'an.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Berita", // Default category for posts.
  dateFromFormat: "DD-MM-YYYY", // Date format used in the frontmatter.
  dateFormat: "DD-MM-YYYY", // Date format for display.
  userName: "Admin", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Desa Ciderum, Caringin, Kab. Bogor", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Demi Waktu.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Profil",
      url: "",
      iconClassName: "fa fa-github"
    },
    {
      label: "Kurikulum",
      url: "",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Galeri",
      url: "",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Alumni",
      url: "",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Artikel",
      url: "",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Program Orang Tua Asuh",
      url: "",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "ZISWAF",
      url: "",
      iconClassName: "fa fa-envelope"
    }                
  ],
  copyright: "Copyright © 2018. Yayasan Al-Misbah Ulumul Al-Qur'an" // Copyright string for the footer of the website and RSS feed.
};
