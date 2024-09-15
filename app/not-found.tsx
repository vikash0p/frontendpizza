import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {/* Image Container */}
      <div className="w-full max-w-md h-80 relative mb-3">
        <Image
          src={"/error1.png"}
          alt="Not Found Image"
          fill
          className="object-contain  rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Not Found</h2>
        <p className="text-lg mb-6">Could not find the requested resource</p>

        {/* Return Home Link */}
        <Link href="/" passHref>
          <span className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition duration-300">
            Return Home
          </span>
        </Link>
      </div>
    </div>
  );
}
