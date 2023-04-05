import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";

const LinkedIn = ({ padding = "p-3", size = 14 }) => {
  const className = `rounded-full shadow-lg shadow-gray-400 ${padding} cursor-pointer hover:scale-105 ease-in duration-300`;
  const sz = size;
  return (
    <a
      href="https://www.linkedin.com/in/nathan-harris-engineer/"
      target="_blank"
      rel="noreferrer"
    >
      <div className={className}>
        <FaLinkedinIn size={sz} color="#0072b1" />
      </div>
    </a>
  );
};

const GitHub = ({ padding = "p-3", size = 14 }) => {
  const className = `rounded-full shadow-lg shadow-gray-400 ${padding} cursor-pointer hover:scale-105 ease-in duration-300`;
  const sz = size;
  return (
    <a href="https://github.com/nedd-ludd" target="_blank" rel="noreferrer">
      <div className={className}>
        <FaGithub size={sz} color="6e5494" />
      </div>
    </a>
  );
};

const CV = ({ padding = "p-3", size = 14 }) => {
  const className = `rounded-full shadow-lg shadow-gray-400 ${padding} cursor-pointer hover:scale-105 ease-in duration-300`;
  const sz = size;
  return (
    <Link href="/resume">
      <div onClick={() => setNav(!nav)} className={className}>
        <BsFillPersonLinesFill size={sz} color="#38804f" />
      </div>
    </Link>
  );
};

const Mail = ({ padding = "p-3", size = 14 }) => {
  const className = `rounded-full shadow-lg shadow-gray-400 ${padding} cursor-pointer hover:scale-105 ease-in duration-300`;
  const sz = size;
  return (
    <Link href="/#contact">
      <div onClick={() => setNav(!nav)} className={className}>
        <AiOutlineMail size={sz} color="c9510c" />
      </div>
    </Link>
  );
};

export { LinkedIn, GitHub, CV, Mail };
