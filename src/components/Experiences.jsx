import { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare, HiOutlineBriefcase } from "react-icons/hi2";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ExperienceCard = ({ experience, index, isLast }) => {
    const [expanded, setExpanded] = useState(false);
    const isLong = experience.description.length > 220;
    const isCurrent = index === 0;

    return (
        <motion.div variants={cardVariants} className="relative flex gap-6 md:gap-10">
            <div className="relative flex flex-col items-center">
                <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                        isCurrent
                            ? "border-purple-500/50 bg-neutral-100 shadow-[0_0_20px_rgba(168,85,247,0.15)] dark:bg-neutral-900 dark:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                            : "border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
                    }`}
                >
                    <HiOutlineBriefcase className="text-sm text-description" />
                </motion.div>
                {!isLast && (
                    <div className="absolute top-10 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-purple-500/50 via-neutral-400 to-neutral-300 dark:via-neutral-700 dark:to-neutral-800" />
                )}
            </div>

            <div className="group mb-10 flex-1 pb-2 tracking-tighter">
                <div className="card-surface-hover p-6 md:p-8">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-light tracking-tighter text-description dark:bg-neutral-800">
                                    {experience.year}
                                </span>
                                {isCurrent && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-light tracking-tighter gradient-text dark:bg-neutral-800">
                                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-500" />
                                        Current
                                    </span>
                                )}
                            </div>
                            <h3 className="text-lg font-semibold tracking-tighter gradient-text md:text-xl">
                                {experience.role}
                            </h3>
                        </div>

                        {experience.link && (
                            <a
                                href={experience.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-flex items-center gap-1.5 border-b text-sm gradient-text"
                            >
                                {experience.company}
                                <HiOutlineArrowTopRightOnSquare className="text-xs opacity-60" />
                            </a>
                        )}
                    </div>

                    <p className={`text-description text-justify ${!expanded && isLong ? "line-clamp-3" : ""}`}>
                        {experience.description}
                    </p>

                    {isLong && (
                        <button onClick={() => setExpanded(!expanded)} className="mt-2 text-sm font-light tracking-tighter gradient-text hover:underline">
                            {expanded ? "Show less" : "Read more"}
                        </button>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tag-surface px-2 py-1 text-sm font-light tracking-tighter gradient-text">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experiences = () => {
    return (
        <section id="experiences" className="section-divider pb-16">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center tracking-tighter"
            >
                <p className="mb-3 text-sm gradient-text">Career Journey</p>
                <h2 className="text-4xl gradient-text lg:mt-4">Experiences</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm gradient-text">
                    {EXPERIENCES.length} roles across mobile & web development
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mx-auto max-w-4xl"
            >
                {EXPERIENCES.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        experience={experience}
                        index={index}
                        isLast={index === EXPERIENCES.length - 1}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default Experiences;
