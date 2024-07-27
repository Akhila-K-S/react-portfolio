import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CONTACT_LINKS } from "../constants";
import { RiTwitterXLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl  tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-transparent ">
          {"<Aks/>"}
        </h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={CONTACT_LINKS?.linkedIn}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a
          href={CONTACT_LINKS?.gitHub}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>

        <RiTwitterXLine />

        <a
          href={`mailto:${CONTACT_LINKS?.email}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MdMailOutline />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
