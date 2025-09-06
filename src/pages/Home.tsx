const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl font-bold md:text-7xl max-w-5xl mb-8 py-4 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent leading-right">
                    Hi, I'm Ogunwa Chioma Stephanie
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
                    Something about being a developer yada yada yada
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="flex justify-center space-x-4">
                    <a 
                    href="#projects"
                    className="bg-blue-800 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        View Projects
                    </a>

                    <a 
                    href="#contact"
                    className="border border-blue-800 text-blue-800 px-6 py-3 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-800/10"
                    >
                        View Contact
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Home 