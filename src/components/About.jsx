import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import girl from "../assets/simran.jpeg"

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    
    <>
      
      <div className=" min-h-[90.2vh] bg-[rgb(245,245,220)]">
      <h1 className='px-12 text-3xl font-bold text-center text-[rgb(11,42,51)]'
      data-aos="fade-down"
  data-aos-duration="1200"
      ><span className='border-b-2 border-[rgb(11,42,51)] text-[rgb(11,42,51)]' >About</span></h1>
        <div className="flex flex-col items-center gap-10 p-6 my-1 md:flex-row">
          {/* Left Side: Image with Fade-In Animation */}
          <div className="w-72 basis-[50%] animate-fade-in">
            <img
              className="rounded-full h-[480px] w-[480px] shadow-lg  "
              src={girl}
              alt="Profile"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>

          {/* Right Side: Text with Slide-In Animation */}
          <div className="basis-[50%] mx-10 text-[rgb(11,42,51)]  text-center md:text-left ">
            <div
              className="p-6 mt-8 bg-gray-100 rounded-lg shadow-md "
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <h1 className="mb-4 text-3xl font-bold">Hi, I am Simran</h1>
              <p className="text-lg leading-relaxed text-[rgb(23,80,97)]">
                I am a passionate developer who thrives on solving complex
                challenges and crafting visually appealing web applications. My
                expertise lies in creating functional designs with a touch of
                creativity, ensuring a seamless user experience.
              </p>
            </div>

            {/* Education Box */}
            <div
              className="p-6 mt-8 bg-gray-100 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h2 className="mb-4 text-2xl font-bold text-[rgb(11,42,51)]">
                Educational Qualifications
              </h2>
              <ul className="text-lg leading-relaxed text-[rgb(23,80,97)]">
                <li>
                  <strong>Under Graduation - </strong>Currently Pursuing B.Tech
                  in Computer Science -RIT,Islampur
                </li>
                <li>
                  <strong>Intermediate</strong> - Vita Highschool, Vita
                </li>
                <li>
                  <strong>High School</strong> - Vita Highschool,Vita
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
