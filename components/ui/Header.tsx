import Link from "next/link";
import { Button, buttonVariants } from "./button";
import Nav from "./Nav";

const Header = () => {
return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-4xl font-semibold">
        BrianMep<span className="text-accent">.</span>
        </Link>
        {/* Elimina el <a> dentro del Link y aplica las clases directamente */}
        <Link
        href="/contact"
        className={buttonVariants({ variant: "default", size: "lg" })}
        >
        <Button>Hire me</Button>
        </Link>
        </div>
        <Nav />
    </header>
);
};

export default Header;