import { ImageResponse } from "next/og";

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
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam velit nulla necessitatibus aspernatur sunt explicabo, consequatur obcaecati voluptate maiores at animi ut quidem harum dolorem quae iste, nesciunt sed alias accusantium officia, ab hic quisquam sint? Repellat aperiam enim quibusdam neque quasi et saepe temporibus cumque praesentium odio! Optio?
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,

    }
  );
}
