const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full shadow-md p-4">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="flex justify-between items-center h-16">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

                </div>
            </div>
        </nav>
    )
}
export default Navbar