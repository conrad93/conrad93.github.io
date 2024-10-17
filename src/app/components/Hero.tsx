const Hero = () => {
  return (
    <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
      <div className="px-4 py-8 md:py-16 lg:py-24 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Hi,</h3>
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          I&apos;m <span className="font-bold">Full Stack Developer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0">
          JavaScript | TypeScript | MongoDB
        </p>
      </div>
    </section>
  );
};

export default Hero;