import { motion } from "framer-motion";
import sunnyShop from "../../assets/sunnyShop.png";
import codeImage from "../../assets/code.png";
import codeImage2 from "../../assets/code2.png";
interface Project {
  title: string;
  description: string;
  image: string;
}

const projectData: Project[] = [
  {
    title: "Theft Alert System",
    description:
      "A system that alerts users when their property is being accessed by unauthorized persons.",
    image: codeImage,
  },
  {
    title: "Sunny Shop",
    description:
      "An e-commerce platform that allows users to buy and sell goods online.",
    image: sunnyShop,
  },
  {
    title: "Crop Pest Detection System",
    description:
      "Mentoring and developing young leaders through workshops, training sessions, and hands-on community projects.",
    image: codeImage2,
  },
  {
    title: "Business Management System",
    description:
      "A system that helps businesses manage their operations and finances.",
    image: codeImage,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
          <p className="text-white max-w-2xl mx-auto">
            Discover how we're making a difference in communities through our
            various initiatives and programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
