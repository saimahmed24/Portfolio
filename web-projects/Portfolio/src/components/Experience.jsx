import { motion } from "framer-motion"

const EXPERIENCES = [
  {
    year: "2023-PRESENT",
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
  
]
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}


const Experience = () => {

  return (


    <div id="experience" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24 border-b border-neutral-900 pb-4">
      <h1 className="text-4xl font-light text-gray-500 md:text-6xl">Experience</h1>
      <div>

        {EXPERIENCES.map((experience, index) => (

          <div key={index} className="mb-8 flex flex-wrap justify-center ">

            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-gray-500">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-gray-500 text-xl">{experience.role} - {" "}
                <span className="text-lg text-red-600">{experience.company}</span>
              </h6>
              <p className="mb-4 text-gray-500">{experience.description}</p>
              <div className="flex flex-wrap gap-5">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="border text-white border-red-500 rounded-lg bg-black/50 px-2 py-1">{tech}</span>
                ))}
              </div>

            </div>

          </div>
        ))

        }
      </div>
    </div>


  )
}

export default Experience
