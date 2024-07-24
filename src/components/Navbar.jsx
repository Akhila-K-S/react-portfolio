import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl  tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-transparent lg:mt-16">
          {"<Aks/>"}
        </h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareThreads />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
