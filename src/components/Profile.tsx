import { motion } from "framer-motion";

interface ProfileProps {
  children: React.ReactNode;
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({ children }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  return (
    <div>
      <motion.div
        className="flex h-[calc(100vh-68px)] w-full bg-gray-900 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex w-full flex-col overflow-hidden rounded-3xl border-4 border-[#3c9484] bg-gray-800 shadow-[0_0_2px_#3c9484,0_0_30px_#46b19b]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
