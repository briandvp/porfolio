"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "49024902",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "1brianone1@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Buenos Aires, Argentina",
    },
];

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [servicio, setServicio] = useState("");
  return (
    <motion.section 
    initial={{ opacity: 0, y: 20 }} 
    animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    }}
    className="py-6"
>
    <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-[30px]">
{/* form */}
    <div className="xl:w-[54%] order-2 xl:order-none">
    <form className="flex flex-col gap-6 p-10 bg-[#23232a] rounded-2xl shadow-2xl border border-[#32323a]/40">
    <h3 className="text-4xl text-accent font-bold mb-2">{"Let's work together"}</h3>
    <p className="text-white/70 mb-4">¿Listo para tu próximo proyecto? ¡Contáctame!</p>
    {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Nombre" className="rounded-lg bg-[#23232a] border border-[#32323a] focus:ring-2 focus:ring-accent transition-all duration-200" />
            <Input type="text" placeholder="Apellido" className="rounded-lg bg-[#23232a] border border-[#32323a] focus:ring-2 focus:ring-accent transition-all duration-200" />
            <Input type="email" placeholder="Correo electrónico" className="rounded-lg bg-[#23232a] border border-[#32323a] focus:ring-2 focus:ring-accent transition-all duration-200" />
            <Input type="tel" placeholder="Teléfono" className="rounded-lg bg-[#23232a] border border-[#32323a] focus:ring-2 focus:ring-accent transition-all duration-200" />
</div>
    {/* select */}
        <Select value={servicio} onValueChange={setServicio}>
            <SelectTrigger className="w-full rounded-lg bg-[#23232a] border border-[#32323a] focus:ring-2 focus:ring-accent transition-all duration-200 text-white">
                <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent className="bg-[#23232a] border border-[#32323a] text-white">
                <SelectGroup>
                    <SelectLabel className="text-white/70">Selecciona un servicio</SelectLabel>
                    <SelectItem value="web" className="focus:bg-accent/20 hover:bg-accent/20">Desarrollo Web</SelectItem>
                    <SelectItem value="ui" className="focus:bg-accent/20 hover:bg-accent/20">UI/UX Design</SelectItem>
                    <SelectItem value="logo" className="focus:bg-accent/20 hover:bg-accent/20">Logo Design</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    {/* textarea */}
        <Textarea
            className="h-[200px] rounded-lg bg-[#23232a] border border-[#32323a] focus:ring-2 focus:ring-accent transition-all duration-200"
            placeholder="Escribe tu mensaje aquí..."
        />
    {/* btn */}
    <Button size="md" className="max-w-40 bg-accent hover:bg-accent/80 text-white rounded-lg shadow-lg transition-all duration-200">Enviar mensaje</Button>
    </form>
    </div>
{/* info */}
<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
    <ul className="space-y-6">
        {info.map((item, index) => (
            <motion.li
                key={index}
                className="flex items-center gap-6 p-4 rounded-xl bg-[#23232a] shadow-md hover:shadow-xl transition-all duration-200 group"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="w-[52px] h-[52px] xl:h-[72px] bg-gradient-to-br from-accent/30 to-[#23232a] text-accent rounded-lg flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-200">
                    <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                    <p className="text-white/70 font-medium">{item.title}</p>
                    <h3 className="text-xl font-bold text-white">{item.description}</h3>
                </div>
            </motion.li>
        ))}
    </ul>
</div>
</div>
</div>
    </motion.section>
    );
};

export default Contact;
