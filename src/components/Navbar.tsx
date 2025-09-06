import { useEffect } from "react"

const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 p-4 shadow-lg h-16 flex items-center">
            <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="text-2xl font-bold">
                        Oma's Portfolio
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a 
                        href="#home"
                        className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </a>
                        <a 
                        href="#about"
                        className="text-gray-300 hover:text-white transition-colors">
                            About
                        </a>
                        <a 
                        href="#projects"
                        className="text-gray-300 hover:text-white transition-colors">
                            Projects
                        </a>
                        <a 
                        href="#contact"
                        className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar