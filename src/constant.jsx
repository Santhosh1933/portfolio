import textToSqlLLM from "@/assets/Docs/textToSqlLLM.md";
import AiQuizGenerator from "@/assets/Docs/AiQuizGenerator.md";
import resume from "@/assets/Docs/resume.pdf"
export const name = "Santhosh";
export const description = `Machine Learning Engineer skilled in Python, React, Git, and Docker. Open to mentoring and collaboration.`;
export const cvLink = resume;
export const about = (
  <p>
    Analyst at <b>Tiger Analytics</b>, skilled in building <b>full-stack applications</b> with a strong 
    foundation in <b>React.js</b> and modern development practices. I specialize in creating and deploying 
    custom <b>LLM Agents</b>, seamlessly integrating them into scalable systems. Experienced in 
    <b> Docker</b> and <b>GitHub Actions</b> for CI/CD automation, I focus on delivering efficient, 
    production-ready solutions. Passionate about exploring emerging technologies and crafting innovative 
    digital experiences end to end.
  </p>
);



export const workExperience = [
  {
    logo: "https://media.licdn.com/dms/image/C4E0BAQEvQs0OiRRELA/company-logo_200_200/0/1519907437947?e=1734566400&v=beta&t=dGcIV28hI8yHUC-JWZIkB7GVF23qgkT3bEBG0DojH2c",
    company: "Tiger Analytics",
    companyUrl: "https://www.tigeranalytics.com/",
    role: "Analyst Machine Learning Engineer",
    duration: "October 2024 - Present",
    type: "Full-time",
    description:
      "Expanding expertise in machine learning and data-driven solutions by developing scalable models and collaborating on impactful projects to drive business insights.",
  },
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
  "MCP",
  "Langgraph",
  "Streamlit",
  "FastAPI",
  "Docker",
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
