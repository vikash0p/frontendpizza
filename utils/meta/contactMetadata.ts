export const contactMetadata = {
  title: "Contact Us | Home Pizza | Get in Touch with Us",
  description:
    "Have questions or need assistance? Visit the Home Pizza Contact page to get in touch with our team. Whether you have inquiries about orders, delivery, or any other concerns, we're here to help.",

  openGraph: {
    title: "Contact Us | Home Pizza | Get in Touch with Us",
    description:
      "Reach out to Home Pizza through our Contact page for any questions or support. We're here to assist with orders, delivery issues, and other inquiries.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/contact`,
    images: "/opengraph-image.jpg", // Path to a specific image for the Contact page
    siteName: "Home Pizza",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Home Pizza | Get in Touch with Us",
    description:
      "Contact Home Pizza for support with your orders and inquiries. We're here to assist you.",
    images: "/opengraph-image.jpg", // Path to a specific image for the Contact page on Twitter
  },
};