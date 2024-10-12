const Projects = () => {
    return (<>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-md text-center border-b-2 font-semibold">Cosmetica</h3>
                <p className="text-gray-500 mb-4">Cosmetics business</p>
                <p className="text-gray-500 mb-4">Type</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">$240,399</span>
                    <span>Total Amount</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-md text-center border-b-2 font-semibold">Print House</h3>
                <p className="text-gray-500 mb-4">Printing business</p>
                <p className="text-gray-500 mb-4">Type</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">$240,399</span>
                    <span>Total Amount</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-md text-center border-b-2 font-semibold">Agriculture</h3>
                <p className="text-gray-500 mb-4">Agriculture business</p>
                <p className="text-gray-500 mb-4">Type</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">$240,399</span>
                    <span>Total Amount</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-md text-center border-b-2 font-semibold">Crypto</h3>
                <p className="text-gray-500 mb-4">Money business</p>
                <p className="text-gray-500 mb-4">Type</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">$240,399</span>
                    <span>Total Amount</span>
                </div>
            </div>
        </div>
    </>)
}
export default Projects;