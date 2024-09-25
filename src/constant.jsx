import textToSqlLLM from "@/assets/Docs/textToSqlLLM.md";
import AiQuizGenerator from "@/assets/Docs/AiQuizGenerator.md";

export const name = "Santhosh";
export const description = `MERN Stack Developer , Proficient in React, Java, Python, and Git , Open to Connect for Mentoring and Guidance in Learning New Technologies`;
export const cvLink =
  "https://media.licdn.com/dms/document/media/D562DAQElGN3msWJtsQ/profile-treasury-document-pdf-analyzed/0/1718879914528?e=1727308800&v=beta&t=En53ZhHZ3YqJ-00kmPvu31Uu6Qrpr6VovTKpKelwO0A";
export const about = (
  <p>
    I am Santhosh S, a software developer from Kallakurichi, Tamilnadu, and a{" "}
    <b>2024 graduate</b> in <b>Computer Science and Engineering</b> from{" "}
    <b>K.S. Rangasamy College of Technology</b>. I have a strong foundation in{" "}
    <b>Python</b>, <b>Java</b>, <b>React.js</b>, <b>Node.js</b>, and{" "}
    <b>MongoDB</b>, with a passion for building responsive and high-performance
    applications. My expertise extends to modern web technologies, database
    management, and developer tools like <b>Git</b> and <b>GitHub</b>. Along
    with my technical skills, I hold an <b>NCC C certificate</b> with an "A"
    grade, reflecting my leadership, discipline, and ability to manage
    challenges effectively. I am dedicated to writing clean, efficient code and
    creating seamless user experiences.
  </p>
);

export const workExperience = [
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHzSRVoToQ7TQ/company-logo_200_200/company-logo_200_200/0/1680331371715?e=1734566400&v=beta&t=_MPacvipalax_yH01RoMUfViCKZep6zpHwk3fsXVUsw",
    company: "Strackit Private Limited",
    companyUrl: "https://business.strackit.com/home/",
    role: "Frontend Developer Intern",
    duration: "June 2023 - December 2023",
    type: "Intern",
    description:
      "Developed and launched an e-commerce website, 'The Divine Cakery', utilizing React.js and Tailwind CSS. Implemented GraphQL API for efficient data handling, enhancing overall website performance and user experience.",
  },
];

export const education = [
  {
    institution: "K S Rangasamy College of Technology",
    institutionUrl: "https://www.ksrct.ac.in/",
    degree: "B.E Computer Science and Engineering",
    duration: "2020 - 2024",
    location: "Trichengode, Tamilnadu",
    percentage: "8.58 CGPA",
  },

  {
    institution: "AKTAcademy Matriculation Higher Secondary School",
    institutionUrl: "https://www.aktinstitutions.com/",
    degree: "HSC",
    duration: "2018 - 2020",
    location: "Kallakurichi, Tamilnadu",
    percentage: "63%",
  },
];
export const skills = [
  "Python",
  "Java",
  "React.js",
  "Node.js",
  "Express.js",
  "TailwindCss",
  "JavaScript",
  "SQL",
  "MongoDB",
  "GitHub",
  "Linux",
];

export const projects = [
  {
    name: "Text-to-SQL LLM",
    technologies: [
      "Streamlit",
      "Google's Gemini AI",
      "SQLite",
      "Python",
      "dotenv",
    ],
    description:
      "Developed a Streamlit app that converts natural language queries into SQL using Google's Gemini AI and retrieves relevant data from an SQLite database. The app allows users to input a natural language question and generates an SQL query on the fly for data retrieval.",
    link: null,
    github: "https://github.com/Santhosh1933/text-sql-llm",
    docs: textToSqlLLM,
  },
  {
    name: "AI Quiz Generator",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "React Query (Tanstack Query)",
      "Vercel",
      "Render",
    ],
    description:
      "Created quizzes with AI-generated questions and customized parameters. Implemented secure authentication with Clerk and allowed users to download quiz data in CSV format. Deployed for performance and scalability.",
    link: "https://ai-powered-app-react.vercel.app/",
    github: "https://github.com/Santhosh1933/ai-powered-app-frontend",
    docs: AiQuizGenerator,
  },
];

export const gitUserName = "Santhosh1933";
export const leetCodeUserName = "santhoshcse";

export const getInTouch = [
  {
    method: "Email",
    details: "santhoshs19032003@gmail.com",
    icon: "📧",
    link: "mailto:santhoshs19032003@gmail.com",
  },
  {
    method: "Phone",
    details: "+91 9361438237",
    icon: "📞",
    link: "tel:+919361438237",
  },
  {
    method: "LinkedIn",
    details: "santhoshcse",
    icon: "🔗",
    link: "https://www.linkedin.com/in/santhoshcse/",
  },
  {
    method: "LeetCode",
    details: "santhoshcse",
    icon: "🤯",
    link: "https://leetcode.com/u/santhoshcse/",
  },
  {
    method: "GitHub",
    details: "Santhosh1933",
    icon: "🐱",
    link: "https://github.com/Santhosh1933",
  },
];
