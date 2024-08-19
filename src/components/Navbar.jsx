import logo from "../assets/CSLogoWhite.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href=""><img className="mx-2 w-20" src={logo} alt="logo" /></a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a style={{display: "table-cell"}} href="https://www.linkedin.com/in/c-satrio/" target="_blank"><FaLinkedin /></a>
        <a style={{display: "table-cell"}} href="https://github.com/blazertooth-99" target="_blank"><FaGithub /></a>
        <a style={{display: "table-cell"}} href="https://www.instagram.com/csatrioo/" target="_blank"><FaInstagram /></a>
        <FaSquareTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
