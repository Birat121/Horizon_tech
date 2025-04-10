import React from 'react';

const About = () => {
  return (
    <section className="w-full h-[85vh] flex flex-col justify-center items-center p-6">
      
      <div className="box-border rounded-2xl w-full max-w-2xl flex flex-col justify-center items-center gap-6 border border-gray-300 shadow-lg bg-white p-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <p className="font-medium text-2xl text-center text-gray-700">
          <span className="font-semibold">Software Name:</span> Horizon For Billing Software
        </p>
        <p className="font-medium text-2xl text-center text-gray-700">
          <span className="font-semibold">Version:</span> 8.5.11
        </p>
        <div className="text-lg md:text-xl text-center text-gray-600 mt-6">
          <p className="font-semibold text-gray-800">Horizon Technology Pvt. Ltd.</p>
          <p className="text-gray-700">Jawalakhel-14, Lalitpur</p>
          <p className="text-gray-700">📞 9851150345, 01-4599030</p>
          <p className="text-gray-700">
            ✉️ Email: 
            <a href="mailto:tech.horizon2017@gmail.com" className="text-blue-500 hover:underline ml-1">
              tech.horizon2017@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            🌐 Website: 
            <a href="http://www.horizontechnology.com.np" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
              www.horizontechnology.com.np
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;