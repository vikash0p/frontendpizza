// Import necessary components and utilities
import SingleData from "@/components/SingleData";
import axios from "axios";
import { pizza } from "@/utils/interface";
import { Metadata } from "next";

// Function to fetch pizza data
async function getSinglePizzaData(id: string): Promise<pizza | null> {
  try {
    const res = await axios.get(
      `https://backendpizza-crjh.onrender.com/pizza/all/${id}`
    );
    return res.data.pizza;
  } catch (error) {
    console.error("Error fetching pizza data:", error);
    return null;
  }
}

// Function to generate metadata based on pizza ID
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  // Fetch pizza details based on the ID
  const pizzaData = await getSinglePizzaData(id);

  if (!pizzaData) {
    return {
      title: "Pizza Not Found",
      description: "The pizza you are looking for does not exist.",
      openGraph: {
        title: "Pizza Not Found",
        description: "The pizza you are looking for does not exist.",
        url: `https://homepizza.vercel.app/pizza/${id}`,
        images: "/pizza-404-icon-512x512.png",
        siteName: "Home Pizza",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pizza Not Found",
        description: "The pizza you are looking for does not exist.",
        images: "/pizza-404-icon-512x512.png",
      },
    };
  }

  return {
    title: `${pizzaData.name} | Home Pizza`,
    description: `${pizzaData.description} | Discover this delicious pizza at Home Pizza.`,
    openGraph: {
      title: `${pizzaData.name} | Home Pizza`,
      description: `${pizzaData.description} | Discover this delicious pizza at Home Pizza.`,
      url: `https://homepizza.vercel.app/pizza/${id}`,
      images: pizzaData.image || "/pizza-default-icon-512x512.png",
      siteName: "Home Pizza",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pizzaData.name} | Home Pizza`,
      description: `Explore the ${pizzaData.name} pizza, featuring our special ingredients and flavors.`,
      images: pizzaData.image || "/pizza-default-icon-512x512.png",
    },
  };
}

// Default export for the page component
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch pizza data based on the ID
  const data = await getSinglePizzaData(id);

  // Render the SingleData component with pizza data
  return <div>{data ? <SingleData data={data} /> : <p>Loading...</p>}</div>;
}
