export const blogMetadata = {
  title: "Blog | Home Pizza | Fresh Pizza Insights and News",
  description:
    "Explore the Home Pizza Blog for the latest news, pizza tips, recipes, and insights. Stay updated on all things pizza and get to know our latest offerings and promotions.",

  openGraph: {
    title: "Blog | Home Pizza | Fresh Pizza Insights and News",
    description:
      "Read the Home Pizza Blog for updates, tips, and delicious pizza stories. Discover new recipes, stay informed about our latest promotions, and enjoy our expert pizza insights.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog`,
    images: "/opengraph-image.jpg", // Path to a specific image for the Blog page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | Home Pizza | Fresh Pizza Insights and News",
    description:
      "Catch up on the latest from Home Pizza with our blog. Find pizza tips, recipes, and news updates.",
    images: "/opengraph-image.jpg", // Path to a specific image for the Blog page on Twitter
  },
};
