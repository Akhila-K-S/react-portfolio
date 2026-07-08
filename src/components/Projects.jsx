import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const VISIBLE_TECH_COUNT = 6;

const ProjectCard = ({ project }) => {
    const [expanded, setExpanded] = useState(false);
    const [showAllTech, setShowAllTech] = useState(false);

    const technologies = project.technologies?.filter(Boolean) ?? [];
    const isLong = project.description.length > 120;
    const visibleTech = showAllTech ? technologies : technologies.slice(0, VISIBLE_TECH_COUNT);
    const hiddenTechCount = technologies.length - VISIBLE_TECH_COUNT;

    return (
        <motion.article variants={cardVariants}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/60">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                </div>

                <div className="relative flex flex-col tracking-tighter p-3 sm:p-6">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2 sm:mb-3 sm:gap-3">
                        <h3 className="text-sm font-semibold tracking-tighter gradient-text sm:text-lg md:text-xl">
                            {project.link ? (
                                <a
                                    href={project.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="border-b"
                                >
                                    {project.title}
                                </a>
                            ) : (
                                project.title
                            )}
                        </h3>
                        {project.link && (
                            <a
                                href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-flex shrink-0 items-center gap-1 text-[10px] tracking-tighter text-neutral-300 hover:underline sm:gap-1.5 sm:text-sm"
                            >
                                Visit
                                <HiOutlineArrowTopRightOnSquare className="text-xs opacity-60" />
                            </a>
                        )}
                    </div>

                    <p
                        className={`font-light leading-snug tracking-tighter text-neutral-400 text-[11px] sm:text-sm sm:leading-relaxed sm:text-justify ${
                            !expanded && isLong ? "line-clamp-2 sm:line-clamp-3" : ""
                        }`}
                    >
                        {project.description}
                    </p>

                    {isLong && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="mt-1 self-start text-[10px] font-light tracking-tighter gradient-text hover:underline sm:mt-2 sm:text-sm"
                        >
                            {expanded ? "Show less" : "Read more"}
                        </button>
                    )}

                    {technologies.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1 sm:mt-5 sm:gap-2">
                            {visibleTech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="rounded bg-neutral-900 px-1.5 py-0.5 text-[10px] font-light tracking-tighter gradient-text sm:px-2 sm:py-1 sm:text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                            {hiddenTechCount > 0 && !showAllTech && (
                                <button
                                    onClick={() => setShowAllTech(true)}
                                    className="rounded bg-neutral-900 px-1.5 py-0.5 text-[10px] font-light tracking-tighter gradient-text hover:underline sm:px-2 sm:py-1 sm:text-sm"
                                >
                                    +{hiddenTechCount}
                                </button>
                            )}
                            {showAllTech && hiddenTechCount > 0 && (
                                <button
                                    onClick={() => setShowAllTech(false)}
                                    className="text-[10px] font-light tracking-tighter gradient-text hover:underline sm:text-sm"
                                >
                                    Less
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="border-b border-neutral-900 pb-16">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center tracking-tighter"
            >
                <p className="mb-3 text-sm gradient-text">Featured Work</p>
                <h2 className="text-4xl gradient-text lg:mt-4">Projects</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm gradient-text">
                    {PROJECTS.length} apps built across mobile, web & CRM platforms
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-6"
            >
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
