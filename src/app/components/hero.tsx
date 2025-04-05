export default function Hero() {
  return (
    <div
      className="relative w-full min-h-screen bg-center bg-no-repeat bg-cover flex items-center px-4 md:px-16 py-20"
      style={{ backgroundImage: "url('/me.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent z-0" />

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl text-white space-y-6">
        {/* Headings */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-2">
          Hi, I&apos;m
          </h1>
          <h2 className="text-blue-400 font-bold inline-block text-3xl">
            Manoj K Narayanan
          </h2>
          <p className="hidden md:block text-base sm:text-lg font-medium text-white/90 leading-relaxed mt-2">
            A detail-driven and experienced accountant with a passion for
            precision. I specialize in delivering accurate financial insights
            and helping businesses streamline their operations across India and
            the Gulf region.
          </p>

        </div>

        {/* Contact Info Box */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl space-y-2 text-sm sm:text-base text-white/80 shadow-lg w-fit">
          <p>
            📞 <span className="text-white">+91 7907232718</span>
          </p>
          <p>
            ✉️{" "}
            <a
              href="mailto:manuknarayanan121@gmail.com"
              className="text-blue-400 hover:underline"
            >
              manuknarayanan121@gmail.com
            </a>
          </p>
          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/manoj-narayanank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/manoj-narayanank
            </a>
          </p>
          <p>
            📸{" "}
            <a
              href="https://instagram.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              instagram.com/your_username
            </a>
          </p>
          <p>📍 Tirur, Malappuram, Kerala – 676101, India</p>
        </div>
      </div>
    </div>
  );
}
