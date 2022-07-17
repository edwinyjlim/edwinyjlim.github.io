module.exports = {
  meta: {
    title: "Edwin Lim - Technical Writer",
    description: "This is my technical writing portfolio.",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "rss feed stuff",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "Edwin Lim",
    authorEmail: "edwinyjlim@gmail.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Hello.",
    description: "Welcome. I'm Edwin Lim and I built this site to host my portfolio of technical writing samples."
  }
};