import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30'>
        <div className='text-center flex flex-col justify-center pt-20 md:pt-32 lg:pt-36 xl:pt-40 xl:text-left h-full container mx-auto px-4 pb-8 lg:pb-12 xl:pb-0'>
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Transformando Ideias <br /> Em{" "}
            <span className='text-accent'>Realidade Digital</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm md:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-8 md:mb-10 xl:mb-16'
          >
            Desenvolvedor Full Stack com mais de 4 anos de experiência,
            especializado em React, React Native e Next.js no frontend, além de
            Fastify e Nest.js no backend. Proativo, comunicativo e sempre em
            busca de aprimoramento contínuo para entregar soluções digitais de
            alta qualidade.
          </motion.p>
          {/* <div className='flex justify-center lg:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div className='hidden lg:flex xl:flex relative'>
            <ProjectsBtn />
          </motion.div> */}
        </div>
      </div>
      <div className='w-full md:w-[600px] lg:w-[800px] xl:w-[1200px] h-full absolute right-0 bottom-0'>
        <div
          className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat
          w-full h-full absolute translate-z-0 mix-blend-color-dodge'
        />
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: "easeInOut" }}
          className='h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[737px] max-h-[300px] md:max-h-[400px] lg:max-h-[550px] xl:max-h-[678px] absolute -bottom-20 md:-bottom-24 lg:bottom-[-15%] xl:bottom-[-20%] right-0 lg:right-[4%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
