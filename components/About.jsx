import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="border-1 w-full md:h-screen p-2 flex items-center py-16 "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4 text-gray-600">ABOUT</h2>
          <p className="py-2 text-gray-600">
            I’m an Engineer at heart - I love making things fit together and
            work. Although starting first with a career in Civil Engineering, I
            had a chance to use Python with GIS in my first job, and from then
            continued to apply this skill set wherever possible.
          </p>
          <p className="py-2 text-gray-600">
            Having seen the positive impact scripts and software could have, I
            took steps to grow these skills into a new career. I've got to where
            I am through; self-study, my own projects, volunteering, a General
            Assembly Immersive Software course, and a large amount of
            dedication. Taking all of these steps means I come equipped with a
            great range of technical skills and experience with the latest
            frameworks.
          </p>
          <p className="py-2 text-gray-600">
            What I bring to the table is experience in STEM, years of working on
            complex projects, in diverse teams, but with the energy and
            excitement to take on a junior position in software engineering. My
            passion at its core is delivering solutions to problems, to the best
            possible quality, and within the constraints and requirements of our
            real world projects.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
