"use client";
import { useReducer } from "react";
import Image from "next/image";
import ReachUs from "./ReachUs";
import ImageTopComponent from "../AboutComponents/ImageTopComponent";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function reducer(state: any, action: any) {
  return { ...state, [action.name]: action.value };
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here
    console.log(state);
  };

  return (
    <section className="container m-auto  p-2 md:p-5 lg:p-10">
      <ImageTopComponent
        img="/about/Breadcrump-Image.jpg"
        title="Contact"
        des="Home / Contact"
      />{" "}
      {/* Grid layout */}
      <div className="w-full h-full grid md:grid-cols-2 gap-6 items-center my-14">
        {/* Left side: Image */}
        <div className="w-full relative h-72 md:h-96 lg:h-[550px]">
          <Image
            src="/contact/contact11.jpg"
            alt="Contact Us"
            className="rounded-lg object-contain"
            sizes="(min-width: 1360px) 588px, (min-width: 780px) calc(41.07vw + 38px), calc(100vw - 16px)"
            priority
            fill
          />
        </div>

        {/* Right side: Form */}
        <div className="">
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-textColor">Contact Us</h2>
            <h5 className="text-4xl font-bold mb-6 pb-5">
              Get In Touch For Booking & Enquires
            </h5>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Phone No
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={state.phone}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={state.message}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                rows={4}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-textColor text-white p-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Reach Us Section */}
      <ReachUs />
      {/* Google Maps Section */}
      <section className=" mt-8 sm:mt-16 md:mt-32 lg:mt-48 xl:mt-56 2xl:mt-60 w-full h-full lg:min-h-screen ">
        <h2 className="  md:text-xl lg:text-2xl font-bold mb-6 ">
          Our Location
        </h2>

        {/* Container for map and chef image */}
        <div className="relative w-full h-60 sm:h-72 md:h-96 lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3317465939026!2d77.30431777528273!3d28.469554275754195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce74067df1525%3A0x2adb819b4c474f85!2sCrown%20Interiorz%20Mall!5e0!3m2!1sen!2sin!4v1726373444703!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>

          {/* Chef holding the map image using Next.js Image */}
          <div className="absolute -top-[102px] right-2 w-40 h-40 md:w-96 md:h-96 md:-top-[250px] sm:w-72 sm:h-72 sm:-top-[186px] md:right-12 xl:-top-[340px] 2xl:-top-[360px] lg:right-16 lg:w-1/2 lg:h-full lg:-top-[320px] ">
            <Image
              src="/contact/contact12.png"
              alt="Chef holding the map"
              layout="fill"
              objectFit="contain"
              priority
              sizes="(min-width: 1540px) 728px, (min-width: 1280px) 600px, (min-width: 1040px) 472px, (min-width: 780px) 384px, (min-width: 640px) 288px, 160px"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
