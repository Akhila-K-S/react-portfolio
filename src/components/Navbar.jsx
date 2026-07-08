import { useEffect, useState } from "react";
import { CONTACT_LINKS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experiences" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
];

const SOCIAL_LINKS = [
    { label: "LinkedIn", href: CONTACT_LINKS.linkedIn, icon: FaLinkedin },
    { label: "GitHub", href: CONTACT_LINKS.gitHub, icon: FaGithub },
    { label: "Email", href: `mailto:${CONTACT_LINKS.email}`, icon: HiOutlineEnvelope },
];

const scrollTo = (id) => {
    if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const handleNavClick = (id) => {
        scrollTo(id);
        setMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
                    scrolled
                        ? "border-neutral-200/80 bg-white/90 shadow-sm shadow-black/5 backdrop-blur-lg dark:border-neutral-800/80 dark:bg-neutral-950/90 dark:shadow-black/20"
                        : "border-neutral-200/50 bg-white/70 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/70"
                }`}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:px-8">
                    <button
                        onClick={() => handleNavClick("top")}
                        className="text-xl font-bold tracking-tight gradient-text sm:text-2xl"
                    >
                        {"<Aks/>"}
                    </button>

                    <div className="hidden items-center gap-0.5 lg:flex">
                        {NAV_LINKS.map((link) => (
                            <button key={link.id} onClick={() => handleNavClick(link.id)} className="nav-link">
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="hidden items-center gap-2 md:flex">
                        <ThemeToggle />
                        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                rel="noopener noreferrer"
                                target="_blank"
                                aria-label={label}
                                className="icon-button h-9 w-9"
                            >
                                <Icon className="text-lg" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="icon-button h-10 w-10"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? <HiOutlineXMark className="text-xl" /> : <HiOutlineBars3 className="text-xl" />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white/90 backdrop-blur-sm dark:bg-neutral-950/90 lg:hidden"
                        onClick={() => setMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.2 }}
                            className="mx-6 mt-[4.5rem] rounded-2xl border border-neutral-200 bg-white/95 p-6 shadow-lg shadow-black/5 dark:border-neutral-800 dark:bg-neutral-900/95 dark:shadow-black/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-1">
                                {NAV_LINKS.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => handleNavClick(link.id)}
                                        className="rounded-xl px-4 py-3 text-left text-lg font-semibold tracking-tighter gradient-text transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-center gap-3 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        aria-label={label}
                                        className="icon-button h-11 w-11"
                                    >
                                        <Icon className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
