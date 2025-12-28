import textToSqlLLM from "@/assets/Docs/textToSqlLLM.md";
import AiQuizGenerator from "@/assets/Docs/AiQuizGenerator.md";
import BrazilianETLPipeline from "@/assets/Docs/BrazilianETLPipeline.md";
import resume from "@/assets/Docs/resume.pdf";
export const name = "Santhosh";
export const description = `Full-stack Machine Learning Engineer with expertise in building enterprise applications using React.js, Angular, FastAPI, and implementing CI/CD automation with Docker and GitHub Actions.`;
export const cvLink = resume;
export const about = (
  <p>
    Full-stack <b>Machine Learning Engineer</b> at <b>Tiger Analytics</b>,
    specialized in building
    <b> enterprise applications</b> with <b>React.js</b>, <b>Angular</b>, and{" "}
    <b>FastAPI</b>. Experienced in orchestrating{" "}
    <b>Databricks Spark pipelines</b> processing 1M+ records and implementing
    <b>CI/CD automation</b> with Docker and GitHub Actions. Passionate about
    designing scalable systems, implementing <b>RBAC modules</b>, and developing{" "}
    <b>multilingual solutions</b> for global audiences. Committed to delivering
    production-ready solutions that drive business impact.
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
      "Engineered 3+ enterprise full-stack applications using React.js and Angular, reducing load times by 35%. Designed RESTful APIs with FastAPI for scalable backend services. Orchestrated Databricks Spark pipelines processing 1M+ records, cutting ETL time by 30%. Configured Docker-based GitHub Actions for CI/CD automation, implemented RBAC modules, and developed multilingual support for 20+ languages.",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHzSRVoToQ7TQ/company-logo_200_200/company-logo_200_200/0/1680331371715?e=1734566400&v=beta&t=_MPacvipalax_yH01RoMUfViCKZep6zpHwk3fsXVUsw",
    company: "Strackit Private Limited",
    companyUrl: "https://business.strackit.com/home/",
    role: "Frontend Developer Intern",
    duration: "June 2023 - December 2023",
    type: "Intern",
    description:
      "Created 30+ reusable React components with Tailwind CSS enhancing UI consistency. Enhanced API efficiency using React Query and GraphQL resolvers, reducing latency by 25%. Collaborated with backend engineers refining schemas, eliminating redundant calls by 20%.",
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
  "TypeScript",
  "JavaScript",
  "SQL",
  "React.js",
  "Angular",
  "React Native",
  "Expo",
  "Node.js",
  "FastAPI",
  "Express.js",
  "RESTful API",
  "GraphQL",
  "MongoDB",
  "NoSQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Chakra UI",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "Git",
  "Linux",
  "Apache Airflow",
  "Databricks Spark",
  "ETL Pipeline",
  "Generative AI",
  "MCP Integration",
  "RBAC",
  "Design Patterns",
  "Multilingual Systems",
];

export const projects = [
  {
    name: "Brazilian E-commerce Data ETL Pipeline",
    technologies: ["Python", "Databricks Spark", "GitHub Actions", "CI/CD"],
    description:
      "Developed automated ETL pipeline for Brazilian e-commerce data using Databricks Spark with medallion architecture (Bronze, Silver, Gold layers). Implemented CI/CD workflow with GitHub Actions automating Databricks job deployment. Built Python wheel package with modular architecture for scalable data transformation. Configured secure secrets management using GitHub Secrets for Databricks authentication.",
    link: null,
    github: "https://github.com/Santhosh1933/brazilian-data-etl-pipeline",
    docs: BrazilianETLPipeline,
  },
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
      "Clerk",
    ],
    description:
      "Engineered AI-powered platform leveraging Gemini API producing quizzes with 95% topic relevance. Improved responsiveness with React Query caching minimizing fetch time. Integrated Clerk Authentication for secure session management supporting 50+ users. Crafted responsive UI boosting mobile engagement by 25%. Automated deployment using GitHub Actions for seamless rollouts. Implemented CSV export and interactive data visualizations.",
    link: "https://ai-powered-app.vercel.app",
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
    details: "santhosh-subbareddy",
    icon: "🔗",
    link: "https://www.linkedin.com/in/santhosh-subbareddy/",
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
