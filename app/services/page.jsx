"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
{
    num: "01",
    title: "Web Development",
    description: "...",
    href: "",
},
{
    num: "02",
    title: "UI/UX Design",
    description: "...",
    href: "",
},
{
    num: "03",
    title: "Logo Design",
    description: "...",
    href: "",
},
{
    num: "04",
    title: "SEO",
    description: "fin",
    href: "",
},
];

const Services = () => {
return (
<section className="min-h-screen py-12">
<div className="container mx-auto px-4 md:px-8">
<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
    >
    {services.map((services, index) => {
    return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        key={index}
        className="flex-1 flex flex-col justify-center gap-6 group p-8 rounded-2xl bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-500"
    >
    {/* top */}
    <div className="w-full flex justify-between items-center">
    <div className="text-7xl font-extrabold bg-gradient-to-r from-white/10 to-white/30 bg-clip-text text-transparent group-hover:from-accent/60 group-hover:to-accent transition-all duration-500">
    {services.num}
    </div>
    <Link
    href={services.href}
    className="w-[60px] h-[60px] rounded-full bg-white/10 group-hover:bg-accent border border-white/20 transition-all duration-500 flex justify-center items-center hover:-rotate-45 hover:scale-110"
    >
    <BsArrowDownRight className="text-white text-2xl group-hover:text-primary" />
    </Link>
    </div>
    {/* title */}
    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
    {services.title}
    </h2>
    {/* description */}
    <p className="text-white/60 group-hover:text-white/80 transition-all duration-500">
    {services.description}
    </p>
    {/* border */}
    <div className="border-b border-white/10 group-hover:border-accent/20 w-full transition-all duration-500"></div>
    </motion.div>
    );
    })}
    </motion.div>
</div>
</section>
);
};

export default Services;
