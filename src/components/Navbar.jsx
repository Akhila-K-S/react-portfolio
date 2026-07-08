import { useEffect, useState } from "react";
import { CONTACT_LINKS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

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
        const onScroll = () => setScrolled(window.scrollY > 20);
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
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 ${
                    scrolled ? "pt-3" : "pt-4"
                }`}
            >
                <nav
                    className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
                        scrolled
                            ? "border-neutral-800/80 bg-neutral-950/80 shadow-lg shadow-black/20 backdrop-blur-md"
                            : "border-transparent bg-transparent"
                    }`}
                >
                    <button
                        onClick={() => handleNavClick("top")}
                        className="text-2xl font-bold tracking-tight gradient-text sm:text-3xl"
                    >
                        {"<Aks/>"}
                    </button>

                    <div className="hidden items-center gap-1 lg:flex">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className="rounded-lg px-3 py-2 text-sm font-light tracking-tighter text-neutral-400 transition-colors hover:bg-neutral-800/50 hover:text-neutral-200"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="hidden items-center gap-2 md:flex">
                        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                rel="noopener noreferrer"
                                target="_blank"
                                aria-label={label}
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-400 transition-all hover:border-neutral-600 hover:text-neutral-200"
                            >
                                <Icon className="text-lg" />
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-300 transition-colors hover:border-neutral-600 lg:hidden"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <HiOutlineXMark className="text-xl" /> : <HiOutlineBars3 className="text-xl" />}
                    </button>
                </nav>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-neutral-950/90 backdrop-blur-sm lg:hidden"
                        onClick={() => setMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                            className="mx-4 mt-24 rounded-2xl border border-neutral-800 bg-neutral-900/95 p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-1">
                                {NAV_LINKS.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => handleNavClick(link.id)}
                                        className="rounded-xl px-4 py-3 text-left text-lg font-semibold tracking-tighter gradient-text transition-colors hover:bg-neutral-800/50"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-center gap-3 border-t border-neutral-800 pt-6">
                                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        aria-label={label}
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/60 text-neutral-400 transition-all hover:border-neutral-600 hover:text-neutral-200"
                                    >
                                        <Icon className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mb-8 h-16 sm:h-20" />
        </>
    );
};

export default Navbar;
