import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2024-09-15T11:13:39+01:00"); // Example last modified date

  return [
    {
      url: "https://frontendpizza.vercel.app/",
      lastModified: lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://frontendpizza.vercel.app/cart",
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://frontendpizza.vercel.app/user",
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://frontendpizza.vercel.app/newPizza",
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://frontendpizza.vercel.app/about",
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://frontendpizza.vercel.app/blog",
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.1,
    },
    {
      url: "https://frontendpizza.vercel.app/contact",
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://frontendpizza.vercel.app/login",
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://frontendpizza.vercel.app/register",
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://frontendpizza.vercel.app/pizza",
      lastModified: new Date("2024-09-15T11:13:43+01:00"), // Specific timestamp for the pizza page
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
