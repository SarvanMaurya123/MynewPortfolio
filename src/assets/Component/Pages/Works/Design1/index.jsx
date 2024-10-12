import { FaStar, FaStarHalfAlt } from "react-icons/fa";  // Importing star icons
const Design1 = () => {
    return (<>
        <section className="mx-auto px-6 lg:px-20 my-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Text and Form Section */}
                <div className="w-full lg:w-[50%]">
                    <h1 className="text-3xl md:text-4xl dark:text-white mb-4">
                        Take ideas from<br /> better to best
                    </h1>
                    <p className="dark:text-white mb-4">
                        Miro is your team&apos;s visual platform to <br />connect, collaborate, and create — together.
                    </p>

                    {/* Form Section */}
                    <form className="mb-3">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="px-4 py-2 w-full md:w-auto rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white  mb-3  mt-3 pr-40"
                        /><br />
                        <button
                            type="submit"
                            className="w-full md:w-auto border-[1px] px-[113px] py-2 rounded-md hover:bg-gray-100 transition duration-300 border-gray-300 text-black dark:hover:text-black dark:text-white"
                        >
                            Submit Email →
                        </button>
                    </form>

                    {/* Subtext */}
                    <p className="mt-2 dark:text-white text-black text-sm">
                        Collaborate with your team within minutes
                    </p>

                    {/* Review Section */}
                    <div className="flex items-center gap-4 p-4 mt-4">
                        <div className="flex items-center">
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStarHalfAlt className="text-yellow-400 text-lg" />
                        </div>
                        <p className="text-gray-600 text-sm dark:text-white">
                            Based on 5149+ reviews:
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[50%]">
                    <img src="../div.png" alt="image" className="w-full h-auto" />
                </div>
            </div>
        </section>

        <section className="mx-auto px-6 lg:px-20 my-10">
            <p className="text-center dark:text-white text-black text-2xl mt-5">
                Trusted by 45M+ users
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full mt-10 items-center justify-items-center dark:text-white">
                <div>
                    <img src="../1.png" alt="Trusted by 1" />
                </div>
                <div>
                    <img src="../2.png" alt="Trusted by 2" />
                </div>
                <div>
                    <img src="../4.png" alt="Trusted by 3" />
                </div>
                <div>
                    <img src="../5.png" alt="Trusted by 4" />
                </div>
                <div>
                    <img src="../3.png" alt="Trusted by 5" />
                </div>
            </div>
        </section>
        <section className="mx-auto px-6 lg:px-20 my-10">
            <p className="text-center text-4xl dark:text-white text-black">
                Collaborate without
                constraints
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-10 items-center justify-items-center dark:text-white">
                <div className="">
                    <p className="text-2xl font-bold dark:text-white text-black text-justify mb-5">Free forever</p>
                    <p className="text-justify dark:text-white">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <span className="text-blue-500">pricing plans</span> for more features.</p>
                </div>
                <div>
                    <p className="text-2xl font-bold dark:text-white text-black text-justify mb-5">Easy integrations</p>
                    <p className="text-justify dark:text-white">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <span className="text-blue-500"> Marketplace .</span></p>
                </div>
                <div>
                    <p className="text-2xl font-bold dark:text-white text-black text-justify mb-5">Security first</p>
                    <p className="text-justify dark:text-white">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our <span className="text-blue-500">Trust Center.</span></p>
                </div>
            </div>
            <div className="text-center mt-20">
                <button className="border-[1px] px-[60px] py-2 rounded-md hover:bg-gray-100 transition duration-300 border-gray-300 text-black dark:hover:text-black dark:text-white">Sign up free →</button>
            </div>
        </section>
        <section className="mx-auto px-6 lg:px-20 my-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="w-full lg:w-[50%]">
                    <h3 className="text-4xl dark:text-white">Work together, <br />wherever you work</h3>
                    <p className="dark:text-white">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <button className=" py-2 text-blue-500">Learn more →</button>
                </div>
                <div>
                    <img src="../sec.png" alt="Trusted by 5" />
                </div>
            </div>
        </section>
        <section className="mx-auto px-6 lg:px-20 my-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="w-full lg:w-[50%]">

                    <img src="../sec2.png" alt="Trusted by 5" />
                </div>
                <div>
                    <h3 className="text-4xl dark:text-white">Work together, <br />wherever you work</h3>
                    <p className="dark:text-white">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <button className=" py-2 text-blue-500">Learn more →</button>
                </div>
            </div>
        </section>
        <section className="mx-auto px-6 lg:px-20 my-10">
            <div>
                <img src="../section.png" alt="Trusted by 5" />
            </div>
        </section>
    </>)
}
export default Design1;