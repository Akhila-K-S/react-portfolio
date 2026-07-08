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

const SKILL_CATEGORIES = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: BiLogoReact, color: "text-cyan-400" },
            { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-400" },
            { name: "JavaScript", icon: BiLogoJavascript, color: "text-yellow-400" },
            { name: "Redux", icon: BiLogoRedux, color: "text-cyan-400" },
            { name: "Redux Saga", icon: SiReduxsaga, color: "text-green-400" },
            { name: "CSS3", icon: BiLogoCss3, color: "text-blue-400" },
        ],
    },
    {
        title: "Mobile",
        skills: [
            { name: "React Native", icon: BiLogoReact, color: "text-cyan-400" },
            { name: "Android", icon: BiLogoAndroid, color: "text-green-500" },
            { name: "iOS", icon: BiLogoApple, color: "text-neutral-300" },
            { name: "Xcode", icon: SiXcode, color: "text-blue-500" },
        ],
    },
    {
        title: "Tools & Backend",
        skills: [
            { name: "Node.js", icon: BiLogoNodejs, color: "text-green-400" },
            { name: "Firebase", icon: BiLogoFirebase, color: "text-orange-400" },
            { name: "Git", icon: BiLogoGit, color: "text-orange-500" },
            { name: "GitHub", icon: BiLogoGithub, color: "text-neutral-300" },
            { name: "npm", icon: CgNpm, color: "text-red-500" },
            { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-500" },
        ],
    },
    {
        title: "Platforms",
        skills: [
            { name: "Linux", icon: DiLinux, color: "text-neutral-300" },
            { name: "Windows", icon: BiLogoWindows, color: "text-blue-400" },
            { name: "macOS", icon: BiLogoApple, color: "text-neutral-300" },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillItem = ({ skill }) => {
    const Icon = skill.icon;

    return (
        <div className="group/skill flex flex-col items-center gap-2 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-100/80 dark:hover:border-neutral-700/80 dark:hover:bg-neutral-800/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-neutral-200 p-2 transition-all duration-300 group-hover/skill:scale-110 dark:border-neutral-800">
                <Icon className={`text-2xl ${skill.color}`} />
            </div>
            <span className="text-center text-xs font-light tracking-tighter text-description">{skill.name}</span>
        </div>
    );
};

const CategoryCard = ({ category }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="group card-surface-hover p-6"
        >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] tracking-tighter gradient-text">
                {category.title}
            </h3>

            <div className="grid grid-cols-3 gap-1 sm:grid-cols-3">
                {category.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                ))}
            </div>
        </motion.div>
    );
};

const Technologies = () => {
    const totalSkills = SKILL_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);

    return (
        <section id="skills" className="section-divider pb-16">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center tracking-tighter"
            >
                <p className="mb-3 text-sm gradient-text">Tech Stack</p>
                <h2 className="text-4xl gradient-text lg:mt-4">Skills</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm gradient-text">
                    {totalSkills} technologies across frontend, mobile & tooling
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2"
            >
                {SKILL_CATEGORIES.map((category) => (
                    <CategoryCard key={category.title} category={category} />
                ))}
            </motion.div>
        </section>
    );
};

export default Technologies;
