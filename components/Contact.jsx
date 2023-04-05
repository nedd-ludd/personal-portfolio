import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ContactImg from "../public/assets/contact.jpg";

import { LinkedIn, GitHub, CV, Mail } from "./common/Connect";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h2 className="py-4">CONTACT</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  alt="/"
                  src={ContactImg}
                />
              </div>
              <div>
                <h2 className="py-2">Nathan Harris</h2>
                <p>Jr Full-Stack Engineer</p>
              </div>
              <div>
                <div className="flex items-center justify-between py-4">
                  <div className="pt-40">
                    <div>
                      <p className="uppercase  border-b tracking-widest text-[#3F504D]">
                        C.V
                      </p>
                      <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                        <CV />
                      </div>
                    </div>
                    <p className="uppercase border-b  tracking-widest text-[#3F504D]">
                      Connect
                    </p>
                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                      <LinkedIn />
                      <GitHub />
                      <Mail />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/55b1539e-1299-4f76-b5c2-f5162c0d5af0"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          {/* <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
