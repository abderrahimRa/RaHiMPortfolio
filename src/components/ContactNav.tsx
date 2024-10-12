import React, { useState } from "react";
import { motion } from "framer-motion";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

interface ContactNavProps {
  socialLinks: SocialLink[];
}

const ContactNav: React.FC<ContactNavProps> = ({ socialLinks }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-md items-end justify-center overflow-hidden rounded-lg border border-[#3c9484] bg-gray-900 shadow-[0_0_10px_#46b19b]"
    >
      <div className="p-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#46b19b]">
          Connect
        </h2>
        <div className="flex items-center justify-around">
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <motion.div
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-800 transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow:
                      hoveredIndex === index
                        ? "0 0 20px #46b19b, inset 0 0 10px #46b19b"
                        : "0 0 5px #3c9484",
                    backgroundColor:
                      hoveredIndex === index ? "#1e2a38" : "#1a202c",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-3xl text-[#46b19b] transition-colors duration-300 group-hover:text-[#5cead6]" />
                </motion.a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-[#46b19b] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default ContactNav;
