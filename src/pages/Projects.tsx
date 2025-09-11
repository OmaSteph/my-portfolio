import RevealOnScroll from "../components/RevealOnScroll"

const Projects = () => {
  return (
    <section 
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-transparent">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    <p className="text-gray-400 mb-4">
                        A cloud platform is a comprehensive suite of cloud-based services and tools that enable businesses and developers to build, deploy, and manage applications and services in a virtualized environment. It provides a scalable and flexible infrastructure, allowing users to access computing resources, storage, and networking capabilities on-demand. Cloud platforms typically offer features such as virtualization, automation, security, and monitoring, making it easier for organizations to leverage the benefits of cloud computing without the need for extensive on-premises infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-between items-center">
                        {["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"].map((skill) => (
                            <span 
                                key={skill} 
                                className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <a 
                            href="https://kotuma-app.vercel.app"
                            className="text-blue-400 hover:text-blue-300 font-bold transition-colors "
                        >
                            View Project → 
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    <p className="text-gray-400 mb-4">
                        A cloud platform is a comprehensive suite of cloud-based services and tools that enable businesses and developers to build, deploy, and manage applications and services in a virtualized environment. It provides a scalable and flexible infrastructure, allowing users to access computing resources, storage, and networking capabilities on-demand. Cloud platforms typically offer features such as virtualization, automation, security, and monitoring, making it easier for organizations to leverage the benefits of cloud computing without the need for extensive on-premises infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-between items-center">
                        {["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"].map((skill) => (
                            <span 
                                key={skill} 
                                className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <a 
                            href="https://kotuma-app.vercel.app"
                            className="text-blue-400 hover:text-blue-300 font-bold transition-colors "
                        >
                            View Project → 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects