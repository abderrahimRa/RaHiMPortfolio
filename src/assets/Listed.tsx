import React, { useMemo } from "react";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
} from "react-icons/ri";
import {
  FaBriefcase,
  FaLaptopCode,
  FaChess,
  FaGraduationCap,
  FaReact,
  FaProjectDiagram,
  FaLanguage,
} from "react-icons/fa";

export type NumListIcon = {
  id: string;
  icon: React.ElementType;
  themeIcon: React.ElementType;
  insideHeader: string;
  insideText: string;
  skills: { name: string; proficiency: number }[];
};

export const useListed = (): NumListIcon[] => {
  const IconList: React.ElementType[] = useMemo(
    () => [
      RiNumber1,
      RiNumber2,
      RiNumber3,
      RiNumber4,
      RiNumber5,
      RiNumber6,
      RiNumber7,
    ],
    [],
  );
  const ThemeIcons: React.ElementType[] = useMemo(
    () => [
      FaBriefcase,
      FaLaptopCode,
      FaChess,
      FaGraduationCap,
      FaReact,
      FaProjectDiagram,
      FaLanguage,
    ],
    [],
  );

  const Listed: NumListIcon[] = useMemo(
    () => [
      {
        id: "1",
        icon: IconList[0],
        themeIcon: ThemeIcons[0],
        insideHeader: "Freelance Full-Stack Developer",
        insideText:
          "With hands-on experience in full-stack development, I specialize in creating dynamic, responsive web applications. My proficiency spans from front-end frameworks like React and Tailwind CSS to backend technologies like Node.js and MySQL.",
        skills: [
          { name: "React", proficiency: 90 },
          { name: "Tailwind CSS", proficiency: 85 },
          { name: "Node.js", proficiency: 80 },
          { name: "Express", proficiency: 75 },
          { name: "MySQL", proficiency: 70 },
          { name: "Responsive Design", proficiency: 90 },
        ],
      },
      {
        id: "2",
        icon: IconList[1],
        themeIcon: ThemeIcons[1],
        insideHeader: "Master's Student in System Engineering",
        insideText:
          "As a Master's student in Industrial Engineering at the University of Tlemcen, my academic focus is on system engineering, optimization algorithms, and strategic thinking. These skills translate directly into solving complex engineering problems.",
        skills: [
          { name: "Python", proficiency: 85 },
          { name: "Optimization Algorithms", proficiency: 80 },
          { name: "System Engineering", proficiency: 75 },
          { name: "Strategic Thinking", proficiency: 85 },
          { name: "Problem Solving", proficiency: 90 },
        ],
      },
      {
        id: "3",
        icon: IconList[2],
        themeIcon: ThemeIcons[2],
        insideHeader: "Chess Enthusiast",
        insideText:
          "With a Chess Calm Elo rating of 2150, I have honed my skills through tactical, over-the-board games. The strategic thinking I employ in chess directly informs my approach to coding and problem-solving in software development.",
        skills: [
          { name: "Chess Strategy", proficiency: 90 },
          { name: "Problem Solving", proficiency: 90 },
          { name: "Focus & Patience", proficiency: 85 },
          { name: "Creative Thinking", proficiency: 80 },
          { name: "Time Management", proficiency: 85 },
        ],
      },
      {
        id: "4",
        icon: IconList[3],
        themeIcon: ThemeIcons[3],
        insideHeader: "Healthcare IoT Innovator",
        insideText:
          "Led a project to build a patient monitoring system using ESP32 IoT devices, providing real-time biodata like heart rate and oxygen levels. This system was built with a strong focus on user experience and real-time data integration.",
        skills: [
          { name: "IoT Integration", proficiency: 85 },
          { name: "ESP32", proficiency: 80 },
          { name: "Real-time Data Analysis", proficiency: 80 },
          { name: "User Experience (UX)", proficiency: 85 },
          { name: "Collaboration", proficiency: 90 },
        ],
      },
      {
        id: "5",
        icon: IconList[4],
        themeIcon: ThemeIcons[4],
        insideHeader: "Frontend Developer",
        insideText:
          "I have a deep passion for front-end development, creating highly interactive and visually appealing websites. My expertise includes using modern libraries such as React and Framer Motion to build dynamic user experiences.",
        skills: [
          { name: "React", proficiency: 90 },
          { name: "Framer Motion", proficiency: 80 },
          { name: "Responsive Design", proficiency: 90 },
          { name: "CSS", proficiency: 85 },
          { name: "JavaScript", proficiency: 85 },
        ],
      },
      {
        id: "6",
        icon: IconList[5],
        themeIcon: ThemeIcons[5],
        insideHeader: "Project Lead & Collaboration",
        insideText:
          "Led and contributed to various collaborative projects, including my portfolio and open-source projects on GitHub. I am experienced in project management, ensuring that deliverables meet high-quality standards on time.",
        skills: [
          { name: "Project Management", proficiency: 85 },
          { name: "Team Collaboration", proficiency: 90 },
          { name: "Git & Version Control", proficiency: 85 },
          { name: "Open Source Contribution", proficiency: 80 },
          { name: "Documentation", proficiency: 85 },
        ],
      },
      {
        id: "7",
        icon: IconList[6],
        themeIcon: ThemeIcons[6],
        insideHeader: "Multilingual Communicator",
        insideText:
          "Fluent in multiple languages, including Arabic (native), English (B2 level), French (intermediate), and German (beginner). My language skills enhance my ability to communicate effectively in diverse professional settings.",
        skills: [
          { name: "Arabic", proficiency: 100 },
          { name: "English", proficiency: 85 },
          { name: "French", proficiency: 75 },
          { name: "German", proficiency: 50 },
          { name: "Cross-Cultural Communication", proficiency: 85 },
        ],
      },
    ],
    [IconList, ThemeIcons],
  );

  return Listed;
};
