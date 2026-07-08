import { HERO_CONTENT, CONTACT_LINKS } from "../constants";
import profilePic from "../assets/developer.jpg";
import { motion } from "framer-motion";
import {
    HiOutlineArrowRight,
    HiOutlineEnvelope,
    HiOutlineMapPin,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const TECH_PILLS = ["React Native", "React.js", "TypeScript"];

const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
    return (
        <section className="section-divider pb-20 pt-2 lg:pb-28 lg:pt-4">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400"
                    >
                        <span className="h-2 w-2 animate-pulse rounded-full bg-purple-500" />
                        Available for new opportunities
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="gradient-text pb-4 text-5xl sm:text-6xl lg:mt-4 lg:text-7xl"
                    >
                        Akhila KS
                    </motion.h1>

                    <motion.span
                        variants={itemVariants}
                        className="gradient-text text-2xl sm:text-3xl"
                    >
                        Software Engineer | Front End Developer
                    </motion.span>

                    <motion.p
                        variants={itemVariants}
                        className="my-2 max-w-2xl py-6 text-justify font-light tracking-tighter"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-2 lg:justify-start"
                    >
                        {TECH_PILLS.map((tech) => (
                            <span
                                key={tech}
                                className="tag-surface px-2 py-1 text-sm font-light tracking-tighter gradient-text"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                    >
                        <button
                            onClick={() => scrollTo("projects")}
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white/80 px-6 py-3 text-sm font-semibold tracking-tighter transition-all hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900/60 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/60"
                        >
                            View Projects
                            <HiOutlineArrowRight className="text-base" />
                        </button>
                        <button
                            onClick={() => scrollTo("contact")}
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white/80 px-6 py-3 text-sm font-semibold tracking-tighter transition-all hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900/60 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/60"
                        >
                            <HiOutlineEnvelope className="text-base" />
                            Get in Touch
                        </button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex items-center gap-4"
                    >
                        <a
                            href={CONTACT_LINKS.linkedIn}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="icon-button h-10 w-10"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-lg" />
                        </a>
                        <a
                            href={CONTACT_LINKS.gitHub}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="icon-button h-10 w-10"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-lg" />
                        </a>
                        <a
                            href={`mailto:${CONTACT_LINKS.email}`}
                            className="icon-button h-10 w-10"
                            aria-label="Email"
                        >
                            <HiOutlineEnvelope className="text-lg" />
                        </a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-6 flex items-center gap-1.5 text-sm text-description"
                    >
                        <HiOutlineMapPin />
                        Dubai, United Arab Emirates
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md"
                >
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/30 via-pink-500/15 to-purple-500/25 blur-2xl" />

                    <div className="relative overflow-hidden rounded-2xl card-surface p-1.5">
                        <img
                            src={profilePic}
                            alt="Akhila KS"
                            className="aspect-square w-full rounded-xl object-cover"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="absolute -bottom-4 -left-4 rounded-xl border border-neutral-200/80 bg-white/95 px-4 py-3 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-900/95"
                    >
                        <p className="text-2xl font-bold text-purple-500">4+</p>
                        <p className="text-xs text-description">Years Experience</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="absolute -right-3 top-6 rounded-xl border border-neutral-200/80 bg-white/95 px-3 py-2 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-900/95"
                    >
                        <p className="text-xs font-medium text-purple-600 dark:text-purple-100">React Native</p>
                        <p className="text-[10px] text-description">& React.js Expert</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
