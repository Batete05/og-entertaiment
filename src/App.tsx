import React, { useState } from "react";
import { motion } from "framer-motion";
import { SECTIONS_DATA, MAIN_PAGE_IMAGES, SOCIAL_LINKS } from "./constants";
import { SectionData, MediaType } from "./types";
import { Modal } from "./components/Modal";

const Logo = ({ size = "w-8 h-8" }: { size?: string }) => (
  <div
    className={`${size} rounded-full flex items-center justify-center shadow-md overflow-hidden`}
  >
    <img
      src="/logo.jpg"
      alt="OG Entertainment Logo"
      className="w-full h-full object-cover"
    />
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionData | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <main className="flex flex-col lg:flex-row lg:min-h-screen">
          <motion.section
            className="flex flex-col justify-start py-10 px-8 bg-white rounded-3xl shadow-lg/30 space-y-6 m-4 lg:m-0 lg:w-1/2 lg:rounded-r-3xl lg:rounded-l-none lg:p-12 lg:shadow-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="pt-6 flex items-center gap-4"
            >
              <Logo size="w-16 h-16" />
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold"
                variants={itemVariants}
              >
                OG- ENTERTAINMENT
              </motion.h1>
            </motion.div>

            <motion.p className="text-m text-gray-600" variants={itemVariants}>
              Where joy, laughter, and togetherness come to life.
            </motion.p>

            <motion.div
              className="space-y-4 max-w-xl text-m leading-relaxed tracking-wide text-gray-800 pt-4"
              variants={itemVariants}
            >
              <p>
                We specialize in creating unforgettable experiences that bring
                joy, laughter, and connection through engaging team-building
                activities, exciting kids’ entertainment, and heartwarming
                surprises for all ages. Whether it’s a corporate challenge that
                builds stronger bonds or a magical celebration that lights up a
                child’s imagination, we craft events that inspire happiness and
                togetherness.
              </p>
              <p>
                With creativity, passion, and a touch of surprise in everything
                we do, <strong>OG-ENTERTAINMENT</strong> turns ordinary days
                into extraordinary memories — because every smile is worth
                celebrating.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 w-full pt-4"
              variants={containerVariants}
            >
              {SECTIONS_DATA.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section)}
                  className="w-full max-w-[400px] bg-white text-gray-900 px-6 py-4 font-semibold text-left border border-gray-300 hover:border-gray-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    borderColor: "#000000",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {section.title}
                </motion.button>
              ))}
            </motion.div>

            {/* Phone Number */}
            <motion.div className="pt-4 pb-4" variants={itemVariants}>
              <a
                href="tel:0780221169"
                className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                0780221169
              </a>
            </motion.div>

            {/* Places We've Worked With */}
            <motion.div
              className="pt-6 pb-4 border-t border-gray-200"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                 Our partners
              </h3>
              <div className="space-y-2">
                {[
                  "Kigali Universe",
                  "Queens Park",
                  "Century Park",
                  "Zaria Court",
                  "Move n Pick",
                ].map((place, index) => (
                  <motion.div
                    key={index}
                    className="text-gray-700 font-medium"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {place}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Companies We've Worked With */}
            <motion.div
              className="pt-6 pb-4 border-t border-gray-200"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                 our Clients
              </h3>
              <div className="space-y-2">
                {["Mastercard Foundation", "BRD", "Niyoflowers Shop"].map(
                  (company, index) => (
                    <motion.div
                      key={index}
                      className="text-gray-700 font-medium"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {company}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <div className="flex items-center space-x-6">
                {SOCIAL_LINKS.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    aria-label={name}
                    className="text-gray-500 hover:text-gray-900 transition-transform hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            className="grid grid-cols-3 gap-4 px-4 py-2 lg:w-1/2 lg:px-8 lg:py-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {MAIN_PAGE_IMAGES.map((image) => (
              <motion.div
                key={image.id}
                className="overflow-hidden  aspect-square"
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {image.type === MediaType.Video ? (
                  <video
                    src={image.src}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.section>
        </main>
      </div>
      <Modal section={activeSection} onClose={() => setActiveSection(null)} />
    </>
  );
};

export default App;
