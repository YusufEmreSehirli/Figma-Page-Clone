import React from "react";

const Hero = () => {
  return (
    <section className="pt-[-20px] ">
      <div className="container mx-auto px-4 ">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row ">
          {/* Hero Sol */}
          <div className="w-full md:basis-1/2">
            <h1
              className="text-headingColor font-[600] text-[2.5rem] sm:text-[3rem] leading-[40px]
            sm:leading-[56px] mt-5"
            >
              Manage Your <br /> Busines{" "}
              <span className="text-[#5BC17F] finance-highlight">Finance</span>
              <br /> Easily
            </h1>

            <h5 className="font-[300] text-smallTextColor mt-5 text-[1.1rem] sm:text-[1.3rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              dolorum necessitatibus molestiae quis ducimus aperiam sit,
            </h5>

            <div className="flex items-center gap-6 mt-7 ">
              <a href="#deneme">
                <button className="bg-[#5BC17F] text-white font-medium py-2 px-6 flex items-center justify-center rounded-full">
                  Start 14 Days Trial
                </button>
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="basis-1/2 mt-2 sm:mt-4">
            <figure className="flex items-center justify-center">
              <img
                src="src/assets/Objects.png"
                alt=""
                className="max-w-full h-auto"
              />
            </figure>
          </div>
        </div>
        {/* Stats Section */}
        <section className="stats flex flex-wrap justify-around items-center p-5 gap-6">
          <div className="stat-item text-center border-b md:border-b-0 md:border-r border-gray-300 px-10 md:px-12 pb-4 md:pb-0 mb-4">
            <h3 className="text-6xl font-semibold text-[#18063C] md:text-5xl">
              115k+
            </h3>
            <p className="text-sm text-[#404040] mt-3">Active Users</p>
          </div>
          <div className="stat-item text-center border-b md:border-b-0 md:border-r border-gray-300 px-10 md:px-12 pb-4 md:pb-0 mb-4">
            <h3 className="text-6xl font-semibold text-[#18063C] md:text-5xl">
              88k
            </h3>
            <p className="text-sm text-[#404040] mt-3">User Passive</p>
          </div>
          <div className="stat-item text-center border-b md:border-b-0 md:border-r border-gray-300 px-10 md:px-12 pb-4 md:pb-0 mb-4">
            <h3 className="text-6xl font-semibold text-[#18063C] md:text-5xl">
              30%
            </h3>
            <p className="text-sm text-[#404040] mt-3">Increase in Users</p>
          </div>
          <div className="stat-item text-center px-10 md:px-12 mb-4">
            <h3 className="text-6xl font-semibold text-[#18063C] md:text-5xl">
              {">10k+"}
            </h3>
            <p className="text-sm text-[#404040] mt-3">Good Testimonials</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
