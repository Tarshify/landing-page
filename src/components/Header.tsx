import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleChevronUp, PhoneCall, Menu } from "lucide-react";
import Logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  const navItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "À propos", href: "#about" },
  ];

  return (
    <>
      {/* Header principal */}
      <header className="fixed w-full z-40 transition-all duration-500 h-20 flex items-center bg-background/50 sm:bg-background/10 backdrop-blur-lg shadow-xl py-0 sm:border-b sm:border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img src={Logo} alt="Logo de tarshify" className="w-28 sm:w-36" />
            </a>

            {/* Navigation Desktop */}
            <nav className="hidden sm:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-colors font-medium  hover:text-primary bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent text-sm sm:text-base tracking-wider "
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/33629937887?text=Salut%20Tarshify%20!%20Je%20veux%20en%20savoir%20plus%20sur%20les%20e-commerces%20autonomes%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-[45px] w-[45px] items-center justify-center rounded-[7px] bg-transparent border-none cursor-pointer transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-[10px] bg-[#30C04F] z-[-1] transition-all duration-300 group-hover:rotate-[35deg] origin-bottom" />
                <span className="flex h-full w-full items-center justify-center rounded-[10px] border border-[rgba(156,156,156,0.466)] bg-transparent backdrop-blur-0 transition-all duration-300 group-hover:border-[rgba(206,206,206,0.466)] group-hover:bg-[rgba(214,214,214,0.466)] group-hover:backdrop-blur-[4px]">
                  <PhoneCall />
                </span>
              </a>
            </nav>

            {/* Mobile open & close menu button */}
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none text-white hover:text-gray-200"
              >
                {mobileMenuOpen ? (
                  <CircleChevronUp className="text-white w-8 h-8" />
                ) : (
                  <Menu className="text-white w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile - en dehors du header pour éviter les problèmes de z-index */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay semi-transparent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0 }}
              className="fixed inset-0 z-40 sm:hidden"
              onClick={toggleMobileMenu}
              style={{
                top: "80px",
              }}
            />

            {/* Menu latéral */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-150%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
              className="fixed top-20 right-0 w-4/5 w-[180px] bg-background/50 backdrop-blur-lg shadow-2xl z-30 sm:hidden flex flex-col rounded-b-xl border border-border border-t-0"
              style={{
                top: "80px",
                height: "200px",
              }}
            >
              <nav className="flex-1 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index }}
                    className="block py-2 text-base font-medium text-white text-center"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex justify-center mt-2"
                >
                  <a
                    href="https://wa.me/33629937887?text=Salut%20Tarshify%20!%20Je%20veux%20en%20savoir%20plus%20sur%20vos%20e-commerces%20autonomes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex h-[45px] w-[45px] items-center justify-center rounded-[7px] bg-transparent border-none cursor-pointer transition-all duration-300 group"
                  >
                    <span className="absolute inset-0 rounded-[10px] bg-[#30C04F] z-[-1] transition-all duration-300 group-hover:rotate-[35deg] origin-bottom" />
                    <span className="flex h-full w-full items-center justify-center rounded-[10px] border border-[rgba(156,156,156,0.466)] bg-transparent backdrop-blur-0 transition-all duration-300 group-hover:border-[rgba(206,206,206,0.466)] group-hover:bg-[rgba(214,214,214,0.466)] group-hover:backdrop-blur-[4px]">
                      <PhoneCall />
                    </span>
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
