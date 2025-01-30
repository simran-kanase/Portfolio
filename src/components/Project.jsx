import { useEffect, useRef, useState } from "react";
import projectData from "../data/projects.json";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images from assets
import project1 from "../assets/rock paper.png";
import project2 from "../assets/Age calculator.png";
import project3 from "../assets/to do list.png";


// Map JSON image names to actual imports
const imageMap = {
  "rock paper": project1,
  "Age calculator": project2,
  "to do list": project3
};

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  useEffect(() => {
      AOS.init();
    }, []);

  const lineRef = useRef(null);
  const projectRefs = useRef([]);
  const projectLineRefs = useRef([]);

  useEffect(() => {
    const verticalLine = lineRef.current;
    const projectElements = projectRefs.current;
    const lineElements = projectLineRefs.current;

    verticalLine.style.height = "0%";
    setTimeout(() => {
      verticalLine.style.transition = "height 1.8s ease-in-out";
      verticalLine.style.height = "100%";
    }, 100);

    lineElements.forEach((line, index) => {
      const isLeft = index % 2 === 1;
      const projectElement = projectElements[index];

      setTimeout(() => {
        if (projectElement) {
          line.style.width = `16.6%`;
          line.style.transition = "width 1s ease-in-out, filter 0.5s ease-in-out";
          line.style.filter = "none";
          projectElement.style.filter = "none"; // Unblur project box
        }
      }, 1600 + index * 400);
    });
  }, [projects]);

  return (
    <div className="min-h-screen p-4 bg-[rgb(245,245,220)]">
      <h1 className='px-12 text-3xl font-bold text-center text-[rgb(11,42,51)]'
      data-aos="fade-down"
  data-aos-duration="1200"
      ><span className='border-b-2 border-[rgb(11,42,51)]' >Project</span></h1>
      <div className="flex items-center justify-center mt-3" >
      
      <div className="relative flex flex-col items-center w-full max-w-4xl">
        <div
          ref={lineRef}
          className="absolute top-0 w-1 transform -translate-x-1/2 bg-gray-800 left-1/2"
          style={{ height: "0%" }}
        ></div>

        {projects.map((project, index) => {
          const isLeft = index % 2 === 1;
          return (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`relative flex flex-col ${isLeft ? "items-start" : "items-end"} w-full mb-16`}
              style={{ filter: "blur(4px)", transition: "filter 0.8s ease-in-out" }}
            >
              <div
                className="absolute h-1 bg-gray-800"
                style={{
                  top: "50%",
                  left: isLeft ? "auto" : "50%",
                  right: isLeft ? "50%" : "auto",
                  width: "0",
                  transformOrigin: isLeft ? "right" : "left",
                  filter: "blur(4px)"
                }}
                ref={(el) => (projectLineRefs.current[index] = el)}
              ></div>

              {/* Project Box */}
              <div className={`w-1/3 p-6 rounded-lg shadow-lg bg-gray-100 ${isLeft ? "text-right" : "text-left"}`}>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <img src={imageMap[project.image]} alt={project.title} className="w-full h-auto mt-3 rounded-lg" />
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Project;
