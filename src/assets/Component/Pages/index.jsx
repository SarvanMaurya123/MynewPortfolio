import { MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa'; // React
import { SiExpress } from 'react-icons/si'; // Express
import { SiNodedotjs } from 'react-icons/si'; // Node.js
import { SiTailwindcss } from 'react-icons/si'; // Tailwind CSS
import { SiMongodb } from 'react-icons/si'; // MongoDB
import About from "./About";

const Home = () => {
    return (<>
        <main className="ml-6 mr-6 md:ml-24 md:mr-24">
            <section className="py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-[60%] mb-8 md:mb-0">
                        <h1 className="text-2xl md:text-3xl dark:text-white">
                            Hi, I&apos;m Sarvan Maurya 👋
                        </h1>
                        <p className="dark:text-white mt-4 text-justify mr-5">
                            I’m a full stack developer specializing in ( <b>React.js and Node.js.</b> ) With 1 year of web development experience, I focus on building and occasionally designing user-friendly digital solutions that deliver exceptional performance and user experiences.
                        </p>

                        <div className="flex items-center gap-2 mt-12 dark:text-white">
                            <MdLocationOn className="text-red-500" />
                            <p>Navi Mumbai Panvel Maharashtra India</p>
                        </div>
                        <div className="flex mt-6 gap-4 text-white">
                            <a href="https://www.linkedin.com/in/sarvan-maurya-588877263" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-3xl text-black dark:text-white hover:text-gray-300 transition duration-300 " />
                            </a>
                            <div>
                                <a href="https://github.com/SarvanMaurya123" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-3xl dark:text-white text-black hover:text-gray-300 transition duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ boxShadow: 'rgb(230, 255, 235) 14px 14px 0px' }} className="w-[300px]">
                        <img src="./myimage.jpeg" alt="myphoto" className="w-full border-[7px]   border-white" />
                    </div>
                </div>
            </section>
            <section className="py-6">
                <About />
            </section>
            <section className="py-6">
                <h2 className="py-6 px-6 text-center dark:text-white text-2xl bg-gray-100 dark:bg-gray-800">
                    Skills
                </h2>
                <div className="flex justify-center gap-6 mt-4">
                    <div className="flex flex-col items-center">
                        <FaReact className="text-4xl text-blue-600 md:size-28" />
                        <span className="mt-2 dark:text-white">React.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiExpress className="text-4xl text-gray-600 md:size-28" />
                        <span className="mt-2 dark:text-white">Express.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiNodedotjs className="text-4xl text-green-600 md:size-28" />
                        <span className="mt-2 dark:text-white">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiTailwindcss className="text-4xl text-cyan-400 md:size-28" />
                        <span className="mt-2 dark:text-white">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMongodb className="text-4xl text-green-700 md:size-28" />
                        <span className="mt-2 dark:text-white">MongoDB</span>
                    </div>
                </div>
            </section>
        </main >
    </>)
}
export default Home;