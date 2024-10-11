import { motion } from "framer-motion";
import { ListItems } from "../App";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";
import ContactInfo from "../components/ContactInfo"; // Make sure to create this file

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar menuItems={ListItems} />
      <Profile className="flex min-h-screen items-center justify-center bg-gray-900">
        <ContactInfo />
      </Profile>
    </motion.div>
  );
};

export default Contact;
