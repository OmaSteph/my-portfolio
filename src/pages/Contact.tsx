import RevealOnScroll from "../components/RevealOnScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-full max-w-3xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form action="" className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 hover:-translate-y-0.5"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 hover:-translate-y-0.5"
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 hover:-translate-y-0.5"
                placeholder="Your Message"
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white font-bold py-3 px-6 rounded transition-relative overflow-hidden">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;