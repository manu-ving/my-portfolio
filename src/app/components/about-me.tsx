export default function Footer() {
  return (
    <footer className="bg-white/5 text-white text-sm py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold mb-2">Contact Info</h4>
          <ul className="space-y-1 text-white/80">
            <li>
              📞 Mobile: <span className="text-white">+91 7907232718</span>
            </li>
            <li>
              ✉️ Email:{" "}
              <a
                href="mailto:manuknarayanan121@gmail.com"
                className="text-blue-400 hover:underline"
              >
                manuknarayanan121@gmail.com
              </a>
            </li>
            <li>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/manoj-narayanank"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/manoj-narayanank
              </a>
            </li>
            <li>
              📸 Instagram:{" "}
              <a
                href="https://www.instagram.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                instagram.com/your_username
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-base font-semibold mb-2">Location</h4>
          <p className="text-white/80">
            Tirur, Malappuram, Kerala - 676101, India
          </p>
        </div>

        {/* Copyright */}
        <div className="lg:col-span-1 md:col-span-2 flex items-end justify-between md:justify-start pt-4 md:pt-0">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Manoj K Narayanan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
