import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
      relative
    bg-gradient-to-t from-[black] via-[black]  to-[#6431ab]
    py-16 "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl  font-bold text-center mb-8 text-white">
            About SILA's Hub
          </h2>

          <div className="flex gap-12 items-center">
            <div className="space-y-6 flex flex-col items-center text-center">
              <p className="text-white text-xl  leading-relaxed max-w-5xl">
                At Sila's Hub, we are passionate about fostering innovation and
                technological advancement in Africa. Our name "SILA," is an
                acronym of <b> Smart Innovations, Leading Algorithms </b>.We are
                commited to nurturing talent and driving innovation in the tech
                ecosystem.
              </p>

              <p className="text-white text-xl leading-relaxedmax-w-3xl">
                Founded with a vision to bridge the digital divide, we provide
                cutting-edge software solutions, technical training, and
                consultancy services. Our team of experienced professionals
                works tirelessly to deliver excellence and innovation in every
                project we undertake.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white mb-2">40+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-black rounded-[20%] md:border-none border-t-2 border-gray-200/30">
              <div
                className="bg-gradient-to-r from-[#e4cdea] via-[#a03684] to-[#6431ab]
              bg-clip-text text-transparent
              "
              >
                <h3 className="text-4xl font-bold  mb-4">Our Mission</h3>
                <p className="text-2xl">
                  To empower businesses and individuals through innovative
                  technology solutions and quality training, fostering digital
                  transformation across Africa.
                </p>
              </div>
            </div>

            <div className="p-6 bg-black rounded-lg">
              <div
                className="bg-gradient-to-r from-[#e4cdea] via-[#a03684] to-[#6431ab]
              bg-clip-text text-transparent
              "
              >
                <h3 className="text-4xl font-bold mb-4">Our Vision</h3>
                <p className="text-2xl ">
                  To be the leading technology hub in Africa, recognized for
                  excellence in software development, training, and digital
                  innovation.
                </p>
              </div>
            </div>

            <div className="p-6 bg-black rounded-lg">
              <div
                className="bg-gradient-to-r from-[#e4cdea] via-[#a03684] to-[#6431ab]
              bg-clip-text text-transparent
              "
              >
                {/* </div> */}
                <h3 className="text-4xl font-semibold mb-4">Our Values</h3>
                <ul className="text-2xl list-none list-inside">
                  <li>Innovation</li>
                  <li>Excellence</li>
                  <li>Integrity</li>
                  <li>Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
