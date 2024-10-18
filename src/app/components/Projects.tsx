const Projects = () => {
    return (
        <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
            <div className="px-4 py-8 md:py-16 lg:py-24 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
                    Projects
                </h2>
                <ol className="list-decimal list-inside space-y-8 max-w-2xl mx-auto md:mx-0 font-semibold">
                    <li className="text-xl md:text-2xl text-gray-700 font-semibold">
                        iThryve
                        <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                A healthcare web application aimed at streamlining patient care and data management for various healthcare processes.
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Key Features:
                                <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                                    <li className="md:text-lg text-gray-500">
                                        Workflows creation and management.
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        Client/Patient management.
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        Reporting system.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Technologies Used: Angular, Node.js, Express.js, Nest.js, MongoDB, AWS, ElasticSearch, GitHub
                            </li>
                        </ul>
                    </li>
                    <li className="text-xl md:text-2xl text-gray-700 font-semibold">
                        CliniSquare
                        <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                A comprehensive web application designed to streamline clinic management and enhance doctor functionality.
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Key Features:
                                <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                                    <li className="md:text-lg text-gray-500">
                                        Video consultations.
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        E-pad (electronic prescriptions).
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        Appointment booking.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Technologies Used: Node.js, React, MySQL, MongoDB, WebRTC, Socket.io
                            </li>
                        </ul>
                    </li>
                    <li className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Blue Sky
                        <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                A SaaS platform to manage multiple travel websites and provide various services.
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Key Features:
                                <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                                    <li className="md:text-lg text-gray-500">
                                        Site management.
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        Managing suppliers for flights, hotels, etc.
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        Managing branch, agencies, etc.
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        Site admin panel.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Technologies Used: Node.js, React, Angular, MongoDB
                            </li>
                        </ul>
                    </li>
                    <li className="text-xl md:text-2xl text-gray-700 font-semibold">
                        Elevate Trips
                        <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                A travel website offering booking services and supplier management.
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Key Features:
                                <ul className="list-disc list-inside ml-5 space-y-2 mt-2">
                                    <li className="md:text-lg text-gray-500">
                                        Booking services.
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        Managing suppliers for flights, hotels, etc.
                                    </li>
                                    <li className="md:text-lg text-gray-500">
                                        Site admin panel.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-lg md:text-xl text-gray-600 font-medium">
                                Technologies Used: Node.js, MySql, EJS
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Projects;