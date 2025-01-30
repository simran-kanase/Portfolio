import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Skilldata from "./skilldata.json"; 

import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.svg';
import nodeIcon from '../assets/node.png';
import figmaIcon from '../assets/figma.png';
import mongodbIcon from '../assets/mongodb.png';

const Skills = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  
  const imageMapping = {
    "HTML": htmlIcon,
    "CSS": cssIcon,
    "JS": jsIcon,
    "React JS": reactIcon,
    "Node JS": nodeIcon,
    "Figma": figmaIcon,
    "Mongo DB": mongodbIcon
  };

  return (
    <div className="bg-[rgb(245,245,220)]" id="skills">
      <h1 className='px-12 text-3xl font-bold text-center text-[rgb(11,42,51)]'
      data-aos="fade-down"
  data-aos-duration="1200"
      ><span className='border-b-2 border-[rgb(23,80,97)]' >My Skills</span></h1>
      <div className="flex flex-wrap items-center justify-center m-auto]  ">
        {Skilldata.map((data) => {
          const iconPath = imageMapping[data.title]; 
          return (
            <div
              className="relative flex flex-col items-center justify-center w-[200px] h-[200px] mx-20 my-10 text-center px-10 py-10 rounded-[50%] border-4 bg-[#f1f1f1]  shadow-2xl    "
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <div className="absolute inset-[-6px] rounded-[50%] border-4 border-t-[#f39c12] border-r-[#cfa3d1] border-b-[#cfb190] border-l-[#ffc079] animate-spin-border"></div>
              <div className="relative z-10">
              <img className='w-20 ' src={iconPath} alt={data.title} />
              <h3 className='text-xl font-semibold' >{data.title}</h3>
            </div>
            </div>
          );
        })}
      </div>
      

    </div>
  );
  
};

export default Skills;


