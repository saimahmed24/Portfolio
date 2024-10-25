import image from "/public/image.webp"
import { motion } from "framer-motion"
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(image);
  }, []);
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div 
        initial={{y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        >
          <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-red-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-red-600 md:w-[350px]" />
        </motion.div>
        <motion.div
        initial={{y:50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-red-500 to bg-gray-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">Saim Ahmed</h1>
          <h3 className="bg-gradient-to-r from-gray-500 to bg-red-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">Computer Science Undergraduate</h3>
          <p className="md:text-base text-pretty text-sm  text-gray-500">As a designer and web developer, my role involves transforming ideas into engaging digital experiences. I thrive on communication, effectively translating concepts into cohesive narratives that resonate with users. My ability to articulate ideas stems from a deep passion for my work, coupled with a strong appreciation for collaboration. While some might say I have a knack for conversation, I see it as a commitment to fostering creativity and innovation in every project.</p>
        </motion.div>
      </div>
    </div>

  )
}

export default Hero
