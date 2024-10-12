const About = () => {
    return (<>
        <div className="my-2 mx-2">
            <h2 className="py-6 px-6 text-center dark:text-white text-2xl bg-gray-100 dark:bg-gray-800">
                About Me
            </h2>
            <div className="my-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                    <img src="./latter1.jpg" alt="myphoto" className="w-full border-[7px] border-white" />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl pb-6 dark:text-white">Curious about me? Here you have it:</h2>
                    <p className="pb-4 dark:text-white text-justify">
                        I&apos;m a passionate, self-proclaime
                        d developer who specializes in full stack development (React.js & Node.js).
                        I am very enthusiastic about bringing the technical and visual aspects of digital products to life.
                        User experience, pixel-perfect design, and writing clear, readable, highly performant code matters to me.
                    </p>
                    <p className="pb-4 dark:text-white text-justify">I began my journey as a web developer in my second year college, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Currently, as a third-year student, I’m focusing on developing my skills and working on projects that allow me to apply what I’ve learned.</p>
                    <p className="pb-4 dark:text-white text-justify">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                    <p className="pb-4 dark:text-white text-justify">When I&apos;m not in full-on developer mode, you can find me exploring new technologies, learning, and enjoying some free time. You can follow me on linkedin, where I share tech-related bites and build in public, or you can find me on GitHub.</p>
                    <p className="pb-4 dark:text-white"><b>Finally, some quick bits about me:</b></p>
                    <p className="pb-2 dark:text-white">BSC IT (Information Technology).</p>
                    <p className="pb-2 dark:text-white text-justify">I am dedication to learning and improving your skills while still studying.</p>
                    <p className="pb-2 dark:text-white">sarvanmaurya037@gmail.com</p>
                </div>
            </div>
        </div>
    </>)
}
export default About;