import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NumListIcon } from "./HeroEx";
import { useListed } from "../assets/Listed";
import SkillsEx from "./SkillsEx";

interface NumListProps {
  selectedItem: NumListIcon;
  setSelectedItem: (item: NumListIcon) => void;
  className?: string;
}

const NumList: React.FC<NumListProps> = ({
  selectedItem,
  setSelectedItem,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const listedItems = useListed();

  return (
    <div className="flex flex-col items-start p-4 md:flex-row md:space-x-8 md:space-y-0 md:p-8 lg:h-full lg:w-full">
      <div
        className={`${className} relative flex h-[10vh] w-full flex-row items-center justify-evenly px-2 md:h-full md:w-fit md:flex-col md:justify-start`}
      >
        {listedItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <motion.div
              className="group relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedItem(item)}
            >
              <motion.div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-800 transition-all duration-300 ease-in-out md:h-14 md:w-14"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow:
                    hoveredIndex === index || selectedItem.id === item.id
                      ? "0 0 20px rgba(70, 177, 155, 0.4), inset 0 0 10px rgba(70, 177, 155, 0.4)"
                      : "0 0 5px rgba(60, 148, 132, 0.2)",
                  backgroundColor:
                    hoveredIndex === index || selectedItem.id === item.id
                      ? "#1e2a38"
                      : "#1a202c",
                }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="text-xl text-[#46b19b] transition-colors duration-300 group-hover:text-[#5cead6] md:text-3xl" />
              </motion.div>
            </motion.div>

            {index < listedItems.length - 1 && (
              <motion.div
                className="h-0.5 w-[15vw] bg-[#46b19b] md:h-8 md:w-0.5"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  boxShadow: "0 0 8px rgba(70, 177, 155, 0.4)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex w-full max-h-[70vh] md:max-h-none flex-col">
        <AnimatePresence mode="wait">
          {selectedItem && (
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col overflow-y-auto max-h-[20vh] rounded-lg bg-gray-800 p-4 text-white shadow-lg sm:w-full md:h-fit"
              style={{
                boxShadow:
                  "0 0 20px rgba(70, 177, 155, 0.4), inset 0 0 10px rgba(70, 177, 155, 0.4)",
                border: "2px solid rgba(70, 177, 155, 0.3)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-2 flex items-center space-x-4">
                  <selectedItem.themeIcon className="text-2xl text-[#5cead6]" />
                  <h2 className="text-xl font-semibold  text-[#46b19b] md:text-3xl">
                    {selectedItem.insideHeader}
                  </h2>
                </div>

                <p className="text-base font-semibold hidden sm:flex text-gray-300 md:text-lg">
                  {selectedItem.insideText}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <SkillsEx
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  );
};

export default NumList;
