type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="   bg-gradient-to-r from-purple-700 to-blue-500 h-screen flex items-center justify-center relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-opacity-50 bg-black z-0"
        style={{ transform: "skewY(-12deg)", transformOrigin: "top left" }}
      ></div>
      <div className="text-center z-10 relative animate-slidein ">
        <h1 className="text-4xl sm:text-6xl text-white font-bold mb-4 animate-text animate-charcter">
          <span className="inline-block">
            Discover the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 animate-gradient-x">
              Power
            </span>
          </span>
          <span className="inline-block">
            of <span className="text-yellow-300">Tailwind</span>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8">
          Elevate your web design with Tailwind CSS
        </p>
        <a
          href="https://github.com/sandun1994-blip/hero-ui"
          className="bg-white text-purple-700
         hover:bg-purple-700 hover:text-white 
          uppercase text-sm md:text-lg font-semibold transition 
          duration-300 ease-in-out spin-slow animate-bounce inline-block py-2 px-2 md:py-2 md:px-5  rounded-lg"
        >
          Get Code
        </a>
      </div>
    </div>
  );
};

export default Hero;
