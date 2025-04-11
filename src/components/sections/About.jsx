import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "HTML & CSS",
        "TailwindCSS",
        "Javascript",
        "ReactJS",
      ];
    
      const backendSkills = ["Python", "Django", "MySQL", "PostgreSQL", "MongoDB",];
    
      return (
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Working as a freelancer has enabled me to become a problem-solver, a people-oriented person, an excellent communicator, where I build solutions based on the nature of the problem and my target users.
                        <br>
                        </br>
                        <br>
                        </br>
                        I've built and integrated secure, reliable web applications using the Django web framework and REST & RESTful API structures.
                        <br>
                        </br>
                        I've also designed and implemented a CI/CD system, optimized code for performance and reliability, and created microservices databases for scalability.
                        <br>
                        </br>
                        <br>
                        </br>
                        I'm a lifelong learner, hard worker and self-motivated team player with strong analytical and strategic thinking skills, I always want to maintain a high level of professionalism while providing consistent and quality service.
                        <br>
                        </br>
                        I'm a fast learner who welcomes the challenge to learn and develop new skills.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> HND. in Civil Engineering </strong> - The Polytechnic, Ibadan
                            (2019-2022)
                        </li>
                        <br>
                        </br>
                        <li>
                            <strong>SkillUP Full Stack Development for Beginners</strong> - Simplilearn Academy
                            (2022)
                        </li>
                        <br>
                        </br>
                        <li>
                            <strong> Certification in Software Engineering </strong> - ALX Africa
                            (2023)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Web Development, Cloud
                            Computing...
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">
                                {" "}
                                Python Backend Developer at Microcee Company (7/2024 - 11/2024){" "}
                            </h4>
                            <p>
                                Developed and integrated a secure, robust, and dependable web application using the Django web framework and REST API structures.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">
                                {" "}
                                Intern at ChiExclusive Innovations (3/2024 - 6/2024){" "}
                            </h4>
                            <p>
                                Assisted in building a business website with front-end components using HTML & CSS, Javascript and ReactJS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
        </section>
    );
};