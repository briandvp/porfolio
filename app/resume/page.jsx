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
    description: "Short description about myself.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Brian Mep",
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
        <div className="container-mx-auto"></div>
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger 
                value="experience"
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
                >
                    Experience</TabsTrigger>
                <TabsTrigger 
                value="education"
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
                >
                    Education</TabsTrigger>
                <TabsTrigger 
                value="skills"
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
                >
                    Skills</TabsTrigger>
                <TabsTrigger 
                value="about"
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
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
            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60] text-center lg:text-left">{item.position}</h3>
            <div className="flex items-center gap-3" >
            {/* dot */}
            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
            <p className="text-white/60">{item.company}</p>
            </div>
            </li>
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
        <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {skills.description}</p>
        </div>
        <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:gap-4 xl:[30px]">
        {skills.skillList.map((skills, index) => {
            return <li key={index}>
            <TooltipProvider delayDuration={100}>
            <Tooltip>
            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div>
            </TooltipTrigger>
            <TooltipContent>
            <p className="capitalize">{skills.name}</p>
            </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </li>
        })}
        </ul>
        </ScrollArea>
        </div>
        </TabsContent>
        {/* about */}
        <TabsContent value="about" className="w-full text-center xl:text-left"
        >
        <div className="flex-1 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <h3 className="text-4xl font-bold mb-6">{about.title}</h3>
        <p className="text-zinc-400 mb-12 max-w-[600px]">
        {about.description}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-4">
            {about.info.map((item, index) => {
        return (
            <li key={index} className="flex items-center gap-2"
            >
            <span className="text-zinc-400 min-w-[100px]">{item.fieldName}</span>
            <span className="text-white">{item.fieldValue}</span>
            </li>
        );
        })}</ul>
        </div>
        </TabsContent>
        </div>
        </Tabs>
        </motion.div>
    );
};

export default Resume;
