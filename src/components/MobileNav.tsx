const MobileNav = ({ menuOpen, setMenuOpen }) => {
    return (
        <div 
            className={`fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 

            ${menuOpen 
                ? 'h-screen opacity-100 pointer-events-auto' 
                : 'h-0 opacity-0 pointer-events-none'
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
            href="#home"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
            `}
            onClick={() => setMenuOpen(false)}
        >
            Home
        </a>
        <a 
            href="#about"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
            `}
            onClick={() => setMenuOpen(false)}
        >
            About
        </a>
        <a 
            href="#projects"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
            `}
            onClick={() => setMenuOpen(false)}
        >
            Projects
        </a>
        <a 
            href="#contact"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
            `}
            onClick={() => setMenuOpen(false)}
        >
            Contact
        </a>
    </div>
    )
}

export default MobileNav