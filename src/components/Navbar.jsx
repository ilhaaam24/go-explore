import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Destinations", href: "#" },
  { name: "Hotels", href: "#" },
  { name: "Flights", href: "#" },
  { name: "Bookings", href: "#" },
  { name: "Login", href: "#" },
  { name: "Sign up", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="absolute top-8 z-20 left-0 right-0 px-6 sm:px-10 md:px-16 lg:px-40">
      <div className="flex justify-between items-center h-12">
        {/* Logo */}
        <div className="font-bold text-blue-600">
          <img src="./assets/images/logo.png" alt="logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 md:gap-6 lg:gap-16">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={`text-[#181E4B] font-open-sans font-semibold ${item.name === "Sign up" ? "border rounded-md py-2 px-5 hover:bg-[#181E4B] hover:text-white transition-all ease-in-out duration-100" : ""}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <img src="./assets/icons/humberger_menu.png" alt="menu" className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute left-0 w-full bg-white shadow-lg md:hidden top-16">
            <ul className="flex flex-col gap-6 py-6 px-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={`block text-[#181E4B] font-open-sans font-semibold ${item.name === "Sign up" ? "border rounded-md py-2 px-5 inline-block" : ""}`} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
