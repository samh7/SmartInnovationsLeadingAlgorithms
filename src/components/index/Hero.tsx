import heroImage from "../../assets/hero-img.svg";
export default function Hero() {
  return (
    <div id="hero" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovating the Future
              <span className=""> of Technology</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-xl mb-8 max-w-2xl">
              Transforming ideas into cutting-edge solutions. We specialize in
              advanced technology solutions that drive business growth and
              innovation.
            </p>
            <div className="flex  sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="px-8 py-4 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition duration-300 text-center"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          <div>{/* <img src={heroImage} alt="" /> */}</div>
          {/* Hero Image + DOTS */}
          <div className="flex-1 w-full max-w-[500px] mx-auto lg:mx-0">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 sm:h-[450px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')]"></div>
              </div>
              <img className="relative z-10 hero-pulse" src={heroImage} alt="" />

              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r">
                {/* Tech-themed overlay pattern */}
              </div>
              {/* img */}

              {/* Floating elements */}
              <div className="absolute inset-0 flex items-center justify-center ">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-lg rounded-lg rotate-45 animate-float"></div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-lg rounded-lg -rotate-12 animate-float-delay"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="bg-gradient-to-r from-[#e4cdea] via-[#a03684] to-[#6431ab]
        animate-gradient
        bg-clip-text text-transparent mt-12 md:mt-16  grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold ">50+</div>
            <div className="text-sm md:text-base text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold ">98%</div>
            <div className="text-sm md:text-base text-gray-400">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold ">24/7</div>
            <div className="text-sm md:text-base text-gray-400">
              Support Available
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold ">4+</div>
            <div className="text-sm md:text-base text-gray-400">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
