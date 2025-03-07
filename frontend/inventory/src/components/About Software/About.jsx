import React from 'react';

const About = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center p-4 -my-10">
      <h2 className="font-medium text-3xl md:text-4xl text-black text-center mb-8">
        About Software:
      </h2>
      <div className=" box-border rounded-md w-full max-w-xl flex flex-col justify-center items-center gap-4 border-2 border-slate-700 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
        <p className="font-medium text-xl md:text-2xl text-center mt-8 px-4">
          Name of Software: Horizon For Billing Software
        </p>
        <p className="font-medium text-xl md:text-2xl text-center px-4">
          Software Version: 8.5.11
        </p>
        <div className="font-serif text-lg md:text-2xl text-center mt-8 mb-10 px-4">
          <p>Horizon Technology Pvt. Ltd.</p>
          <p className="text-base md:text-lg">
            Jawalakhel-14, Lalitpur
          </p>
          <p className="text-base md:text-lg">
            9851150345, 01-4599030
          </p>
          <p className="text-base md:text-lg">
            Email: <a href="mailto:tech.horizon2017@gmail.com" className="text-blue-500 hover:underline">tech.horizon2017@gmail.com</a>
          </p>
          <p className="text-base md:text-lg">
            Website: <a href="http://www.horizontechnology.com.np" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.horizontechnology.com.np</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
