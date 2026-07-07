import { FaYoutube, FaFacebook, FaAws } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiBootstrap, SiTailwindcss,
  SiReact, SiNextdotjs, SiFramer, SiNodedotjs, SiExpress, SiMysql, SiMongodb,
  SiPhp, SiLaravel, SiDocker, SiCodeigniter, SiGo,
  SiGooglecloud, SiDigitalocean
} from "react-icons/si";

export const SKILL_DATA = [
  { skill_name: "HTML", Icon: SiHtml5, color: "text-orange-500" },
  { skill_name: "CSS", Icon: SiCss, color: "text-blue-500" },
  { skill_name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
  { skill_name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
  { skill_name: "Bootstrap", Icon: SiBootstrap, color: "text-purple-600" },
  { skill_name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-400" },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "React", Icon: SiReact, color: "text-cyan-400" },
  { skill_name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
  { skill_name: "Framer Motion", Icon: SiFramer, color: "text-purple-500" },
  { skill_name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "PHP", Icon: SiPhp, color: "text-purple-400" },
  { skill_name: "Express.js", Icon: SiExpress, color: "text-gray-300" },
  { skill_name: "MySQL", Icon: SiMysql, color: "text-blue-400" },
  { skill_name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Laravel", Icon: SiLaravel, color: "text-red-500" },
  { skill_name: "Docker", Icon: SiDocker, color: "text-blue-500" },
  { skill_name: "AWS", Icon: FaAws, color: "text-orange-400" },
  { skill_name: "Google Cloud", Icon: SiGooglecloud, color: "text-blue-400" },
] as const;

export const OTHER_SKILL = [
  { skill_name: "CodeIgniter", Icon: SiCodeigniter, color: "text-orange-500" },
  { skill_name: "Go", Icon: SiGo, color: "text-cyan-600" },
  { skill_name: "Digital Ocean", Icon: SiDigitalocean, color: "text-blue-500" },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/itz.shivu.1.0/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shivanshu-batham-787278188/",
  },
] as const;

export const PROJECTS = [
  {
    title: "Deific Digital",
    description: "Building Digital Excellence in Mobile Apps with an attractive landing page and smooth animations.",
    image: "/projects/p2.png",
    link: "https://deificdigital.com/",
  },
  {
    title: "Anandeshwar Industries",
    description: "A professional corporate website for Anandeshwar Industries' Legacy in the manufacturing industry.",
    image: "/projects/p5.png",
    link: "https://www.anandeshwarindustries.com/",
  },
  {
    title: "The Lagan Films",
    description: "A premium photography and videography portfolio for The Royal Wedding Film Company.",
    image: "/projects/p1.png",
    link: "https://laganstudio.in/",
  },
  {
    title: "ASS India",
    description: "A comprehensive NGO portal for Amar Prabha Samajik Sansthan with animal helpline integration.",
    image: "/projects/p3.png",
    link: "https://assindia.org.in/",
  },
  {
    title: "A4 Celebration",
    description: "An elegant event management and destination wedding booking platform.",
    image: "/projects/p4.png",
    link: "https://a4celebration.com/",
  },
  {
    title: "MMRPL",
    description: "A robust corporate website and digital presence for MMRPL.",
    image: "/projects/p7.png",
    link: "https://mmrpl.in/",
  },
  {
    title: "TCK Produce",
    description: "A modern e-commerce and catalog platform for TCK Produce.",
    image: "/projects/p6.png",
    link: "https://tckproduce.com/",
  },
  {
    title: "Coffee Pass Portal",
    description: "An intuitive customer portal and dashboard for Coffee Pass.",
    image: "/projects/p9.png",
    link: "https://portal.coffeepass.in/",
  },
  {
    title: "Premium Web Application",
    description: "A modern, responsive, and fully customized web application. Contact us to learn more.",
    image: "/projects/p8.png",
    link: "#contact",
  },
  {
    title: "Custom Development Project",
    description: "An advanced technical solution built specifically for client needs. Reach out for details.",
    image: "/projects/p10.png",
    link: "#contact",
  },
  {
    title: "Exclusive Digital Product",
    description: "A secure and scalable digital platform with custom features. Get in touch for a demo.",
    image: "/projects/p11.png",
    link: "#contact",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/itz.shivu.1.0/",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shivanshu-batham-787278188/",
      },
    ],
  },
  {
    title: "Contact Us",
    data: [
      {
        name: "Send an Email",
        icon: null,
        link: "#contact",
      },
      {
        name: "WhatsApp Me",
        icon: null,
        link: "https://wa.me/6392153811",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

export const SERVICES_DATA = [
  {
    title: "Full Stack Development",
    iconName: "laravel",
    offerings: ["Custom Laravel Web Applications", "Admin Panels", "CRM & ERP Systems", "REST APIs", "SaaS Applications", "Dashboard Development", "Multi-tenant Applications"],
  },
  {
    title: "Website Development",
    iconName: "web",
    offerings: ["Business Websites", "Portfolio Websites", "School Websites", "NGO Websites", "Healthcare Websites", "Real Estate Websites", "Travel Websites", "News Portals"],
  },
  {
    title: "E-commerce Development",
    iconName: "ecommerce",
    offerings: ["Online Store", "Shopping Cart", "Payment Gateway Integration", "Order Management", "Inventory Management", "Coupon System"],
  },
  {
    title: "Journal & Research Website",
    iconName: "journal",
    offerings: ["Journal Website Setup", "OJS Installation", "OJS Customization", "Theme Development", "Plugin Development", "Migration to OJS", "DOI & Crossref Integration", "Institutional Subscription System"],
  },
  {
    title: "API Development",
    iconName: "api",
    offerings: ["Mobile Apps", "React", "Flutter", "Vue", "Third-party Integrations", "Authentication API", "Payment API", "Notification API", "Booking API"],
  },
  {
    title: "Bug Fixing",
    iconName: "bug",
    offerings: ["Laravel Errors", "PHP Bugs", "Database Issues", "Slow Websites", "403/500 Errors", "Deployment Problems"],
  },
  {
    title: "Website Optimization",
    iconName: "optimization",
    offerings: ["Database Optimization", "Laravel Performance Optimization", "Query Optimization", "Redis Caching", "Image Optimization", "Page Speed Improvements"],
  },
  {
    title: "Server Deployment",
    iconName: "server",
    offerings: ["VPS", "Shared Hosting", "cPanel", "Docker", "Nginx", "Apache", "SSL", "Domain Setup", "Email Configuration", "Backups", "Security Hardening"],
  },
  {
    title: "Existing Website Maintenance",
    iconName: "maintenance",
    offerings: ["Updates", "Backups", "Bug Fixes", "Security Checks", "Uptime Monitoring", "Database Cleanup"],
  },
  {
    title: "Payment Gateway Integration",
    iconName: "payment",
    offerings: ["Razorpay", "Stripe", "PayPal", "PayU"],
  },
  {
    title: "Authentication Systems",
    iconName: "auth",
    offerings: ["Google Login", "OTP Login", "Email Verification", "JWT", "Role-based Permissions"],
  },
  {
    title: "Admin Dashboard Development",
    iconName: "dashboard",
    offerings: ["Charts", "Reports", "Analytics", "Export to Excel/PDF", "User Management"],
  },
  {
    title: "Migration Projects",
    iconName: "migration",
    offerings: ["Core PHP to Laravel", "Legacy Website to Laravel", "Old Database Migration", "API Migration"],
  },
  {
    title: "Booking Systems",
    iconName: "booking",
    offerings: ["Appointment Booking", "Hotel Booking", "Vehicle Rental", "Event Booking", "Doctor Appointments"],
  },
  {
    title: "Learning Management System",
    iconName: "lms",
    offerings: ["Student Login", "Courses", "Videos", "Quizzes", "Certificates", "Payments"],
  },
  {
    title: "CRM Development",
    iconName: "crm",
    offerings: ["Leads", "Customers", "Invoices", "Sales Pipeline", "Reports"],
  },
  {
    title: "Custom CMS",
    iconName: "cms",
    offerings: ["Blogs", "News", "Products", "Media", "Dynamic Pages"],
  },
  {
    title: "SEO-Friendly Development",
    iconName: "seo",
    offerings: ["Technical SEO", "Meta Tags", "Sitemap", "Schema Markup", "Clean URLs", "Performance Improvements"],
  },
  {
    title: "AI Integration",
    iconName: "ai",
    offerings: ["Chatbots", "Content Generation", "Code Assistance", "Document Summarization"],
  },
  {
    title: "Ongoing Support",
    iconName: "support",
    offerings: ["Feature Enhancements", "Bug Fixes", "Monthly Maintenance", "Server Monitoring", "Emergency Support"],
  },
];
