import { useState } from "react";
import { CONTACT, CONTACT_LINKS } from "../constants";
import { motion } from "framer-motion";
import {
    HiOutlineClipboardDocument,
    HiOutlineClipboardDocumentCheck,
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlinePhone,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CONTACT_ITEMS = [
    {
        id: "email",
        label: "Email",
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
        icon: HiOutlineEnvelope,
        copyable: true,
    },
    {
        id: "phone",
        label: "Phone",
        value: CONTACT.phoneNo,
        href: `tel:${CONTACT.phoneNo.replace(/\s/g, "")}`,
        icon: HiOutlinePhone,
        copyable: true,
    },
    {
        id: "location",
        label: "Location",
        value: CONTACT.address,
        href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
        icon: HiOutlineMapPin,
        copyable: true,
    },
];

const SOCIAL_LINKS = [
    { label: "LinkedIn", href: CONTACT_LINKS.linkedIn, icon: FaLinkedin },
    { label: "GitHub", href: CONTACT_LINKS.gitHub, icon: FaGithub },
    { label: "Email", href: `mailto:${CONTACT_LINKS.email}`, icon: HiOutlineEnvelope },
];

const ContactCard = ({ item, copiedId, onCopy }) => {
    const Icon = item.icon;
    const isCopied = copiedId === item.id;

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/60 hover:shadow-[0_8px_40px_-12px_rgba(168,85,247,0.2)]"
        >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/5 blur-2xl transition-opacity group-hover:bg-purple-500/10" />

            <div className="mb-4 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/60 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="text-xl text-neutral-300" />
                </div>
                {item.copyable && (
                    <button
                        onClick={() => onCopy(item.id, item.value)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950/60 text-neutral-400 transition-all hover:border-neutral-600 hover:text-neutral-200"
                        aria-label={`Copy ${item.label}`}
                    >
                        {isCopied ? (
                            <HiOutlineClipboardDocumentCheck className="text-lg text-emerald-400" />
                        ) : (
                            <HiOutlineClipboardDocument className="text-lg" />
                        )}
                    </button>
                )}
            </div>

            <p className="mb-1 text-sm gradient-text">{item.label}</p>

            {item.href ? (
                <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target={item.id === "location" ? "_blank" : undefined}
                    className="block font-light tracking-tighter text-neutral-400 transition-colors hover:text-neutral-300"
                >
                    {item.value}
                </a>
            ) : (
                <p className="font-light tracking-tighter text-neutral-400">{item.value}</p>
            )}

            {isCopied && (
                <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs gradient-text"
                >
                    Copied to clipboard!
                </motion.p>
            )}
        </motion.div>
    );
};

const Contact = () => {
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = async (id, value) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch {
            setCopiedId(null);
        }
    };

    return (
        <section id="contact" className="border-b border-neutral-900 pb-20">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center tracking-tighter"
            >
                <p className="mb-3 text-sm gradient-text">Let&apos;s Connect</p>
                <h2 className="text-4xl gradient-text lg:mt-4">Get in Touch</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm gradient-text">
                    Open to new opportunities — reach out anytime
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3"
            >
                {CONTACT_ITEMS.map((item) => (
                    <ContactCard key={item.id} item={item} copiedId={copiedId} onCopy={handleCopy} />
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto mt-12 max-w-5xl"
            >
                <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-8 backdrop-blur-sm">
                    <p className="mb-6 text-center text-sm gradient-text">Find me on</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="group flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/60 px-5 py-3 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900/80"
                            >
                                <Icon className="text-xl text-neutral-400 transition-colors group-hover:text-neutral-200" />
                                <span className="text-sm font-semibold tracking-tighter gradient-text">{label}</span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/60 px-6 py-3 text-sm font-semibold tracking-tighter transition-all hover:border-neutral-600 hover:bg-neutral-800/60"
                        >
                            <HiOutlineEnvelope className="text-base" />
                            Send an Email
                        </a>
                        <a
                            href={CONTACT_LINKS.linkedIn}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/60 px-6 py-3 text-sm font-semibold tracking-tighter gradient-text transition-all hover:border-neutral-600 hover:bg-neutral-800/60"
                        >
                            <FaLinkedin className="text-base" />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
