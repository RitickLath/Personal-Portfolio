import { MdNavigateNext } from "react-icons/md";
import React, { useState } from "react";
import { Contactlinks } from "../constants/contacts";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = () => {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="px-4 w-full min-h-screen flex items-center justify-center">
      <div className="mt-16 max-w-7xl w-full">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl font-bold my-4">Let's Connect</h1>
          <p className="mb-4 text-gray-300 max-w-[650px] text-center">
            Whether you're building a new product, scaling an existing one, or
            just want to chat tech —{" "}
            <span className="text-[#00AAFF]">
              I'm always open to new opportunities
            </span>{" "}
            and collaborations.
            <br /> Drop me a message, and let’s create something impactful
            together.
          </p>
        </div>

        <div className="lg:flex lg:justify-center lg:space-x-6">
          {/* Social ContactLinks */}
          <div className="max-w-[450px] grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 lg:mb-0 lg:h-[100px]">
            {Contactlinks.map((ele, index) => (
              <a
                key={index}
                href={ele.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 cursor-pointer rounded-md bg-[#1f1f1f] hover:bg-black text-white"
              >
                <span>{ele.title}</span>
                <span className="text-xl">{ele.icon}</span>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl space-y-4 bg-[#1a1a1a] p-6 rounded-lg shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0e0d0d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AAFF]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0e0d0d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AAFF]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0e0d0d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AAFF]"
            ></textarea>
            <button
              type="submit"
              className="ml-4 flex items-center space-x-2 px-4 py-2 cursor-pointer rounded-sm bg-[#1f1f1f]"
            >
              <span>Send Message</span>
              <MdNavigateNext size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
