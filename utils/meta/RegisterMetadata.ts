export const registerMetadata = {
  title: "Register | Home Pizza | Create Your Account",
  description:
    "Sign up for a Home Pizza account to start enjoying our delicious pizzas. Register now to manage your orders, track delivery, and access exclusive offers and promotions.",

  openGraph: {
    title: "Register | Home Pizza | Create Your Account",
    description:
      "Create a Home Pizza account to enjoy a personalized experience. Register to manage your orders, view your order history, and get access to special offers and promotions.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/register`,
    images: "/opengraph-image.jpg",
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Register | Home Pizza | Create Your Account",
    description:
      "Sign up for a Home Pizza account to manage orders, track deliveries, and access exclusive offers.",
    images: "/opengraph-image.jpg",
  },
};