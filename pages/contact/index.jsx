import Circles from "/components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text & Form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Text */}
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Vamos <span className="text-accent">conversar.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* Group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="nome" className="input" />
              <input type="email" placeholder="email" className="input" />
            </div>
            <input type="email" placeholder="assunto" className="input" />
            <textarea placeholder="mensagem" className="textarea" />
            <button
              className="btn rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center
              justify-center overflow-hidden hover:border-accent group mx-auto whitespace-nowrap"
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500 whitespace-nowrap">
                Vamos conversar
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
                group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;
