import portfolio from "../assets/developer.jpg";
import medetuitePic from "../assets/projects/project-5.png";
import eDronaPic from "../assets/projects/edronaPic.webp";
import ePackenPic from "../assets/projects/ePackenPic.png";
import nestPic from "../assets/projects/Nest.webp";
import foodMaPic from "../assets/projects/foodmazone.webp";
import smartfolioPic from "../assets/projects/smarfolio.svg";

export const HERO_CONTENT = `I'm Akhila K S. Software Engineer, React Native Enthusiast, Hybrid Mobile App Developer (iOS & Android).

`;

export const ABOUT_TEXT = `Experienced React Native Developer with 4 years of hands-on expertise, including 1 year of experience in the UAE, in designing, developing, and deploying cross-platform mobile applications. Proven ability to collaborate effectively with teams to deliver high-quality software solutions. Possesses a strong background in JavaScript, TypeScript, React, Redux, and related technologies, consistently leveraging technical proficiency to drive successful project outcomes.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Developer",
    company: "Electropack General Trading",
    description: `Working on a cutting-edge real estate CRM app tailored for contractors, dealers, and realtors. Developed and uphold high-quality, reusable, and dependable React Native front-end code. Engage actively in agile development processes, encompassing sprint planning, stand-ups, and retrospectives. Lead the development and implementation of sophisticated front-end solutions, ensuring they meet rigorous functional and technical standards. Work closely with product managers, UI/UX designers, and stakeholders to ensure alignment on project goals, user requirements, and design specifications, while collaborating with backend developers to integrate front-end components effectively with server-side logic.`,
    technologies: [
      "React Native",
      "React.js",
      "TypeScript",
      "Redux",
      "Redux-Toolkit",
      "GraphQL",
      "React reanimation",
      "React native emotions",
      "Yup Validation",
      "React Hook Component",
      "Micro Services",
      "REST API",
      "Axios",
    ],
  },
  {
    year: "2022 - 2023",
    role: "React Native Developer",
    company: "Muble Solutions",
    description: `Work as a part of a small team that includes other react native developers, UI-UX designers, QA experts, and managers. Propose and implement technical solutions for complex problems, plan source code structure, conduct source code reviews, evaluate the performance of my peers, and mentor junior resources.`,
    technologies: [
      "React Native",
      "React.js",
      "Redux",
      "Redux Saga",
      "React native animation",
    ],
  },
  {
    year: "2021 - 2022",
    role: "Mobile Application Developer",
    company: "JC HRTECH PVT LTD",
    description: `Engaged in all phases of the software development lifecycle which include: gathering and analyzing user system requirements, responding to outages, and creating application system models. Participated in design meetings and consult with clients to refine test, and debug programs to meet business needs and interacted with and sometimes direct third-party partners in the achievement of business and technology initiatives. Collaborated with other designers, Managed complex projects. Deployed to PlayStore and AppStore.Performed beta test with TestFlight.Integrated push notification, cloud messaging, Firebase.`,
    technologies: [
      "React Native",
      "React.js",
      "Redux",
      "Redux Saga",
      "React native animation",
    ],
  },
  {
    year: "2020 - 2021",
    role: "Junior Software Developer",
    company: "Web and Crafts",
    description: `Participating in daily scrum meetings, sprint planning, unit testing, and bug fixes. Developing and maintaining a reporting system for support users, managers, and executives to keep track of support calls both on a moment-to-moment basis and over time using React Native. Assisting the Senior Developer with the design, development, deployment, and maintenance of all menu maintenance portal code using React Native and Javascript. Working closely with the QA and Product Management teams as well as other developers to ensure quality and punctual software development.`,
    technologies: [
      "React Native",
      "React.js",
      "Redux",
      "Redux Saga",
      "React native animation",
    ],
  },
  {
    year: "2019 Jul - 2019 Oct",
    role: "React native developer (Trainee)",
    company: "Lookings Soft Pvt Ltd",
    description: `During this time demonstrated good design skills with a self-motivated attitude to learn new things and completed the project successfully and on time. Expertise in JavaScript, layout, styling, components, navigation, API integration, and application deployment in android and iOS.`,

    technologies: [
      "React Native",
      "React.js",
      "Redux",
      "Redux Saga",
      "React native animation",
    ],
  },
];

export const PROJECTS = [
  {
    title: "ePacken CRM Application",
    image: ePackenPic,
    description:
      "When the client specifies their needs, they simply submit a short online form detailing the property and the services they require. Our AI will then shortlist experienced, prequalified, and vetted contractors tailored to the specific needs and project requirements. Clients can compare quotes and proposals from these qualified contractors and hire the one that best suits their project.",
    technologies: [
      "React Native",
      "TypeScript",
      "React frameworks",
      "Hooks",
      "HOC",
      "data drilling",
      "middle ware approaches",
      "Redux",
      "Redux Toolkit",
      "GraphQL",
      "Rest API",
      "Axios",
      "micro services",
      "async-storage",
      "react-native-vector-icons",
      "jest",
      "yup and react-hook-form validation",
      "react-i18next",
      "react-native-biometrics",
      "react-native-gifted-charts for Graphs",
      "react-native-reanimated",
      "react-native-reanimated-carousel",
      "react-native-render-html",
      "react-native-signature-canvas",
      "react-native-svg",
      "react-native-streetview",
      "react-native-webview",
    ],
    link: "https://www.crm-demo.epacken.com/",
  },

  {
    title: "Medituite",
    image: medetuitePic,
    description:
      "Medetuit is a medical learning platform offering high-quality, interactive medical learning videos adhering to the new medical curriculum. Medetuit is committed to provide the most comprehensive visual learning experience, freeing the medical students from the world of bulky books & interminable lectures. They envision revolutionizing the way medical learning is globally perceived, thereby breezing change into how future medical students approach the course as a whole.",
    technologies: [
      "React Native",
      "Redux",
      "JavaScript",
      "axios",
      "react-native-video-player",
      "@vimeo/player",
      "Rest API",
      "Zoom meet and G-meet SDK",
    ],
    link: "https://medetuit.com/",
  },

  {
    title: "e-Drona",
    image: eDronaPic,
    description:
      "This mobile applications developed for educational institutions provide comprehensive classroom management services, including live and recorded online class sessions. Implemented a video player for recorded classes, integrated Google Meet and Zoom SDKs for live classes, and integrated PayPal, Razorpay, and in-app purchases as payment gateways, enhancing the functionality and user experience of mobile applications.",
    technologies: [
      "React Native",
      "Redux",
      "JavaScript",
      "axios",
      "react-native-video-player",
      "@vimeo/player",
      "Rest API",
    ],
    link: "https://e-drona.in/",
  },
  {
    title: "Nest Matrimony",
    image: nestPic,
    description:
      "Nest Matrimony , a matrimonial service provider from Kerala, approached us to create a unique web application. We crafted a highly engaging web application which was developed using Laravel and MySQL to ensure security and a flawless backend as the application stores and handles personal data. Today, Nest has around 1.5 lakh customers and is one of the leading matrimonial service providers in Kerala.",
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "react-native-phone-call",
      "react-native-reanimated",
    ],
    link: "https://apps.apple.com/in/app/nest-matrimony/id1486299424",
  },
  {
    title: "Foodmazone",
    image: foodMaPic,
    description:
      "Foodmazone make grocery ordering experience an effortless venture with our custom-made suite of grocery delivery mobile app. The app has simple and fast checkout, powered by a fully-secured gateway to ensure high-security payments. We made the app dynamic with the settings management system to enable our customers to make the necessary changes in the app in lesser time.",
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "react-native-map",
      "react-native-maps-directions",
    ],
    link: "https://play.google.com/store/apps/details?id=com.shop.foodmazone&hl=en",
  },
  {
    title: "Smarfolio By Geojit",
    image: smartfolioPic,
    description:
      "This app will guide you to Smartfolios, a hassle-free, data-driven platform where equity investments meet intelligence. Smartfolios offers expertly curated baskets of stocks, enabling you to invest based on your unique investment appetite and outlook, ultimately helping you achieve your financial goals.",
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "react native animation",
      "react native svg images",
      "",
    ],
    link: "https://smartfolios.geojit.com/#/login",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind CSS", "React", "Framer Motion", "VITE"],
  },
];

export const CONTACT = {
  address: "Al Barsha 1, Dubai, United Arab Emirates",
  phoneNo: "+971 562 453 920",
  email: "kskahilaofcl@gmail.com",
};

export const CONTACT_LINKS = {
  linkedIn: "https://www.linkedin.com/in/akhila-k-s-169808204/",
  gitHub: "https://github.com/Akhila-K-S",
  email: "ksakhilaofcl@gmail.com",
};
