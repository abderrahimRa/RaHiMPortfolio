import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};
const ProfileText = () => {
  return (
    <motion.div
      className="flex items-center justify-center text-center text-xl font-bold text-white lg:justify-self-start lg:text-2xl"
      variants={itemVariants}
    >
      <TypeAnimation
        style={{
          height: "170px",
          display: "inline-block",
          whiteSpace: "pre-line",
        }}
        sequence={[
          `Hi, I am Abderrahim Khobizi\n\nI'm a frontend developer\n\nI have other skills`,
          5000,
          "",
        ]}
        repeat={Infinity}
        speed={50}
        deletionSpeed={65}
      />
    </motion.div>
  );
};

export default ProfileText;
