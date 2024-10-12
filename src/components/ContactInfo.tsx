import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Clock, Calendar } from "lucide-react";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <Mail size={24} />,
      text: "Khobiziziabdou@gmail.com",
      href: "mailto:Khobiziziabdou@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      text: "+213 06 55 37 12 22",
      href: "tel:+21365537122",
    },
    {
      icon: <MapPin size={24} />,
      text: "Bouira,Algeria",
      href: "https://www.google.com/maps/place/Bouira,+Algeria/",
    },
    {
      icon: <Linkedin size={24} />,
      text: "linkedin.com/in/abderrahimkhobizi",
      href: "https://www.linkedin.com/in/abderrahim-khobizi-211a6b280/",
    },
  ];

  const availabilityInfo = [
    { icon: <Clock size={24} />, text: "Wednesday - Saturday: 6PM - 2AM" },
    {
      icon: <Calendar size={24} />,
      text: "Available for small freelance projects",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
  };

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

  return (
    <motion.div
      className="mx-auto w-full max-w-4xl rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="mb-8 bg-gradient-to-r from-green-300 to-green-600 bg-clip-text text-center text-4xl font-bold text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        Let's Connect
      </motion.h2>

      <motion.ul className="mb-8 space-y-4">
        {contactItems.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-4 rounded-lg bg-gray-800 p-4 transition-all duration-300 hover:bg-gray-700"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 4px 6px rgba(0, 255, 128, 0.1)",
            }}
          >
            <motion.div
              className="text-green-400"
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              {item.icon}
            </motion.div>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-green-400"
            >
              {item.text}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="mt-8 rounded-lg bg-gray-800 p-4"
        variants={itemVariants}
      >
        <h3 className="mb-4 text-xl font-semibold text-green-400">
          Availability
        </h3>
        <ul className="space-y-2">
          {availabilityInfo.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-2 text-white"
            >
              <span className="text-green-400">{item.icon}</span>
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
