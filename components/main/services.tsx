"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SERVICES_DATA } from "@/constants";
import { 
  SparklesIcon, CodeBracketSquareIcon, GlobeAltIcon, ShoppingCartIcon, 
  BookOpenIcon, ArrowsRightLeftIcon, BugAntIcon, RocketLaunchIcon, 
  ServerIcon, WrenchScrewdriverIcon, CreditCardIcon, ShieldCheckIcon, 
  ChartBarIcon, ArrowPathIcon, CalendarDaysIcon, AcademicCapIcon, 
  UsersIcon, DocumentTextIcon, MagnifyingGlassIcon, CpuChipIcon, 
  LifebuoyIcon
} from "@heroicons/react/24/outline";

const iconMap: Record<string, React.ReactNode> = {
  laravel: <CodeBracketSquareIcon className="w-10 h-10 text-purple-500" />,
  web: <GlobeAltIcon className="w-10 h-10 text-cyan-500" />,
  ecommerce: <ShoppingCartIcon className="w-10 h-10 text-purple-500" />,
  journal: <BookOpenIcon className="w-10 h-10 text-cyan-500" />,
  api: <ArrowsRightLeftIcon className="w-10 h-10 text-purple-500" />,
  bug: <BugAntIcon className="w-10 h-10 text-cyan-500" />,
  optimization: <RocketLaunchIcon className="w-10 h-10 text-purple-500" />,
  server: <ServerIcon className="w-10 h-10 text-cyan-500" />,
  maintenance: <WrenchScrewdriverIcon className="w-10 h-10 text-purple-500" />,
  payment: <CreditCardIcon className="w-10 h-10 text-cyan-500" />,
  auth: <ShieldCheckIcon className="w-10 h-10 text-purple-500" />,
  dashboard: <ChartBarIcon className="w-10 h-10 text-cyan-500" />,
  migration: <ArrowPathIcon className="w-10 h-10 text-purple-500" />,
  booking: <CalendarDaysIcon className="w-10 h-10 text-cyan-500" />,
  lms: <AcademicCapIcon className="w-10 h-10 text-purple-500" />,
  crm: <UsersIcon className="w-10 h-10 text-cyan-500" />,
  cms: <DocumentTextIcon className="w-10 h-10 text-purple-500" />,
  seo: <MagnifyingGlassIcon className="w-10 h-10 text-cyan-500" />,
  ai: <CpuChipIcon className="w-10 h-10 text-purple-500" />,
  support: <LifebuoyIcon className="w-10 h-10 text-cyan-500" />,
};

export const Services = () => {
  return (
    <section id="services" className="w-full flex flex-col items-center justify-center py-20 px-10 md:px-20 z-[20]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="flex flex-col items-center justify-center mb-16"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">My Expertise</h1>
        </div>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          Services I Offer
        </h1>
        <p className="text-gray-400 mt-4 text-center max-w-[600px] text-lg">
          I provide end-to-end development services to help you bring your ideas to life.
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center max-w-[1400px]">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInFromTop}
            key={service.title}
            className="flex flex-col p-6 rounded-2xl bg-[#030014]/50 border border-[#2A0E61] hover:border-purple-500 transition-colors shadow-lg hover:shadow-purple-500/20 backdrop-blur-md"
          >
            <div className="mb-4 bg-[#0a0022] w-16 h-16 rounded-full flex items-center justify-center border border-[#7042f88b] shrink-0">
              {iconMap[service.iconName]}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
            <ul className="text-gray-400 text-sm space-y-2 list-disc pl-4 marker:text-purple-500">
              {service.offerings.map((offering, i) => (
                <li key={i}>{offering}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="mt-20"
      >
        <a
          href="#contact"
          className="py-4 px-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(112,66,248,0.5)] transition-all flex items-center gap-2 cursor-pointer"
        >
          Let's Work Together
        </a>
      </motion.div>
    </section>
  );
};
