"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = ["Home", "About Us", "Services", "Contact"];

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full px-6 sm:px-10 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            {/* Logo */}
            <img
                className="w-10 h-10"
                src="https://img.pikbest.com/png-images/20241101/-22golden-royalty-luxury-logo-22_11041756.png!sw800"
                alt="logo"
            />

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6">
                {menuItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className={`focus:outline-none active:outline-none font-medium transition-colors duration-300 ${scrolled ? "text-black hover:text-gold-500" : "text-white hover:text-yellow-400"
                            }`}
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                className={`md:hidden transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
                    }`}
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu */}
            <div
                className={`focus:outline-none active:outline-none fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 text-2xl transform transition-transform duration-300 md:hidden ${mobileMenu ? "translate-y-0" : "-translate-y-full"
                    } ${scrolled ? "bg-white text-black" : "bg-black text-white"}`}
            >
                {menuItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className="font-semibold"
                        onClick={() => setMobileMenu(false)}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </header>
    );
}
