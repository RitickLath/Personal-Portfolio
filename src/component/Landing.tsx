import { motion, scale } from "framer-motion";
import Squares from "../ExternalComponent/Squares";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Landing = () => {
  return (
    <div id="home" className="w-full h-[93vh] flex justify-center items-center">
      <Squares
        speed={0.1}
        squareSize={80}
        direction="diagonal"
        borderColor=""
        // hoverFillColor="#222"
      />
      <div className="z-20 text-center ">
        <motion.p
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {/* <span className="border-[1px] border-[#00AAFF] bg-[#020611] cursor-pointer px-6 py-3 rounded-md">
            Person Peeking from Behind Laptop
          </span> */}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-semibold my-3"
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Hi, I'm Ritick Lath
        </motion.h1>

        <motion.h3
          className="text-[#758296] font-medium lg:text-md"
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          A developer who blends creativity with clean, scalable code.
        </motion.h3>

        <motion.h4
          className="max-w-[550px] lg:max-w-[650px] mx-auto my-4 lg:text-lg text-[#D1D5DB]"
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          From sleek frontends to powerful backends, I build digital products
          that don’t just function — they{" "}
          <span className="text-[#00AAFF]">stand out</span>. I focus on speed,
          elegance, and future-proof tech to deliver impact.
        </motion.h4>

        <div className="mt-6">
          <motion.button
            className="cursor-pointer hover:scale-110 mr-6 px-6 py-3 rounded-md border-[1px] border-[#B67432]"
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Explore My Work
          </motion.button>

          <motion.button
            className="mt-3 cursor-pointer hover:scale-110 px-6 py-3 rounded-md bg-[#00AAFF] text-black font-semibold"
            custom={5}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
