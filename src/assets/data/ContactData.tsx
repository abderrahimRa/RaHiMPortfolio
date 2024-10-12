import { Linkedin } from "lucide-react";
import { SiTelegram, SiFacebook } from "react-icons/si";
import ContactNav from "../../components/ContactNav";

export const socialLinks = [
  {
    icon: SiTelegram,
    href: "https://t.me/RaHiMkh23",
    label: "Telegram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abderrahim-khobizi-211a6b280",
    label: "LinkedIn",
  },
  {
    icon: SiFacebook,
    href: "https://web.facebook.com/abdrrahime.kh",
    label: "Facebook",
  },
];

// In your JSX
<ContactNav socialLinks={socialLinks} />;
