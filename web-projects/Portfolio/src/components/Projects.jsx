import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import { motion } from "framer-motion"



const projectsData = [
  {
    image: image1,
    title: "Habit Tracker",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui pariatur molestias magnam neque magni, quod quas ad, dignissimos nisi suscipit odio! Atque commodi facere voluptas vel provident laudantium reprehenderit a!",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"]
  },
  {
    image: image2,
    title: "Todo App",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui pariatur molestias magnam neque magni, quod quas ad, dignissimos nisi suscipit odio! Atque commodi facere voluptas vel provident laudantium reprehenderit a!",
    technologies: ["TypeScript", "Next.Js", "Tailwind", "PostgreSQL"]
  },
  {
    image: image3,
    title: "Social Media App",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui pariatur molestias magnam neque magni, quod quas ad, dignissimos nisi suscipit odio! Atque commodi facere voluptas vel provident laudantium reprehenderit a!",
    technologies: ["TypeScript", "React", "Tailwind", "Supabase"]
  },
  {
    image: image4,
    title: "Restaurant Website",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui pariatur molestias magnam neque magni, quod quas ad, dignissimos nisi suscipit odio! Atque commodi facere voluptas vel provident laudantium reprehenderit a!",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"]
  },
  {
    image: image5,
    title: "Admin Dashboard",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui pariatur molestias magnam neque magni, quod quas ad, dignissimos nisi suscipit odio! Atque commodi facere voluptas vel provident laudantium reprehenderit a!",
    technologies: ["React", "Tailwind", "Docker", "MySQL"]
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

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold text-red-500">{project.title}</div>
            <p className=" text-gray-500">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="border text-white border-red-500 rounded-lg bg-black/50 p-3">
                  {tech}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}


const Projects = () => {

  return (

    <div id="project" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-gray-500 md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-gray-500">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          )
          )
        }
      </div>
    </div>

  )
}

export default Projects
