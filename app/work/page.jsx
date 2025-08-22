"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, 
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@radix-ui/react-tooltip";
const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Lorem ipsum dolor sit amet",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: "/assets/assets/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet",
        stack: [{ name: "Next.ks" }, { name: "Tailwind.css" }, { name: "Node.js" }],
        image: "/assets/assets/work/thumb2.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet",
        stack: [{ name: "Next.ks" }, { name: "Tailwind.css" }, { name: "Node.js" }],
        image: "/assets/assets/work/thumb3.png",
        live: "",
        github: "",
    },
];

import Link from "next/link";
import Image from "next/image"
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const Work = () => {
    const [project, setProject] = useState(projects[0]);

const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project stare based on current slide index
    setProject(projects[currentIndex]);
    
};

return <motion.section 
    initial={{ opacity: 0, y: 20 }} 
    animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    }}
    className="py-12 min-h-screen"
>
    <div className="container mx-auto px-4">
    <div className="flex flex-col xl:flex-row xl:gap-12">
    <div className="w-full xl:w-[50%] xl:h-[520px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-8 h-full bg-black/20 backdrop-blur-sm p-8 rounded-2xl">
        {/* outline num */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-8xl leading-none font-extrabold bg-gradient-to-r from-white/10 to-white/30 bg-clip-text text-transparent"
        >
            {project.num}
        </motion.div>
        <div className="space-y-6">
        {/* project category & title */}
        <div className="space-y-2">
            <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-accent text-sm uppercase tracking-wider"
            >
                {project.category}
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-5xl font-bold text-white"
            >
                {project.title}
            </motion.h2>
        </div>
        {/* project description */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/70 leading-relaxed"
        >
            {project.description}
        </motion.p>
        {/* Stack */}
        <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3"
        >
        {project.stack.map((item, index) => (
            <li key={index} className="bg-accent/10 px-4 py-2 rounded-full text-accent text-sm">
                {item.name}
            </li>
        ))}</motion.ul>
        {/* Border */}
        <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent my-8"></div>
        {/* buttons */}
        <div className="flex items-center gap-6">
            {/* live project button */}
        <Link href={project.live}>
        <TooltipProvider delayDuration={100}>
        <Tooltip>
        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-black/30 flex justify-center items-center group transition-all duration-300">
            <BsArrowUpRight className="text-2xl text-white group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-black/90 text-white px-4 py-2 text-sm border-accent/20">
            <p>Live project</p>
        </TooltipContent>
        </Tooltip>
        </TooltipProvider>
        </Link>
        {/* github project button */}
        <Link href={project.github}>
        <TooltipProvider delayDuration={100}>
        <Tooltip>
        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-black/30 flex justify-center items-center group transition-all duration-300">
            <BsGithub className="text-2xl text-white group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-black/90 text-white px-4 py-2 text-sm border-accent/20">
            <p>Github repository</p>
        </TooltipContent>
        </Tooltip>
        </TooltipProvider>
        </Link>
        </div>
        </div>
        </div>
        </div>
        <div className="w-full xl:w-[50%] relative">
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="h-[520px] rounded-2xl overflow-hidden"
        onSlideChange={handleSlideChange}
        >
            {projects.map((project, index)=> {
            return ( 
            <SwiperSlide key={index} className="w-full">
            <div className="relative w-full h-full group">
            {/* overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
            {/* image */}
            <Image 
                src={project.image} 
                fill 
                className="object-cover object-top group-hover:scale-105 transition-all duration-500"
                alt={project.title}
                priority 
            />
            </div>
            </SwiperSlide>
            );
            })}
            {/* buttons */}
            <WorkSliderBtns 
                containerStyles="flex gap-4 absolute bottom-6 right-6 z-20" 
                btnStyles="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:border-accent/50 text-white/80 hover:text-accent transition-all duration-300"
            />
        </Swiper>
        </div>
    </div>
    </div>
    </motion.section>
}

export default Work