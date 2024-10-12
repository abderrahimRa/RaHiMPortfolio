  import React from "react";
  import { motion } from "framer-motion";

  interface Item {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
  }

  interface CardProps {
    item: Item;
    index: number;
    onClick: (id: string) => void;
  }

  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: 50,
      rotateX: 10,
      scale: 0.9,
      zIndex: 3 - i,
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: i * -20,
      rotateX: 0,
      scale: 1 - i * 0.05,
      zIndex: 3 - i,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.1,
      },
    }),
    hover: (i: number) => ({
      y: i * -30,
      scale: 1.05 - i * 0.05,
      zIndex: 4,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  const Card: React.FC<CardProps> = ({ item, index, onClick }) => {
    return (
      <motion.div
        layoutId={item.id}
        onClick={() => onClick(item.id)}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        custom={index}
        className="hidden transform-gpu cursor-pointer items-center justify-center rounded-lg bg-[#1e2a38] p-6 text-white md:flex md:flex-col"
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          boxShadow: "0 0 0 2px #3c9484, 0 4px 6px rgba(70, 177, 155, 0.1)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <motion.div
          className="mb-4 text-5xl text-[#46b19b]"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <item.icon />
        </motion.div>
        <motion.h2 className="mb-2 text-xl font-bold text-[#46b19b]">
          {item.title}
        </motion.h2>
        <motion.h5 className="text-sm text-gray-300">{item.subtitle}</motion.h5>
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#3c9484] to-[#46b19b] opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 0.1 }}
        />
      </motion.div>
    );
  };

  export default Card;
