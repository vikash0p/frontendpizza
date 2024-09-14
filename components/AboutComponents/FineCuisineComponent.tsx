'use client'
import Image from "next/image";

const FineCuisineComponent = () => {
  // Data Array for Features
  const features = [
    {
      title: "Pure Ingredients",
      description: "Orci nulla pellentesque dignissim enim sit. Porttitor leo.",
      image: "/about/chef.png", // Replace with actual image path
    },
    {
      title: "Experienced Chef",
      description:
        "Hac habitasse platea dictumst quisque sagittis purus sit amet.",
      image: "/about/delivery-man-1.png", // Replace with actual image path
    },
    {
      title: "Critical Control",
      description:
        "Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.",
      image: "/about/food-safety.png", // Replace with actual image path
    },
    {
      title: "Well Garnished",
      description: "Velit sed ullamcorper morbi tincidunt ornare massa eget.",
      image: "/about/serve.png", // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto p-6 py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Exception Service</h1>
        <p className="text-lg text-gray-600">
          Fine Cuisine Served With Love & Dedication
        </p>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada
          nunc. Sodales et et nibh. Nunc eget magna sit amet nulla iaculis
          ornare non eu.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Column */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/about/about-left-img.jpg" // Replace with the actual image path
            alt="Fine Cuisine"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="rounded-lg shadow-lg"
            sizes="(min-width: 1540px) 700px, (min-width: 1280px) 572px, (min-width: 1040px) 444px, (min-width: 780px) 672px, (min-width: 680px) 544px, calc(94.44vw - 79px)"
            priority={true}
          />
        </div>

        {/* Data Column */}
        <div className="grid grid-cols-1 gap-6 ">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div className="w-16 h-16">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="rounded-lg"
                  sizes="(min-width: 1280px) 64px, (min-width: 1040px) 56px, (min-width: 640px) 64px, calc(12.5vw - 14px)"
                  priority={true}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FineCuisineComponent;
