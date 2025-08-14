import bgImg from "../../assets/bg-image/bg-image.jpg";
import { motion } from "motion/react";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Layout = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }} // start above
          whileInView={{ opacity: 1, y: 0 }} // move to position
          viewport={{ once: false, amount: 0.7 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.8, 0.25, 1], // smooth easing
          }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome to Our Site
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.8, 0.25, 1], // smooth easing
          }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome to Our Site
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.7, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome to Our Site
        </motion.h1>
        {/* .................eta scroll a boro choto hobe.................. */}
        <motion.h1
          ref={ref}
          style={{ scale }}
          className="text-4xl font-semi-bold"
        >
          This Text will small and big onScroll
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          className="mt-4 text-lg md:text-xl"
        >
          Your success starts with a beautiful design.
        </motion.p>
        <motion.button
          className="bg-gray-400 px-4 py-2 rounded"
          whileHover={{ scale: 1.2, transition: { duration: 1 } }}
          whileTap={{ scale: 0.9 }}
        >
          Click Me
        </motion.button>
      </div>
    </div>
  );
};

export default Layout;
