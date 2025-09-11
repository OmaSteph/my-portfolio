
import { useActiveSection } from "../hooks/useActiveSection"

type MobileNavProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

const MobileNav = ({ menuOpen, setMenuOpen }: MobileNavProps) => {
    const activeSection = useActiveSection(["home", "about", "projects", "contact"]);

    const handleNavClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
        }
    };


  const linkClass = (section: string) =>
    `text-2xl font-semibold my-4 transform transition-transform duration-300 
    ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}
    ${activeSection === section
        ? "text-blue-500"
        : "text-white hover:text-gray-300"
    }`;

    return (
        <div 
            className={`fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
            ${menuOpen 
                ? 'translate-x-0 opacity-90 pointer-events-auto' 
                : 'translate-x-full opacity-0 pointer-events-none'
            }
            `}
        >

        <button 
            onClick={() => setMenuOpen(false)} 
            className="absolute top-6 right-6 text-3xl text-white focus:outline-none cursor-pointer"
            aria-label="Close Menu"
        >
            &times;
        </button>

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
    )
}

export default MobileNav