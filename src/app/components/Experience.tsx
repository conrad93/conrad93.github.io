const Experience = () => {
    return (
        <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
            <div className="px-4 py-8 md:py-16 lg:py-24 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
                    Experience
                </h2>
                <ol
                    className="list-decimal list-inside space-y-8 max-w-2xl mx-auto md:mx-0 font-semibold"
                    reversed={true}
                    start={3}
                >
                    <li className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Senior Developer, SynGrow Consulting Services Pvt. Ltd.
                        <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Sep 2024 - Present
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Worked on a healthcare web application built using Angular for the front-end, Node.js and Nest.js for the back-end, and MongoDB for the database.
                            </li>
                        </ul>
                    </li>
                    <li className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Senior Software Developer, Aartas Care Pvt. Ltd.
                        <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Apr 2024 - Aug 2024
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Worked on REST APIs for a healthcare web application built using Node.js, MongoDB, and MySQL for the database, and also implemented Socket.io and WebRTC for real-time communication.
                            </li>
                        </ul>
                    </li>
                    <li className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Software Engineer, Vernost Marketing Technology Solutions Pvt. Ltd.
                        <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Oct 2020 - Apr 2024
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Worked on the admin panel for a travel domain SaaS app built using Angular, Node.js, EJS, jQuery, MySQL, and MongoDB.
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Experience;
