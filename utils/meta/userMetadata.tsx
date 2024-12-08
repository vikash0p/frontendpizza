export const userMetadata = {
  title: "User Profile | Home Pizza | Manage Your Account",
  description:
    "Access your Home Pizza user profile to manage your account details, view your order history, and update your preferences. Enjoy a personalized experience tailored to your pizza orders.",

  openGraph: {
    title: "User Profile | Home Pizza | Manage Your Account",
    description:
      "View and manage your Home Pizza account from your user profile. Check your order history, update your details, and customize your preferences for a better pizza experience.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/user`,
    images: "/opengraph-image.jpg",
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "User Profile | Home Pizza | Manage Your Account",
    description:
      "Manage your Home Pizza account from your profile page. View your order history and update your account details.",
    images: "/opengraph-image.jpg",
  },
};