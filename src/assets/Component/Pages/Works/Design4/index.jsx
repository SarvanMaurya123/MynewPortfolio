import PlantCards from "./Cards";

const Design4 = () => {
    return (
        <>
            <section className="relative">
                <img src="../design/data.jpg" className="w-full object-cover h-[1500px] md:h-auto" />
                <div className="absolute top-16 md:top-32 left-6 right-6 md:left-32 md:right-20">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 w-full flex flex-col justify-center md:justify-around">
                            <h1 className="text-3xl md:text-6xl text-white">Breath Natural</h1>
                            <p className="text-white mt-6 md:mt-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button
                                type="submit"
                                className="w-auto md:w-96 border-[1px] px-6 md:px-10 mt-6 md:mt-0 py-2 hover:bg-gray-100 transition duration-300 border-gray-300 text-white dark:hover:text-black hover:text-black dark:text-white"
                            >
                                Purchase UI Kit →
                            </button>

                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-[20px] md:rounded-[40px] py-8 md:py-16 border-[1px] border-white px-6 md:px-20 shadow-lg text-white mt-12 md:mt-0 md:ml-16 relative">
                            <img src="../design/dataflower.png" className="absolute md:-top-24 md:left-2 w-72 md:w-[500px] left-32 top-2" />
                            <p className="md:mt-24 mt-14 md:mt-32 text-left mb-2 text-sm md:text-base">Trendy House Plant</p>
                            <p className="text-left text-xl md:text-2xl">Calathea plant</p>
                            <button
                                type="submit"
                                className="w-auto border-[1px] px-6 md:px-10 mt-6 md:mt-10 py-2 hover:bg-gray-100 transition duration-300 border-gray-300 text-white dark:hover:text-black hover:text-black dark:text-white"
                            >
                                Shop Now →
                            </button>
                        </div>

                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-[20px] md:rounded-[40px] py-8 md:py-16 border-[1px] border-white px-6 md:px-10 shadow-lg text-white mt-12 md:mt-20 md:ml-0 relative">
                        <div className="flex md:w-1/2 w-full justify-center items-center flex-row-reverse">
                            <div className="absolute right-0">
                                <img src="../design/dataflower2.png" className="md:left-2 w-72 md:w-[500px] left-32 md:top-2 mt-32 md:mt-0" />
                            </div>
                            <div className="">
                                <p className="md:mt-24 mt-0 md:mt-32 t mb-2 text-2xl">For Small Desk Ai Plant</p>
                                <p className="text-sm md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <p className="text-sm md:text-2xl mb-11 mt-1">Rs. 599/-</p>
                                <button
                                    type="submit"
                                    className="w-auto border-[1px] px-6 md:px-10 mb-20 md:mb-0 mt-6 md:mt-10 py-2 hover:bg-gray-100 transition duration-300 border-gray-300 text-white dark:hover:text-black hover:text-black dark:text-white"
                                >
                                    Shop Now →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-[20px] md:rounded-[40px] py-8 md:py-16 border-[1px] border-white px-6 md:px-10 shadow-lg text-white mt-12 md:mt-20 md:ml-0 relative">
                        <div className="flex md:w-1/2 w-full justify-center items-center flex-row-reverse">
                            <div className="absolute right-0">
                                <img src="../design/dataflower3.png" className="md:left-2 w-72 md:w-[500px] left-32 md:top-2 mt-32 md:mt-0" />
                            </div>
                            <div className="">
                                <p className="md:mt-24 mt-0 md:mt-32 t mb-2 text-2xl">For Fresh Decs Ai Plat</p>
                                <p className="text-sm md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <p className="text-sm md:text-2xl mb-11 mt-1">Rs. 579/-</p>
                                <button
                                    type="submit"
                                    className="w-auto border-[1px] px-6 md:px-10 mb-20 md:mb-0 mt-6 md:mt-10 py-2 hover:bg-gray-100 transition duration-300 border-gray-300 text-white dark:hover:text-black hover:text-black dark:text-white"
                                >
                                    Shop Now →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <PlantCards />
            </section>
        </>
    );
};

export default Design4;
