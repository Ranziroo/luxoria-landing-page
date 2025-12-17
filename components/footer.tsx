"use client";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#0b0b0b] text-gray-300 overflow-hidden">

            {/* DECORATIVE LINE */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>

            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-white">
                        LUXORIA
                    </h2>

                    <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
                        Crafting timeless luxury experiences through refined design,
                        premium quality, and uncompromising attention to detail.
                    </p>

                    <p className="mt-6 text-sm italic text-gray-500">
                        — Designed for those who value excellence
                    </p>
                </div>

                {/* NAVIGATION */}
                <div>
                    <h3 className="uppercase tracking-widest text-sm sm:text-base text-gray-400">
                        Navigation
                    </h3>

                    <ul className="mt-6 space-y-4">
                        {["Home", "About", "Services", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="focus:outline-none active:outline-none hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT & SOCIAL */}
                <div>
                    <h3 className="uppercase tracking-widest text-sm sm:text-base text-gray-400">
                        Get in Touch
                    </h3>

                    <div className="mt-6 space-y-2 sm:space-y-4 text-gray-400">
                        <p>contact@luxoria.com</p>
                        <p>+62 812 3456 7890</p>
                        <p>Jakarta, Indonesia</p>
                    </div>

                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:gap-6 gap-3 text-sm items-center sm:items-start">
                        {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="focus:outline-none active:outline-none hover:text-white transition-colors duration-300"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-sm text-gray-500">
                    <span>© {new Date().getFullYear()} Luxoria. All rights reserved.</span>
                    <span>Privacy Policy · Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
