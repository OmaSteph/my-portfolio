const About = () => {

    const frontendSkills = [
        'HTML', 
        'CSS', 
        'JavaScript', 
        'TypeScript', 
        'React', 
        'Tailwind CSS'];

  return (
    <section 
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
        <div className="text-center max-w-3xl px-4">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-transparent">
                About Me
            </h2>
            
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
                <p className="text-lg text-gray-400 mb-2">
                    I am a passionate developer with experience in building web applications.
                </p>
            </div>

            <div>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-6 text-blue-400">Frontend Skills</h3>
                    <div className="flex flex-wrap justify-between items-center">
                        {frontendSkills.map((skill) => (
                            <span 
                                key={skill}
                                className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-blue-400"> 📔 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.Eng. Electronic and Computer Engineering</strong>-University of Nigeria, Nsukka
                            <br />
                            Second Class Upper Division (2018-2024)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-blue-400"> 💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold mb-1">
                                <strong>Front Engineering Intern</strong>-Gigo Planet Services Ltd.
                                <br />
                                March 2023 - September 2023
                            </h4>
                            <p>Assisted in developing and implementing user interfaces for websites or web applications using HTML, CSS, and JavaScript.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About