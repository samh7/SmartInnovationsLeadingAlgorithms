import { FaCode, FaDesktop, FaMobile, FaShoppingCart } from "react-icons/fa";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-6  w-[200px] h-[270px] mb-[15px] backdrop-blur-sm  flex flex-col items-start justify-start rounded-2xl">
      <div className="text-primary text-3xl mb-4 text-[#a03684]">{icon}</div>
      <h3 className="text-base font-bold mb-3 text-white">{title}</h3>
      <p className="text-[14px] text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Custom Web Development",
      description:
        "Full-stack development with React, Node.js, and modern frameworks to create powerful web applications.",
    },
    {
      icon: <FaDesktop />,
      title: "Responsive Web Design",
      description:
        "Mobile-first designs that adapt perfectly to all devices with stunning UI/UX implementations.",
    },
    {
      icon: <FaMobile />,
      title: "Progressive Web Apps",
      description:
        "Next-gen PWAs with offline capabilities, push notifications, and native-like performance.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Solutions",
      description:
        "Custom e-commerce platforms with secure payment gateways, inventory management, and analytics.",
    },
  ];

  return (
    <section
      id="services"
      className="relative px-4 py-20 bg-black overflow-hidden min-h-screen"
    >
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="w-full md:w-1/2 text-left md:sticky md:top-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-[#00ff00] to-[#00cc00]">
              Our Services
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-6">
              At SILA's Hub, we specialize in delivering high-quality web
              development solutions that help businesses grow and succeed in the
              digital world.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Our team of expert developers and designers combines cutting-edge
              technology with creative excellence to transform your digital
              vision into reality. We focus on scalable, secure, and performant
              solutions that drive real business results.
            </p>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-8">
              <p>
                🚀 <span className="text-gray-300">Fast Turnaround:</span> We
                deliver high-quality solutions within your timeline.
              </p>
              <p>
                💡 <span className="text-gray-300">Innovation First:</span> We
                stay ahead with the latest tech trends and best practices.
              </p>
              <p>
                🤝 <span className="text-gray-300">Dedicated Support:</span> Our
                team provides ongoing maintenance and technical support.
              </p>
              <p>
                📈 <span className="text-gray-300">Growth Focused:</span> We
                build scalable solutions that grow with your business.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-2  gap-10">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
