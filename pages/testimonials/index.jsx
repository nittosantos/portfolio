import TestimonialSlider from "../../components/TestimonialSlider";
import Circles from "/components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Testimonials;
