import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const inputBorder = theme ? "border-gray-300" : "border-gray-700";
  const textColor = theme ? "text-white placeholder-gray-400" : "text-black placeholder-gray-500" ; ;
  const inputClass = `border ${inputBorder} p-3 rounded-xl focus:outline-none ${textColor}`;
  const buttonClass = theme ? "btn3" : "btn1";

  return (
    <section className="min-h-screen py-12 px-6" id="contact-section">
      <div className="max-w-2xl mx-auto text-center mb-5 flex gap-[1rem] flex-col">
        <h3 className="text-3xl font-bold mb-2">Connect with me</h3>
        <p className="text-lg font-medium">Get in Touch</p>
        <p className="mt-2">
          I'd love to hear from you! Whether it's a question or a project idea — let's talk.
        </p>
      </div>

      <form className="max-w-2xl mx-auto flex flex-col gap-4 p-6" action="mailto:neupaneashutosh68@gmail.com">
        <span className="flex justify-between">
          <input
            type="text"
            placeholder="Enter your name"
            className={`${inputClass} w-[49%]`}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className={`${inputClass} w-[49%]`}
            required
          />
        </span>
        <textarea
          placeholder="Enter your message"
          rows="4"
          className={`${inputClass} resize-none`}
          required
        />
        <button className={`${buttonClass} w-[10rem] self-center`} type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
