export const loginMetadata = {
  title: "Login | Home Pizza | Access Your Account",
  description:
    "Log in to your Home Pizza account to manage your orders, view your history, and access exclusive offers. If you don't have an account yet, sign up to start enjoying our delicious pizzas!",

  openGraph: {
    title: "Login | Home Pizza | Access Your Account",
    description:
      "Access your Home Pizza account by logging in. Manage your orders, view your history, and enjoy a personalized pizza experience. New to Home Pizza? Sign up to create an account and start ordering!",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/login`,
    images: "/opengraph-image.jpg", me: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Login | Home Pizza | Access Your Account",
    description:
      "Log in to manage your Home Pizza orders and view your history. New users can sign up to start ordering delicious pizzas.",
    images: "/opengraph-image.jpg",
  },
};