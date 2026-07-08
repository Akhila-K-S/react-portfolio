import { motion } from "framer-motion";
import { getSkillCategories } from "../constants/skillConfig";

/** @param {import('../types').SkillItemProps} props */
const SkillItem = ({ skill }) => {
    const Icon = skill.icon;

    return (
        <div
            title={skill.name}
            aria-label={skill.name}
            className="group/skill flex items-center justify-center gap-2.5 rounded-xl border border-transparent px-1.5 py-2 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-100/80 sm:justify-start dark:hover:border-neutral-700/80 dark:hover:bg-neutral-800/40"
        >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-neutral-200 bg-neutral-50/80 p-1.5 transition-transform duration-300 group-hover/skill:scale-105 dark:border-neutral-800 dark:bg-neutral-900/50">
                <Icon className={`text-lg ${skill.color}`} />
            </div>
            <span className="hidden text-xs font-light leading-tight tracking-tighter text-description sm:inline">
                {skill.name}
            </span>
        </div>
    );
};

/** @param {import('../types').SkillCategoryCardProps} props */
const CategoryCard = ({ category }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="card-surface-hover p-4 md:p-5"
    >
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] gradient-text">
            {category.title}
        </h3>
        <div className="grid grid-cols-2 gap-1">
            {category.skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
            ))}
        </div>
    </motion.div>
);

const Technologies = () => {
    const skillCategories = getSkillCategories();
    const totalSkills = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);

    return (
        <section id="skills" className="section-divider pb-16">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center tracking-tighter"
            >
                <p className="mb-3 text-sm gradient-text">Tech Stack</p>
                <h2 className="text-4xl gradient-text lg:mt-4">Skills</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm gradient-text">
                    {totalSkills} technologies across frontend, mobile, cloud & more
                </p>
            </motion.div>

            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4">
                {skillCategories.map((category) => (
                    <CategoryCard key={category.title} category={category} />
                ))}
            </div>
        </section>
    );
};

export default Technologies;
