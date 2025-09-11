import { useState } from "react"
import MobileNav from "./MobileNav";
import { useActiveSection } from "../hooks/useActiveSection";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeSection = useActiveSection(["home", "about", "projects", "contact"]);

    const handleNavClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // only matters for mobile
        }
    };

    const linkClass = (section: string) =>
    `transition-colors ${
      activeSection === section
        ? "text-blue-500 font-bold"
        : "text-gray-300 hover:text-white"
    }`;

    return (
        <nav className="fixed top-0 w-full z-40 p-4 shadow-lg h-16 flex items-center">
            <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center h-16">
                    <a
                        onClick={() => handleNavClick("home")}
                        className="text-2xl font-bold text-white cursor-pointer"
                    >
                        Oma&apos;s Portfolio
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                    <div className="hidden md:flex space-x-8 cursor-pointer">
                        <a 
                            onClick={() => handleNavClick("home")} 
                            className={linkClass("home")}
                        >
                            Home
                        </a>
                        <a  
                            onClick={() => handleNavClick("about")} 
                            className={linkClass("about")}
                        >
                            About
                        </a>
                        <a
                        onClick={() => handleNavClick("projects")}
                        className={linkClass("projects")}
                        >
                            Projects
                        </a>
                        <a
                        onClick={() => handleNavClick("contact")}
                        className={linkClass("contact")}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar