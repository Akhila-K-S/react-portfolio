import { useState } from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import {
    HiOutlineBriefcase,
    HiOutlineCodeBracket,
    HiOutlineDevicePhoneMobile,
    HiOutlineSparkles,
    HiOutlineUsers,
} from "react-icons/hi2";

const HIGHLIGHTS = [
    { label: "4+ Years", description: "Building production apps", icon: HiOutlineBriefcase },
    { label: "Cross-Platform", description: "React Native & React.js", icon: HiOutlineDevicePhoneMobile },
    { label: "Modern Stack", description: "TypeScript & JavaScript", icon: HiOutlineCodeBracket },
    { label: "Collaborative", description: "Agile team workflows", icon: HiOutlineUsers },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
    const [expanded, setExpanded] = useState(false);
    const isLong = ABOUT_TEXT.length > 320;

    return (
        <section id="about" className="border-b border-neutral-900 pb-16">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center tracking-tighter"
            >
                <p className="mb-3 text-sm gradient-text">Who I Am</p>
                <h2 className="text-4xl gradient-text lg:mt-4">About Me</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm gradient-text">
                    Passionate developer focused on scalable, user-centric solutions
                </p>
            </motion.div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto w-full max-w-md lg:max-w-none"
                >
                    <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-purple-500/25 via-pink-500/10 to-purple-500/25 blur-xl" />
                    <div className="relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-1.5 backdrop-blur-sm">
                        <img src={aboutImg} alt="Akhila K S" className="aspect-[4/5] w-full rounded-xl object-cover" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent p-6 pt-16">
                            <div className="flex items-center gap-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-neutral-800">
                                    <HiOutlineSparkles className="text-sm text-neutral-300" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold tracking-tighter gradient-text">Akhila K S</p>
                                    <p className="text-xs gradient-text">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="absolute -right-3 -top-3 rounded-xl border border-neutral-800/80 bg-neutral-900/90 px-4 py-3 backdrop-blur-md"
                    >
                        <p className="text-2xl font-bold text-purple-500">4+</p>
                        <p className="text-xs text-neutral-400">Years Exp.</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="space-y-6 tracking-tighter"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6 backdrop-blur-sm md:p-8"
                    >
                        <p className="mb-4 font-light tracking-tighter">
                            Mobile & Web Developer crafting high-quality, cross-platform applications.
                        </p>

                        <p
                            className={`font-light tracking-tighter text-justify text-neutral-400 ${
                                !expanded && isLong ? "line-clamp-5" : ""
                            }`}
                        >
                            {ABOUT_TEXT}
                        </p>

                        {isLong && (
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="mt-3 text-sm font-light tracking-tighter gradient-text hover:underline"
                            >
                                {expanded ? "Show less" : "Read more"}
                            </button>
                        )}
                    </motion.div>

                    <motion.div variants={containerVariants} className="grid grid-cols-2 gap-3">
                        {HIGHLIGHTS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.label}
                                    variants={itemVariants}
                                    className="group rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/60"
                                >
                                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950/60 ring-1 ring-neutral-800 transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="text-lg text-neutral-300" />
                                    </div>
                                    <p className="text-sm font-semibold tracking-tighter gradient-text">{item.label}</p>
                                    <p className="mt-0.5 text-xs font-light tracking-tighter text-neutral-400">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
