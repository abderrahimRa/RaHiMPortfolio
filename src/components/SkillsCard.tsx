import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Skill {
  skill: string;
  proficiency: number;
  language?: string;
}

interface LanguageSkill extends Skill {
  language: string;
}

interface SkillsData {
  technicalSkills: Skill[];
  languageSkills: LanguageSkill[];
  softSkills: Skill[];
}

interface SkillsCardProps {
  skills: SkillsData;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["Technical Skills", "Language Skills", "Soft Skills"];
  const nextCategory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevCategory = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length,
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const SkillList = ({ list }: { list: (Skill | LanguageSkill)[] }) => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 16px rgba(0, 255, 128, 0.2)",
            background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
          }}
          className="relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg transition-all duration-300 ease-in-out"
        >
          <motion.div
            className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-500 opacity-10"
            whileHover={{ scale: 1.2, opacity: 0.2 }}
          />
          <h4 className="mb-4 text-xl font-bold text-white">
            {"language" in skill
              ? `${skill.language}: ${skill.skill}`
              : skill.skill}
          </h4>
          <div className="flex items-center justify-between">
            <motion.div
              className="text-3xl font-extrabold text-green-400"
              whileHover={{ scale: 1.1, color: "#34D399" }}
            >
              {skill.proficiency}%
            </motion.div>
            <div className="h-16 w-16">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#1F2937"
                  strokeWidth="10"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="10"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 283" }}
                  animate={{
                    strokeDasharray: `${skill.proficiency * 2.83} 283`,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  whileHover={{ stroke: "#34D399" }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl"
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 255, 128, 0.25)",
      }}
    >
      <motion.h2
        className="mb-8 bg-gradient-to-r from-green-300 to-green-600 bg-clip-text text-center text-4xl font-extrabold text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        My Skills
      </motion.h2>

      <div className="relative h-[600px]">
        <AnimatePresence initial={false} custom={activeIndex}>
          <motion.div
            key={activeIndex}
            custom={activeIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextCategory();
              } else if (swipe > swipeConfidenceThreshold) {
                prevCategory();
              }
            }}
            className="absolute h-[70vh] w-full overflow-auto"
          >
            <motion.h3
              className="mb-6 text-center text-2xl font-bold text-green-400"
              whileHover={{ scale: 1.05, color: "#34D399" }}
            >
              {categories[activeIndex]}
            </motion.h3>
            <SkillList
              list={
                activeIndex === 0
                  ? skills.technicalSkills
                  : activeIndex === 1
                    ? skills.languageSkills
                    : skills.softSkills
              }
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute left-4 top-1/2 z-10 transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={prevCategory}
          className="rounded-full bg-green-500 p-3 text-white shadow-lg transition-colors hover:bg-green-600"
        >
          <ChevronLeft size={24} />
        </button>
      </motion.div>
      <motion.div
        className="absolute right-4 top-1/2 z-10 transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={nextCategory}
          className="rounded-full bg-green-500 p-3 text-white shadow-lg transition-colors hover:bg-green-600"
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>

      <div className="mt-6 flex justify-center space-x-2">
        {categories.map((_, index) => (
          <motion.div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === activeIndex ? "bg-green-400" : "bg-gray-600"
            }`}
            initial={false}
            animate={{ scale: index === activeIndex ? 1.5 : 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2, backgroundColor: "#34D399" }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
