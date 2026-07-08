import type { ComponentType, ReactNode } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export type Theme = "light" | "dark";

export interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

export interface SkillMeta {
    icon: IconComponent;
    color: string;
}

export interface Skill extends SkillMeta {
    name: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export type SkillCategoryKey =
    | "languages"
    | "frontend"
    | "mobile"
    | "stateManagement"
    | "apiIntegration"
    | "paymentGateways"
    | "security"
    | "localization"
    | "cloudAndDeployment"
    | "ecommerceAndTools"
    | "testingAndDebugging"
    | "aiTools"
    | "tools"
    | "packageManagers"
    | "operatingSystems";

export type SkillsMap = Record<SkillCategoryKey, string[]>;

export interface Experience {
    year: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface Project {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    link?: string;
    iosLink?: string;
    androidLink?: string;
}

export interface ContactInfo {
    address: string;
    phoneNo: string;
    email: string;
}

export interface ContactLinks {
    linkedIn: string;
    gitHub: string;
    email: string;
}

export interface ContactItem {
    id: string;
    label: string;
    value: string;
    href?: string;
    icon: IconComponent;
    copyable?: boolean;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: IconComponent;
}

export interface ThemeProviderProps {
    children: ReactNode;
}

export interface ThemeToggleProps {
    className?: string;
}

export interface SkillItemProps {
    skill: Skill;
}

export interface SkillCategoryCardProps {
    category: SkillCategory;
}

export interface ExperienceCardProps {
    experience: Experience;
    index: number;
    isLast: boolean;
}

export interface ProjectCardProps {
    project: Project;
}

export interface ContactCardProps {
    item: ContactItem;
    copiedId: string | null;
    onCopy: (id: string, value: string) => void;
}
