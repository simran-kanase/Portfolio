// Home.jsx
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CardProvider } from "./CardContext";
import CardContainer from "./CardContainer";
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <CardProvider>
      <div>
        <div className="flex flex-col sm:flex-row min-h-[90.5vh] gap-2 p-1 bg-[rgb(245,245,220)] ">
          {/* Left side */}
          <div
            className="flex flex-col items-center px-6 mt-24 text-center basis-full sm:basis-1/2 sm:mt-40 sm:text-left"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <h1 className="mt-10 text-3xl font-bold text-[rgb(11,42,51)] sm:text-4xl">
              Hi, I am Simran
            </h1>
            <p className="px-4 mt-2 text-xl text-[rgb(23,80,97)] sm:mt-12 sm:px-16">
              I am a passionate web developer skilled in React, Tailwind CSS,
              and modern web development. I love building interactive,
              user-friendly applications.
            </p>

            <a
              href="../assets/resume.pdf"
              download = "resume.pdf"
              className="bg-[#ffc235] text-black px-6 py-3 mt-8 rounded-md font-semibold hover:bg-[#f39c12] transition"
            >
              Download Resume
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center justify-center border-black basis-full sm:basis-1/2 sm:mt-20">
            <CardContainer />
          </div>
        </div>
      </div>
    </CardProvider>
  );
};

export default Home;
