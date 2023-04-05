import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { LinkedIn, GitHub, CV, Mail } from "./common/Connect";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-600">
            Hi, I&#39;m <span className="text-[#38804f]"> Nathan</span>
          </h1>
          <h1 className="py-2 text-gray-600">
            A Junior Full-Stack Software Engineer.
          </h1>
          <p className="py-4 text-gray-700 text-lg sm:max-w-[70%] m-auto">
            It's great to have you here! Please take a loook around.
          </p>
          <p className="py-4 text-gray-700 text-lg sm:max-w-[70%] m-auto">
            If you have any questions about me or the projects please get in
            touch.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <LinkedIn padding={"p-5"} size={"20"} />
            <GitHub padding={"p-5"} size={"20"} />
            <Mail padding={"p-5"} size={"20"} />
            <CV padding={"p-5"} size={"20"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
