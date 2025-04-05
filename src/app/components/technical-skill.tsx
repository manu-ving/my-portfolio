import { FaFileExcel, FaWordpress } from "react-icons/fa";
import { GiPeach } from "react-icons/gi";
import { LuTally5 } from "react-icons/lu";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { SiMyob, SiQuickbooks, SiZoho } from "react-icons/si";

export default function SoftwareSkills() {
  const skills = [
    { name: "Tally Prime", icon: <LuTally5 size={28} className="text-yellow-400" /> },
    { name: "Tally ERP", icon: <LuTally5 size={28} className="text-yellow-300" /> },
    { name: "Zoho Books", icon: <SiZoho size={28} className="text-red-500" /> },
    { name: "Peachtree", icon: <GiPeach size={28} className="text-purple-400" /> },
    { name: "QuickBooks", icon: <SiQuickbooks size={28} className="text-green-600" /> },
    { name: "MYOB", icon: <SiMyob size={28} className="text-violet-500" /> },
    { name: "MS Excel", icon: <FaFileExcel size={28} className="text-green-600" /> },
    { name: "MS Word", icon: <FaWordpress size={28} className="text-blue-400" /> },
    { name: "PowerPoint", icon: <PiMicrosoftPowerpointLogoFill size={28} className="text-orange-500" /> },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">
        Software Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition"
          >
            {skill.icon}
            <span className="text-white text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
