import React from "react";

const Home = () => {
  return (
    <div className="h-[85vh] w-full flex flex-col items-center justify-center text-">
      {/* Company Name */}
      <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-center">
        PK Inventory
      </h2>
      
      {/* Tagline */}
      <p className="text-lg lg:text-2xl mb-8 text-center max-w-2xl">
        Empowering businesses with cutting-edge technology solutions. Your partner in innovation and success.
      </p>
      
      {/* Call-to-Action */}
      <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default Home;

