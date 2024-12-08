export const cartMetadata = {
  title: "Cart | Home Pizza | Review Your Pizza Order",
  description:
    "Review and manage your pizza order on the Home Pizza Cart page. Check your selected items, make adjustments, and proceed to checkout to enjoy our delicious pizzas delivered fresh to your door.",

  openGraph: {
    title: "Cart | Home Pizza | Review Your Pizza Order",
    description:
      "View and manage your order on the Home Pizza Cart page. Check your selected pizzas, update quantities, and proceed to checkout for a seamless delivery experience.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/cart`,
    images: "/opengraph-image.jpg", // Path to a specific image for the Cart page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cart | Home Pizza | Review Your Pizza Order",
    description:
      "Manage your pizza order on the Home Pizza Cart page. Check your selections and proceed to checkout.",
    images: "/opengraph-image.jpg", // Path to a specific image for the Cart page on Twitter
  },
};