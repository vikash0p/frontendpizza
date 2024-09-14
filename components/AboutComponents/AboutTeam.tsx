'use client'
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const AboutTeam = () => {
  const chefs = [
    {
      name: "Liesl Kiki",
      title: "Food Service Manager",
      image: "/team/team1.jpg", // Replace with actual image path
      description:
        "Expert in managing food services and ensuring quality and efficiency in the kitchen.",
      experience: "15 years of experience in food service management.",
      social: {
        facebook: "https://facebook.com/liesl.kiki",
        instagram: "https://instagram.com/liesl.kiki",
        twitter: "https://twitter.com/liesl_kiki",
        youtube: "https://youtube.com/lieslkiki",
      },
    },
    {
      name: "Yustina Marie",
      title: "Master Chef",
      image: "/team/team2.jpg",
      description:
        "Renowned for her culinary excellence and exquisite dish presentations.",
      experience:
        "12 years as a Master Chef specializing in Italian and French cuisine.",
      social: {
        facebook: "https://facebook.com/yustina.marie",
        instagram: "https://instagram.com/yustina.marie",
        twitter: "https://twitter.com/yustina_marie",
        youtube: "https://youtube.com/yustinamarie",
      },
    },
    {
      name: "Latif Medhat",
      title: "Concierge",
      image: "/team/team8.jpg",
      description:
        "Dedicated to ensuring every guest has a personalized and memorable dining experience.",
      experience: "8 years of experience in hospitality and customer service.",
      social: {
        facebook: "https://facebook.com/latif.medhat",
        instagram: "https://instagram.com/latif.medhat",
        twitter: "https://twitter.com/latif_medhat",
        youtube: "https://youtube.com/latifmedhat",
      },
    },
    {
      name: "Stojan Fakhri",
      title: "Kitchen Staff",
      image: "/team/team3.jpg",
      description:
        "Supporting the kitchen operations and ensuring seamless service flow.",
      experience: "5 years of experience in high-end kitchens.",
      social: {
        facebook: "https://facebook.com/stojan.fakhri",
        instagram: "https://instagram.com/stojan.fakhri",
        twitter: "https://twitter.com/stojan_fakhri",
        youtube: "https://youtube.com/stojanfakhri",
      },
    },
    {
      name: "Neven Waleed",
      title: "Executive Chef",
      image: "/team/team7.jpg",
      description:
        "Leads the kitchen with expertise, crafting innovative dishes that leave lasting impressions.",
      experience:
        "20 years of experience as an executive chef in fine dining restaurants.",
      social: {
        facebook: "https://facebook.com/neven.waleed",
        instagram: "https://instagram.com/neven.waleed",
        twitter: "https://twitter.com/neven_waleed",
        youtube: "https://youtube.com/nevenwaleed",
      },
    },
    {
      name: "Alya Wilma",
      title: "Kitchen Manager",
      image: "/team/team4.jpg",
      description:
        "Oversees all kitchen activities, ensuring smooth operation and high standards of cleanliness.",
      experience: "10 years in kitchen management for leading restaurants.",
      social: {
        facebook: "https://facebook.com/alya.wilma",
        instagram: "https://instagram.com/alya.wilma",
        twitter: "https://twitter.com/alya_wilma",
        youtube: "https://youtube.com/alyawilma",
      },
    },
    {
      name: "Coral Raisa",
      title: "Server",
      image: "/team/team5.jpg",
      description:
        "Committed to delivering exceptional table service with a friendly demeanor.",
      experience: "7 years in the hospitality industry.",
      social: {
        facebook: "https://facebook.com/coral.raisa",
        instagram: "https://instagram.com/coral.raisa",
        twitter: "https://twitter.com/coral_raisa",
        youtube: "https://youtube.com/coralraisa",
      },
    },
    {
      name: "Basit Bahadır",
      title: "Hotel Manager",
      image: "/team/team6.jpg",
      description:
        "Ensures that all aspects of the hotel run smoothly, with a focus on guest satisfaction.",
      experience: "15 years in hotel management and hospitality services.",
      social: {
        facebook: "https://facebook.com/basit.bahadir",
        instagram: "https://instagram.com/basit.bahadir",
        twitter: "https://twitter.com/basit_bahadir",
        youtube: "https://youtube.com/basitbahadir",
      },
    },
  ];

  return (
    <div className="container mx-auto p-6 py-20">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Hands Behind Tasty Foods</h1>
        <p className="text-gray-600 mt-4">
          Meet the talented team behind our culinary excellence.
        </p>
      </div>

      {/* Chef Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-bgColor2 p-6 rounded-lg shadow-lg text-center relative"
          >
            <Image
              fill
              priority={true}
              src={chef.image}
              alt={chef.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
              sizes="(min-width: 1540px) 336px, (min-width: 1280px) 272px, (min-width: 1040px) 208px, (min-width: 780px) 320px, (min-width: 640px) 256px, calc(100vw - 96px)"
            />
            <h3 className="text-2xl font-bold">{chef.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{chef.title}</p>
            <p className="mt-4 text-gray-600">{chef.description}</p>
            <p className="mt-2 text-gray-500">Experience: {chef.experience}</p>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 mt-4 text-gray-500">
              <a
                href={chef.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-xl text-blue-600" />
              </a>
              <a
                href={chef.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl text-pink-600" />
              </a>
              <a
                href={chef.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl text-blue-400" />
              </a>
              <a
                href={chef.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-xl text-red-600" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
