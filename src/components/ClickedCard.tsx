import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

interface ClickedCardProps {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  cardItems: Item[];
}

const ClickedCard: React.FC<ClickedCardProps> = ({
  selectedId,
  setSelectedId,
  cardItems,
}) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedId(null)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            layoutId={selectedId}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="m-4 w-full max-w-md rounded-lg bg-gray-800 p-8 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const item = cardItems.find((item) => item.id === selectedId);
              return (
                <>
                  <motion.div className="mb-6 flex justify-center text-6xl">
                    {item?.icon && React.createElement(item.icon)}
                  </motion.div>
                  <motion.h2
                    id="modal-title"
                    className="text-center text-3xl font-bold"
                  >
                    {item?.title}
                  </motion.h2>
                  <motion.h5
                    id="modal-description"
                    className="mt-2 text-center text-xl text-gray-300"
                  >
                    {item?.subtitle}
                  </motion.h5>
                  <motion.p className="mt-6 text-gray-400"></motion.p>
                  <motion.button
                    className="mt-8 w-full rounded-lg bg-[#3c9484] px-6 py-3 text-lg text-white transition-colors hover:bg-[#46b19b]"
                    onClick={() => setSelectedId(null)}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px #3c9484",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ClickedCard;
