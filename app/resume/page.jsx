"use client";

import {
    FaHtml5,
    FaCss,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaJs,
    FaCss3,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: "About me",
    description: "I am a passionate Frontend Developer with experience in creating modern and responsive web applications. I specialize in React and Next.js, with a strong focus on creating intuitive user interfaces and exceptional user experiences.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Brian",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+549)1162969556",
        },
        {
            fieldName: "Experience",
            fieldValue: "1+ Years",
        },
        {
            fieldName: "Telegram",
            fieldValue: "bbrix",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Argentina",
        },
        {
            fieldName: "Email",
            fieldValue: "1brianone1@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Spanish",
        },
    ],
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "A brief overview of my work experience.",
    items: [
        {
            company: "Tech Solutions Inc.",
            position: "Front-End Developer Intern",
            duration: "2022 - Present",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer Intern",
            duration: "Summer 2021",
        },
        {
            company: "E-commerce Startup",
            position: "Freelance Web Developer",
            duration: "2020 - 2021",
        },
        {
            company: "Tech Academy",
            position: "Teaching Assistant",
            duration: "2019 - 2021",
        },
        {
            company: "Digital Agency",
            position: "UI/UX Designer",
            duration: "Summer 2021",
        }
    ],
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "A brief overview of my work experience.",
    items: [
        {
            institution: "Online Course Patform",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023",
        },
        {
            institution: "Web Design Studio",
            degree: "Front-End Developer Intern",
            duration: "Summer 2021",
        },
        {
            institution: "Codecademy",
            degree: "programing course",
            duration: "2022-2023",
        },
        {
            institution: "Online Course",
            degreee: "Programming Course",
            duration: "2020 - 2021",
        },
    ],
};

// skills data
const skills = {
title: "My Skills",
description:"Data science corte tu vieja",
skillList: [
    {
    icon: <FaHtml5 />,
    name: "html 5",
    },
    {
    icon: <FaCss3 />,
    name: "css 3",
    },
    {
    icon: <FaJs />,
    name: "javascript",
    },
    {
    icon: <FaReact />,
    name: "react.js",
    },
    {
    icon: <SiNextdotjs />,
    name: "Next.js",
    },
    {
    icon: <SiTailwindcss />,
    name: "tailwind.css",
    },
],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="min-h-[85vh] flex items-center justify-center py-12 xl:py-8"
        >
        <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-12 xl:gap-16"
        >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4 bg-transparent p-0">
                <TabsTrigger 
                value="experience"
                className="w-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:backdrop-blur-md rounded-xl py-5 text-lg font-semibold transition-all duration-300"
                >
                    Experience</TabsTrigger>
                <TabsTrigger 
                value="education"
                className="w-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:backdrop-blur-md rounded-xl py-5 text-lg font-semibold transition-all duration-300"
                >
                    Education</TabsTrigger>
                <TabsTrigger 
                value="skills"
                className="w-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:backdrop-blur-md rounded-xl py-5 text-lg font-semibold transition-all duration-300"
                >
                    Skills</TabsTrigger>
                <TabsTrigger 
                value="about"
                className="w-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:backdrop-blur-md rounded-xl py-5 text-lg font-semibold transition-all duration-300"
                >
                    About me</TabsTrigger>
            </TabsList>
        {/* content */}
        <div className="win-h-[70vh] w-full">
        {/* experience */}
        <TabsContent value="experience" className="w-full">
        <div className="flex flex-col gap-[30px] text bg-center xl:text-left">
        <h3 className="text-4xl font-bold">{experience.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {experience.description}
        </p>
        <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {experience.items.map((item, index)=> {
            return (
            <motion.li 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="group bg-black/20 backdrop-blur-sm hover:bg-black/40 h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2 transition-all duration-300"
            >
                <span className="text-accent font-medium group-hover:text-accent/80">{item.duration}</span>
                <h3 className="text-xl font-bold max-w-[260px] min-h-[60px] text-center lg:text-left group-hover:text-white/90 transition-all duration-300">{item.position}</h3>
                <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent group-hover:bg-accent/80 transition-all duration-300"></span>
                    <p className="text-white/60 group-hover:text-white/80">{item.company}</p>
                </div>
            </motion.li>
            )
            })}
            </ul>
        </ScrollArea>
        </div>
        </TabsContent>
        {/* education */}
        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text bg-center xl:text-left">
        <h3 className="text-4xl font-bold">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {education.description}
        </p>
        <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {education.items.map((item, index)=> {
            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60] text-center lg:text-left">{item.degree}</h3>
            <div className="flex items-center gap-3" >
            {/* dot */}
            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
            <p className="text-white/60">{item.institution}</p>
            </div>
            </li>
            })}
            </ul>
        </ScrollArea >
        </div>
        </TabsContent>
        {/* skills */}
        <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6 text-center xl:text-left">
                    <motion.h3 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-white/90"
                    >
                        {skills.title}
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                    >
                        {skills.description}
                    </motion.p>
                </div>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.skillList.map((skill, index) => {
                            return (
                                <motion.li 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    key={index}
                                >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-black/20 backdrop-blur-sm hover:bg-black/40 rounded-xl flex justify-center items-center group transition-all duration-300">
                                                <div className="text-6xl text-white/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                                                    {skill.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize font-medium">{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </motion.li>
                            );
                        })}
                    </ul>
                </ScrollArea>
            </div>
        </TabsContent>
        {/* about */}
        <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex-1 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
                <motion.h3 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 text-white/90"
                >
                    {about.title}
                </motion.h3>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/60 mb-12 max-w-[600px] leading-relaxed"
                >
                    {about.description}
                </motion.p>
                <motion.ul 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6"
                >
                    {about.info.map((item, index) => {
                        return (
                            <motion.li 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                key={index} 
                                className="flex items-center gap-4 group bg-black/10 hover:bg-black/20 rounded-lg p-4 transition-all duration-300 overflow-hidden"
                            >
                                <span className="text-white/60 min-w-[100px] shrink-0 font-medium group-hover:text-accent/80 transition-all duration-300">
                                    {item.fieldName}
                                </span>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="text-white group-hover:text-white/90 transition-all duration-300 text-sm md:text-base truncate cursor-pointer">
                                                {item.fieldValue}
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent side="top" className="bg-black/90 text-white px-4 py-2 text-sm border-accent/20">
                                            <p>{item.fieldValue}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
        </TabsContent>
            </div>
        </Tabs>
    </div>
</motion.div>
    );
};

export default Resume;
