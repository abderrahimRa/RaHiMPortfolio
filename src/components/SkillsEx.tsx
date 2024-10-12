import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NumListIcon } from "./HeroEx";

interface SkillsExProps {
  selectedItem: NumListIcon;
  setSelectedItem: (item: NumListIcon) => void;
}

const SkillsEx: React.FC<SkillsExProps> = ({ selectedItem }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: index * 0.1,
      },
    }),
    exit: { opacity: 0, x: 50 },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 10px 20px rgba(70, 177, 155, 0.3)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="relative mt-4 flex  min-w-[250px] flex-col overflow-auto rounded-lg bg-gray-800 p-6 shadow-lg lg:min-w-[436px]"
      style={{
        boxShadow:
          "0 0 20px rgba(70, 177, 155, 0.4), inset 0 0 10px rgba(70, 177, 155, 0.4)",
        border: "2px solid rgba(70, 177, 155, 0.3)",
      }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(70,177,155,0.2) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 80% 80%, rgba(70,177,155,0.2) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 20% 80%, rgba(70,177,155,0.2) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 80% 20%, rgba(70,177,155,0.2) 0%, rgba(0,0,0,0) 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.h3
        className="relative z-10 mb-4 text-2xl font-semibold text-[#46b19b]"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        Skills
      </motion.h3>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedItem.id}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        >
          {selectedItem.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={skillVariants}
              whileHover="hover"
              className="group relative transform overflow-hidden rounded-lg bg-gray-700 p-4 shadow-md transition-all duration-300"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#46b19b] to-[#2c7a6b] opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative mb-2 h-6 overflow-hidden"
                initial={{ height: "auto" }}
                animate={{ height: "auto" }}
              >
                <motion.h4
                  className="text-lg font-medium text-[#5cead6] group-hover:text-white"
                  initial={{ y: 0 }}
                  animate={{
                    y: hoveredSkill === skill.name ? [0, -2, 0] : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.name}
                </motion.h4>
              </motion.div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-600">
                <motion.div
                  className="absolute h-full rounded-full bg-[#46b19b]"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.p
                className="relative mt-2 text-right text-sm text-gray-300 group-hover:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {skill.proficiency}%
              </motion.p>
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-[#5cead6]"
                animate={{
                  scale: hoveredSkill === skill.name ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsEx;
