const PlantCards = () => {
    const plants = [
        { name: 'Calathea ai plant', price: 'Rs. 399/-', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', imgSrc: '../design/dataflower2.png' },
        { name: 'Fiddle Leaf Fig', price: 'Rs. 499/-', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', imgSrc: '../design/dataflower3.png' },
        { name: 'Snake Plant', price: 'Rs. 299/-', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', imgSrc: '../design/dataflower.png' },
        { name: 'Money Tree', price: 'Rs. 599/-', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', imgSrc: '../design/dataflower3.png' },
        { name: 'Money Tree', price: 'Rs. 599/-', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', imgSrc: '../design/dataflower2.png' },
        { name: 'Money Tree', price: 'Rs. 599/-', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', imgSrc: '../design/dataflower.png' },
    ];

    return (<>
        <h2 className="text-center mt-24 text-4xl dark:text-white">Our Top Selling</h2>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                {plants.map((plant, index) => (
                    <div key={index} className="bg-white dark:text-white dark:bg-slate-600 text-black p-6 rounded-[20px] relative border-[1px] shadow-xl">
                        <img src={plant.imgSrc} alt={plant.name} className="mx-auto w-[200px] h-[200px] object-cover mb-4" />
                        <h3 className="text-lg font-semibold text-center">{plant.name}</h3>
                        <p className="text-sm text-center mb-4">{plant.description}</p>
                        <p className="text-lg text-center font-bold">{plant.price}</p>
                        <button
                            type="submit"
                            className="w-auto border-[1px] px-6 md:px-10 mt-6 md:mt-10 py-2 hover:bg-gray-100 transition duration-300 border-gray-300 text-black dark:hover:text-black hover:text-black dark:text-white"
                        >
                            Shop Now →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>);
};

export default PlantCards;
