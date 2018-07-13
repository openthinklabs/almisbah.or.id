module.exports = {
  siteTitle: "Yayasan Al-Misbah", // Site title.
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
  userName: "Yami", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Desa Ciderum, Caringin, Kab. Bogor", // User location to display in the author segment.
  userAvatar: "/logos/logo-192.png", // User avatar to display in the author segment.
  userDescription:
    "Jika seseorang meninggal dunia, maka terputuslah amalannya kecuali tiga perkara (yaitu): sedekah jariyah, ilmu yang dimanfaatkan, atau do’a anak yang sholeh (HR. Muslim no. 1631)", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Profil",
      url: "",
      iconClassName: "fa fa-institution"
    },
    {
      label: "Kurikulum",
      url: "",
      iconClassName: "fa fa-book"
    },
    {
      label: "Galeri",
      url: "",
      iconClassName: "fa fa-photo"
    },
    {
      label: "Alumni",
      url: "",
      iconClassName: "fa fa-graduation-cap"
    },
    {
      label: "Artikel",
      url: "",
      iconClassName: "fa fa-newspaper-o"
    },
    {
      label: "Program Orang Tua Asuh",
      url: "",
      iconClassName: "fa fa-handshake-o"
    },
    {
      label: "ZISWAF",
      url: "",
      iconClassName: "fa fa-smile-o"
    }                
  ],
  copyright: "Copyright © 2018. Yayasan Al-Misbah Ulumul Al-Qur'an" // Copyright string for the footer of the website and RSS feed.
};
