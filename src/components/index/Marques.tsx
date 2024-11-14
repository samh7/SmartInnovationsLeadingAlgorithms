import {
  Database,
  Globe2,
  Code2,
  Laptop,
  Server,
  Smartphone,
  Cloud,
  Cpu,
  Terminal,
} from "lucide-react";
import { FaGit } from "react-icons/fa";

const Marques = () => {
  const techStack = [
    { icon: <Code2 size={24} />, text: "Web Development" },
    { icon: <Database size={24} />, text: "Database Solutions" },
    { icon: <Globe2 size={24} />, text: "Cloud Services" },
    { icon: <Laptop size={24} />, text: "Software Development" },
    { icon: <Server size={24} />, text: "Backend Services" },
    { icon: <Smartphone size={24} />, text: "Mobile Development" },
    { icon: <Cloud size={24} />, text: "Cloud Computing" },
    { icon: <Cpu size={24} />, text: "DevOps" },
    { icon: <FaGit size={24} />, text: "Version Control" },
    { icon: <Terminal size={24} />, text: "CLI Tools" },
  ];

  const reversedTechStack = [...techStack].reverse();
  return (
    <>
      {/* First Marquee Row */}
      <div className="w-full bg-slate-50 py-12 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          {/* First marquee group */}
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center mx-8 text-slate-700"
              >
                <span className="mr-2">{tech.icon}</span>
                <span className="text-lg font-medium">{tech.text}</span>
              </div>
            ))}
          </div>

          {/* Duplicate marquee group for seamless loop */}
          <div className="animate-marquee2 whitespace-nowrap flex items-center absolute top-0">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center mx-8 text-slate-700"
              >
                <span className="mr-2">{tech.icon}</span>
                <span className="text-lg font-medium">{tech.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Second Marquee Row */}
      <div className="w-full bg-slate-50 py-12 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          {/* First marquee group */}
          <div className="animate-marquee-opposite whitespace-nowrap flex items-center">
            {reversedTechStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center mx-8 text-slate-700"
              >
                <span className="mr-2">{tech.icon}</span>
                <span className="text-lg font-medium">{tech.text}</span>
              </div>
            ))}
          </div>

          {/* Duplicate marquee group for seamless loop */}
          <div className="animate-marquee2-opposite whitespace-nowrap flex items-center absolute top-0">
            {reversedTechStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center mx-8 text-slate-700"
              >
                <span className="mr-2">{tech.icon}</span>
                <span className="text-lg font-medium">{tech.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marques;
