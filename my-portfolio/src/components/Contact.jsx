import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbAsterisk } from "react-icons/tb";
import { MdEmail, MdSend } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace this with your actual email address.
    const recipient = "manvibhandari.contact@gmail.com";

    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
  };

  const inputStyles =
    "w-full rounded-lg border border-gray-700 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-green-400 focus:bg-green-400/[0.03] focus:ring-1 focus:ring-green-400/30 sm:text-base";

  return (
    <section
      id="contact"
      className="w-full scroll-mt-[100px] bg-transparent px-5 pb-20 pt-10 text-white sm:px-6 sm:pb-24 sm:pt-12 md:px-12 md:pt-14"
    >
      <div className="mx-auto w-full max-w-7xl md:pl-8 lg:pl-12">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 flex items-center gap-3 sm:mb-10"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
            className="inline-flex shrink-0"
          >
            <TbAsterisk
              aria-hidden="true"
              className="text-2xl text-green-400 sm:text-3xl"
            />
          </motion.span>

          <h2 className="text-sm uppercase tracking-[0.2em] text-gray-300 sm:text-base">
            My Contact
          </h2>
        </motion.div>

        {/* CENTERED CONTACT CONTENT */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          {/* INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 max-w-2xl text-center sm:mb-12"
          >
            <h3 className="text-2xl font-semibold leading-tight text-gray-100 sm:text-3xl md:text-4xl">
              Let's Connect
              <span className="text-green-400">.</span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              I'd love to hear from you! Reach out for opportunities,
              collaborations, or just to say hello. I'm always happy to
              connect and discuss new ideas.
            </p>
          </motion.div>

          {/* CONTACT FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-5 shadow-[0_0_30px_rgba(34,197,94,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)] sm:p-7 md:p-8"
          >
            {/* TOP ACCENT */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-green-400/70 to-transparent"
            />

            {/* FORM HEADING */}
            <div className="mb-6 flex items-center justify-center gap-2">
              <MdEmail
                aria-hidden="true"
                className="text-xl text-green-400 sm:text-2xl"
              />

              <h4 className="text-lg font-semibold text-gray-100 sm:text-xl">
                Connect With Me
              </h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className={inputStyles}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  className={inputStyles}
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className={inputStyles}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className={`${inputStyles} min-h-32 resize-y`}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-400/40 bg-green-400 px-5 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span>Send Message</span>
                <MdSend aria-hidden="true" className="text-lg" />
              </button>
            </form>

            <p className="mt-5 text-center text-xs leading-5 text-gray-500 sm:text-sm">
              Looking forward to hearing from you!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}