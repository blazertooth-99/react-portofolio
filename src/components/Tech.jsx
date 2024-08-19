import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Tech</motion.h1>
      <motion.div
      whileInView={{ opacity: 1, x: 0}}
      initial={{ opacity:0, x: -100}}
      transition={{ duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" alt="React Js"/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript className="text-7xl text-orange-800" alt="JavaScript"/>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiDatabase className="text-7xl text-cyan-800" alt="Database"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCodeigniter className="text-7xl text-red-800" alt="Code Igniter"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPhp className="text-7xl text-cyan-600" alt="Php"/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" alt="Node Js"/>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" alt="PostgreSql"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
