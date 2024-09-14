import Image from "next/image";
import CountUp from "react-countup";

const PizzaSection = () => {
  return (
    <div className="relative w-full h-auto bg-gray-800 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/ingredients-bg.jpg" // Replace with your background image path
          alt="Pizza Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-50"
          sizes="(min-width: 1540px) 1488px, (min-width: 1280px) 1232px, (min-width: 1040px) 976px, (min-width: 780px) 720px, (min-width: 680px) 592px, calc(94.44vw - 31px)"
        />
      </div>

      <div className="relative z-10 p-12 text-center">
        <h1 className="text-5xl font-bold mb-6">Tastiest Pizza</h1>
        <p className="text-xl mb-4">Ready To Eat-In Take-Away And Delivery.</p>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Metus vulputate eu scelerisque felis imperdiet libero. Etiam tempor
          purus vel elit fringilla sodales et et nibh. Nunc eget magna sit amet
          nulla iaculis ornare non eu sem.
        </p>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10">
          <div>
            <h2 className="text-6xl font-bold">
              <CountUp start={0} end={32} duration={3} />+
            </h2>
            <p className="mt-2 text-gray-400">Restaurants</p>
          </div>

          <div>
            <h2 className="text-6xl font-bold">
              <CountUp start={0} end={10} duration={3} />+
            </h2>
            <p className="mt-2 text-gray-400">Years Of Experience</p>
          </div>

          <div>
            <h2 className="text-6xl font-bold">
              <CountUp start={0} end={45} duration={3} />+
            </h2>
            <p className="mt-2 text-gray-400">Total Menus</p>
          </div>

          <div>
            <h2 className="text-6xl font-bold">
              <CountUp start={0} end={12000} duration={3} />
              K+
            </h2>
            <p className="mt-2 text-gray-400">Happy Customers</p>
          </div>
        </div>

        <button className="mt-10 px-8 py-4 bg-red-600 rounded-lg shadow-lg hover:bg-red-700">
          View Our Menu
        </button>
      </div>
    </div>
  );
};

export default PizzaSection;
