import type { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type LinkItem = {
  title: string;
  icon: ReactNode;
  href?: string;
};

export const Contactlinks: LinkItem[] = [
  { title: "Email", icon: <MdEmail />, href: "mailto:ritick943lath@gmail.com" },
  {
    title: "Github",
    icon: <FaGithub />,
    href: "https://github.com/RitickLath",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/ritick-lath-xyz",
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
    href: "https://x.com/RitickCodes",
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/+916209847887",
  },
];
