import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.jpg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Kgaogelo",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Tshabala",
  },

  {
    id: 3,
    title: "Age : ",
    description: "30 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "South Africa",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Mindrand, Johannesburg",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "079 015 6978",
  },

  {
    id: 8,
    title: "Email : ",
    description: "Fortunatekgaogelo@gmail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Sepedi, isiZulu",
  },
];

export const stats = [
  {
    id: 1,
    no: "6+",
    title: "Months of <br /> Experience",
  },

  {
    id: 2,
    no: "4+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "0+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "3+",
    title: " Certifactes <br /> completed",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "March 2024 - Present",
    title: "Web Development Internship <span> Code Alpha </span>",
    desc: "Applications of HTML, CSS, JavaScript, React.js, Node.js, and Epress.js to execute tasks as assigned by team leader",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Sep 2023 - Feb 2024",
    title: "Junior Mechanical Engineering <span> HiNova </span>",
    desc: "Computer-aided design, manufacturing process management, client relations, and procurement management",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Sep 2021 - Sep 2023",
    title:
      "Editor of Science and Technology <span> Cactus Communications </span>",
    desc: "Editing of Scientific manuscripts for grammar and logic (Subject Areas: Electrical engineering and electronics, manufacturing, robotics, mechanical engineering, civil engineering, and structural",
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Dec 2014 - Feb 2015",
    title:
      "Mechanical Engineering Vacation Work <span> Murray & Roberts </span>",
    desc: "Project Planning and Coordination",
  },

  {
    id: 5,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb 2021 - Nov 2021",
    title: "Academic Tutor: Engineering drawing <span> Wits University </span>",
    desc: "Marked tutorials, provided feedback, and conducted online consultations for first year students (Autodesk and solid edge)",
  },

  {
    id: 6,
    category: "experience",
    icon: <FaBriefcase />,
    year: "June 2018 - Feb 2019",
    title:
      "Mechanical Engineering Vacation Work <span> Vergenoeg Mining Company </span>",
    desc: "Maintenance planning, computer-aided design, trackless bobile machinery servicing, process monitoring, ordering of parts, artisan assistant",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title:
      "BSc Mechanical Engineering (4th Year - Discontinued) <span> University of the Witwatersrand </span>",
    desc: "Application of mechanicanics, thermodynamics, engineering mathematics, fluid mechanicals, and mechatronics principles to solve complex, open-ended problems",
  },

  {
    id: 8,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title:
      "Complete Web Development Bootcamp Certificate of Completion <span> Udemy </span>",
    desc: "Online courses and projects using HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, APIs, Express.js, MongoDB, and SQL",
  },

  {
    id: 9,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title:
      "Deep Learning for Image Segmentation with Python and Pytorch <span> Udemy </span>",
    desc: "Application of Convolutional Neural Networks for Semantic Segmentation Applications using Python and Pytorch",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "70",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "React",
    percentage: "50",
  },

  {
    id: 5,
    title: "Node.js",
    percentage: "40",
  },

  {
    id: 6,
    title: "Express.js",
    percentage: "40",
  },

  {
    id: 7,
    title: "MongoDB",
    percentage: "20",
  },

  {
    id: 8,
    title: "SQL",
    percentage: "20",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Deep Learning",
    details: [
      {
        icon: <FiFileText />,
        title: "Semantic Segmentation",
      },
      {
        icon: <FiUser />,
        title: "Final year project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Python",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://drive.google.com/drive/folders/1RYRmS_Wn9dqgeEggWDoQqIJEOwm7-G4c?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: "Personal Portfolio",
    details: [
      {
        icon: <FiFileText />,
        title: "Personal Portfolio",
      },
      {
        icon: <FiUser />,
        title: "Personal Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Kgaogelo072/Personal-portfolio.git",
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: "JavaScript Age Calculator",
    details: [
      {
        icon: <FiFileText />,
        title: "Internship Task : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Company : ",
        desc: "Code Alpha",
      },
      {
        icon: <FaCode />,
        title: "Languages : ",
        desc: "HTML, CSS, and JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://elaborate-piroshki-b65952.netlify.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "To-do list",
    details: [
      {
        icon: <FiFileText />,
        title: "To-do list Task: ",
        desc: "Code Alpha Interneship",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://melodious-kringle-98091b.netlify.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Landing Page : ",
        desc: "Personal Project",
      },
      {
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        title: "Preview : ",
        desc: "https://lovely-crumble-b28a87.netlify.app/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
