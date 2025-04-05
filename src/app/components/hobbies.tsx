import { FaBook, FaCode, FaLightbulb, FaPlaneDeparture } from "react-icons/fa";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Coding",
      icon: <FaCode size={28} className="text-blue-400" />,
      description: "I enjoy building applications and exploring new technologies.",
    },
    {
      title: "Reading",
      icon: <FaBook size={28} className="text-green-400" />,
      description: "I love reading books that expand my knowledge and skills.",
    },
    {
      title: "Traveling",
      icon: <FaPlaneDeparture size={28} className="text-orange-400" />,
      description: "Traveling helps me experience new cultures and refresh my mind.",
    },
    {
      title: "Learning New Things",
      icon: <FaLightbulb size={28} className="text-yellow-300" />,
      description: "I'm always eager to learn new skills and keep growing professionally.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">
        Hobbies & Interests
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition"
          >
            <div className="mb-4">{hobby.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
            <p className="text-white/80 text-sm">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
