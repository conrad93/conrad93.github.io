const About = () => {
    return (
        <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
            <div className="px-4 py-8 md:py-16 lg:py-24 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0 mb-4">
                    I am a Full Stack Developer with a strong foundation in both front-end and back-end technologies. I have over 4 years of experience in web development, specializing in JavaScript and TypeScript. I work extensively with frameworks and libraries such as Node.js, Express.js, and Nest.js for backend development, and Angular and Next.js for building dynamic, responsive front-end applications.
                </p>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0 mb-4">
                    My expertise also extends to database management, where I have hands-on experience with both relational and non-relational databases, including MySQL and MongoDB. I focus on creating scalable, efficient solutions that drive performance and user satisfaction.
                </p>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0">
                    I hold a B.Sc. in Information Technology from Mumbai University, where I developed a solid academic foundation in computer science and software development. I am passionate about leveraging my skills to solve complex problems and contribute to impactful projects.
                </p>
            </div>
        </section>
    );
};

export default About;