

const Achievement = () => {
    return (
        <div className="">
            <div className="flex justify-center items-center">
                <div className="hero min-h-[90vh]" style={{ backgroundImage: 'url(https://mcdn.wallpapersafari.com/medium/11/20/0pbBHK.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center flex flex-col text-neutral-content">
                        <div className="max-w-md">
                            <p className="mb-5 md:text-4xl text-2xl font-bold">Large Enough To Serve You, Small Enough To Know You</p>
                            <p className="md:text-xl pb-2">Here, we take pride in personalized service that makes all the difference</p>
                            <button className="btn glass text-white hover:text-black">Book Now</button>
                        </div>
                        <div className="flex flex-col md:flex-row mt-10 lg:mt-28 gap-10">
                            <div className="flex items-center border p-4 glass">
                                <img className="w-16" src="https://cdn-icons-png.flaticon.com/128/4021/4021708.png" alt="" />
                                <div className="text-start p-1">
                                    <p className="text-3xl">20%</p>
                                    <p>Average Saving</p>
                                </div>
                            </div>
                            <div className="flex items-center border p-4 glass">
                                <img className="w-16 outline-white" src="https://cdn-icons-png.flaticon.com/128/4682/4682932.png" alt="" />
                                <div className="text-start p-1">
                                    <p className="text-3xl">100+</p>
                                    <p>Car Listed With Us</p>
                                </div>
                            </div>
                            <div className="flex items-center border p-4 glass">
                                <img className="w-16" src="https://cdn-icons-png.flaticon.com/128/11161/11161242.png" alt="" />
                                <div className="text-start p-1">
                                    <p className="text-3xl">4.8/5</p>
                                    <p>Average Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;