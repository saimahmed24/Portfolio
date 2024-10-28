import { motion } from "framer-motion";
import Testimonials from "./Testimonials";

const EXPERIENCES = [
  {
    year: "2023-PRESENT (Remote)",
    role: "Lead Designer",
    company: "Kuro Solutions",
    description: "As the Lead Designer at Kuro Solutions, I am responsible for driving the creative vision and ensuring the delivery of high-quality design solutions across various projects. My role involves leading a talented design team and collaborating closely with clients and stakeholders to bring their ideas to life.",
    technologies: ["Adobe Suite", "Figma"]
  },
  {
    year: "2023-2024",
    role: "Junior Designer",
    company: "TechNThought",
    description: "As a Junior Designer at TechNThought, I collaborated with a dynamic design team to develop engaging visual solutions for a variety of projects. My responsibilities included assisting in concept development, creating design assets, and supporting the execution of client briefs. Through close teamwork and mentorship, I gained valuable experience in design principles and user experience, contributing to innovative projects while continuously enhancing my skills.",
    technologies: ["Adobe Suite"]
  },
];

const Experience = () => {
  return (
    <div id="experience" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24 border-b border-neutral-900 pb-4">
      <h1 className="text-4xl font-light text-gray-500 md:text-6xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => {
          const motionProps = {
            initial: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
          };

          return (
           
            <motion.div key={index} {...motionProps} className="mb-8 flex flex-wrap justify-center">
              <div className="w-full lg:w-1/4 text-center">
                <p className="mb-2 text-sm text-gray-500">{experience.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-gray-500 text-xl">
                  {experience.role} -{" "}
                  <span className="text-lg text-red-500">{experience.company}</span>
                </h6>
                <p className="mb-4 text-gray-500">{experience.description}</p>
                <div className="flex flex-wrap gap-5">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="border text-white border-red-500 rounded-lg bg-black/50 px-2 py-1">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
            
           
          );
        })}
      </div>
      {/* <Testimonials/> */}
    </div>
  );
};

export default Experience;
