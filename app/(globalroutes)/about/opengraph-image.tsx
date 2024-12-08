import { ImageResponse } from "next/og";
import { lobster } from "@/utils/utils-function/font-function";

export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Fetch the Lobster font data

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Lobster",
        }}
      >
        About Acme
      </div>
    ),
    {
      // Set the size for the image
      ...size,
      
    }
  );
}
