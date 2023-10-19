

const YourCar = () => {
    return (
        <div className="bg-blue-50 md:px-0 px-4">
            <div className="flex flex-col md:flex-row justify-center  items-center py-8 md:py-20">
                <div>
                    <img className="w-96 " src="https://i.ibb.co/LNtg65Q/image-removebg-preview-9.png" alt="" />
                </div>
                <div className="lg:border-l-4 px-8 py-[23px] ">
                    <p className="md:text-4xl text-2xl font-extrabold mb-1 text-blue-900 ">Driving You <br /> to your Next Car</p>
                    <p>We Are Offering <br /> You the Cheapest And Easiest Way To buy A Car On The Planet </p>
                    <button className="border p-2 rounded-lg glass text-blue-900 font-extrabold">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default YourCar;