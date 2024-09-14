'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


const testimonials = [
  {
    name: "Mona William",
    location: "England",
    testimonial:
      "Porta nibh venenatis cras sed felis eget velit aliquet. Quam quisque id diam vel quam. sagittis venenatis. Duis hendrerit sed ipsum vel mattis.",
    image: "/testi1.png", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Sandra",
    location: "Canada",
    testimonial:
      "Sed venenatis sagittis mi id porta. Phasellus Phasellus a justo eget sem porttitor rutrum nec tellus.bibendum lectus et consectetur egestas.",
    image: "/testi2.png", // Replace with actual image path
    rating: 4,
  },
  {
    name: "John Doe",
    location: "USA",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet congue arcu, ac gravida sem. Vestibulum vitae velit at justo finibus fermentum.",
    image: "/testi3.png", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Emma Watson",
    location: "Australia",
    testimonial:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.",
    image: "/tes/test41.jpg", // Replace with actual image path
    rating: 4,
  },
  {
    name: "Liam Smith",
    location: "New Zealand",
    testimonial:
      "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est.",
    image: "/tes/test42.jpg", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Sophia Brown",
    location: "Germany",
    testimonial:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sed libero enim. Aliquam erat volutpat.",
    image: "/tes/test43.jpg", // Replace with actual image path
    rating: 3,
  },
];

// Testimonials Component
const Testimonials = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center ">Our Story</h2>
      <h3 className="text-2xl font-medium text-center text-gray-600 mb-8">
        Hear From Our Guest Experience
      </h3>

      {/* Swiper Component */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center p-6 bg-bgColor2 rounded-lg shadow-lg"
          >
            {/* Image */}
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="rounded-full object-cover"
                sizes="96px"
                priority={true}
              />
            </div>

            {/* Testimonial Content */}
            <p className="text-gray-700 italic text-center mb-4">
              {testimonial.testimonial}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <AiFillStar key={i} className="text-yellow-500 text-lg" />
              ))}
            </div>

            <h4 className="text-lg font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
