import {
  BiLogoAndroid,
  BiLogoApple,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoGithub,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTypescript,
  BiLogoVisualStudio,
  BiLogoWindows,
} from "react-icons/bi";
import { CgNpm } from "react-icons/cg";
import { DiLinux } from "react-icons/di";
import { SiReduxsaga, SiXcode } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
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
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-transparent lg:mt-16"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap item-center justify-center gap-5"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoReact className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoTypescript className="text-5xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoJavascript className="text-5xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoNodejs className="text-5xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoRedux className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <SiXcode className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoAndroid className="text-5xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoGit className="text-5xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoGithub className="text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <CgNpm className="text-5xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoFirebase className="text-5xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoVisualStudio className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoCss3 className="text-5xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <SiReduxsaga className="text-5xl text-green-400" />
        </motion.div>
        {/*  */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <DiLinux className="text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoApple className="text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoWindows className="text-5xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
