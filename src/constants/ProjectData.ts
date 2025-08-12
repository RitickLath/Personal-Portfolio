export const projectsData = [
  {
    title: "Imaginary",
    type: "Personal Project",
    overview:
      "Imaginary is an advanced image editing application offering AI-powered image transformation features like enhancement, sharpening, background removal, and AI-based restoration. Built with Next.js and secured by Clerk authentication, it provides 15 free edits with a credit-based system for more.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Prisma ORM",
      "Cloudinary",
      "Clerk",
      "Recoil",
      "Tailwind CSS",
      "Server Action",
    ],
    metrics: [
      "Deployed on Vercel for scalability",
      "Secure user authentication with Clerk",
      "Credit-based system for monetization",
    ],
    links: {
      live: "https://imaginary1.netlify.app/",
      github: "https://github.com/RitickLath/Imaginary",
    },
  },
  {
    title: "DSA Problem-Solving Platform",
    type: "Personal Project",
    overview:
      "A full-stack competitive programming platform for solving Data Structures & Algorithms problems with features like AI-powered doubt assistance, Judge0-based code execution, interactive discussions, and submission tracking. Optimized backend with Node.js Cluster for multi-core utilization, deployed on AWS with Nginx reverse proxy and PM2 process management.",
    techStack: [
      "Node.js",
      "Express",
      "Cluster",
      "Judge0",
      "JWT",
      "Google Gemini API",
      "AWS EC2",
      "Nginx",
      "PM2",
      "React 19",
      "TailwindCSS 4",
      "React Query",
      "TypeScript",
    ],
    metrics: [
      "Developed 'Lets Code', a LeetCode-like full-stack platform for practicing Data Structures & Algorithms, featuring problem-solving, code execution, AI-powered doubt assistance, interactive discussions, and a user dashboard for progress tracking",
      "Architected a high-performance backend using Node.js Cluster to fully utilize all CPU cores, enabling parallel request processing and reducing average API response times by up to 40% under load",
      "Delivered AI-powered doubt resolution using Google Gemini 2.5 Flash, providing context-aware coding guidance and reducing support turnaround time",
      "Implemented secure role-based authentication & authorization with JWT and middleware (`userAuth`, `adminAuth`) to protect sensitive API routes",
      "Integrated Judge0 API for safe, language-agnostic code execution and automated problem evaluation within a sandboxed environment",
      "Deployed backend on AWS EC2, configured Nginx as a reverse proxy for load balancing, and used PM2 for process management and zero-downtime restarts",
      "Built responsive and interactive frontend with React 19, Vite, TailwindCSS 4, Radix UI, and Monaco Editor for an IDE-like coding experience",
      "Developed a dynamic dashboard with problem statistics, submission history, and personalized recommendations, powered by React Query for optimized state management",
      "Enabled collaborative learning through discussion forums with commenting, likes, and save/unsave functionality for each problem",
    ],

    links: {
      live: "",
      github: "https://github.com/RitickLath/lets-code",
    },
  },
  {
    title: "Edubridge",
    type: "Personal Project",
    overview:
      "EduBridge is a MERN stack-based online learning platform with secure JWT & OTP authentication. Instructors can manage courses, while students browse detailed course information. Features include input validation with Zod and a contact form for inquiries.",
    techStack: [
      "React",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "Zod",
      "Tailwind CSS",
      "Vercel",
      "Render",
      "Cloudinary",
    ],
    metrics: [
      "JWT & OTP authentication for secure access",
      "Dynamic course management system",
      "Deployed on Vercel & Render",
    ],
    links: {
      live: "https://netflixgpt-3dea2.firebaseapp.com/",
      github: "https://edtech-portal.vercel.app/",
    },
  },
  {
    title: "Advance Netflix GPT",
    type: "Personal Project",
    overview:
      "Netflix GPT replicates the Netflix experience with TMDB API integration, Firebase Authentication, and OpenAI GPT-based movie recommendations. Built with React and Tailwind CSS, it offers a high-performance UI with a Lighthouse score of 95+.",
    techStack: [
      "React",
      "TMDB API",
      "Firebase",
      "OpenAI GPT",
      "React Router",
      "Tailwind CSS",
      "JavaScript",
      "Responsiveness",
    ],
    metrics: [
      "OpenAI GPT-powered recommendations",
      "95+ Lighthouse performance score",
      "Firebase Authentication for user access",
    ],
    links: {
      live: "https://netflixgpt-3dea2.firebaseapp.com/",
      github: "https://github.com/RitickLath/Netflix_GPT",
    },
  },
  {
    title: "Airbnb Clone",
    type: "Personal Project",
    overview:
      "A full-stack Airbnb clone featuring user authentication, property listings, booking management, reviews, and advanced search/filtering. Built with Next.js, Prisma, and Tailwind CSS.",
    techStack: [
      "Next.js",
      "Prisma",
      "Tailwind CSS",
      "NextAuth.js",
      "PostgreSQL",
    ],
    metrics: [
      "Full booking and review management system",
      "NextAuth.js for secure authentication",
      "Deployed on Vercel",
    ],
    links: {
      live: "https://aairbnb-seven.vercel.app/",
      github: "https://github.com/RitickLath/aairbnb",
    },
  },
  {
    title: "Giphy Clone",
    type: "Personal Project",
    overview:
      "A responsive web app that allows users to browse, search, and favorite GIFs, Stickers, and Clips from the Giphy API. Features include optimized debounced search and a favorites section.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Giphy API",
      "Debouncing",
      "Responsiveness",
    ],
    metrics: [
      "Debounced search for optimized performance",
      "Favorites section for saved GIFs",
      "Responsive design deployed on Netlify",
    ],
    links: {
      live: "https://giphy1.netlify.app/Science",
      github: "https://github.com/RitickLath/Gipgy-Clone",
    },
  },
];
