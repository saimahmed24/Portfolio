import { BiLogoAdobe, BiLogoBootstrap, BiLogoCss3, BiLogoDocker, BiLogoFigma, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import { motion } from "framer-motion"
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri"
import { SiAdobeillustrator, SiAdobeindesign, SiAdobelightroom, SiAdobephotoshop, SiAdobexd, SiCanva, SiCoreldraw, SiFigma } from "react-icons/si"
import { DiIllustrator, DiPhotoshop } from "react-icons/di"

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <div id="tech" className="flex min-h-screen w-full flex-col items-center justify-center gap-8 md:gap-16">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-gray-500 md:text-6xl">Technologies</motion.h1>
      <motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-2xl font-light text-gray-500 md:text-4xl">Web Technologies</motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">



        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoReact className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <RiNextjsFill className="cursor-pointer text-[80px] text-neutral-800 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoBootstrap className="cursor-pointer text-[80px] text-indigo-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>


        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoDocker className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>


      </div>
      <motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-2xl font-light text-gray-500 md:text-4xl">Design Technologies</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiAdobeillustrator className="cursor-pointer text-[60px]  text-[#FF9A00] transition-all duration-300 hover:-translate-y-5  sm:text-[100px] md:text-[120px]  " /> {/* Orange */}
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiAdobephotoshop className="cursor-pointer text-[60px]  text-[#31A8FF] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] " /> {/* Blue */}
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiAdobeindesign className="cursor-pointer text-[60px]  text-[#E5007D] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" /> {/* Pink */}
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiAdobelightroom className="cursor-pointer text-[60px]  text-[#F6A600] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" /> {/* Yellow */}
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiAdobexd className="cursor-pointer text-[60px]  text-[#FF3B00] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" /> {/* Red */}
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiCoreldraw className="cursor-pointer text-[60px]  text-[#00B140] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" /> {/* Green */}
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiFigma className="cursor-pointer text-[60px]  text-[#F24E1E] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" /> {/* Orange-Red */}
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiCanva className="cursor-pointer text-[60px]  text-[#00C4CC] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" /> {/* Teal */}
        </motion.div>
      </div>

    </div>
  )
}

export default Tech
