/* eslint-disable react/no-unescaped-entities */


const AboutUs = () => {
    return (
        <div className="hero min-h-screen flex justify-center items-center ">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://media.istockphoto.com/id/964967130/vector/vector-high-speed-motion-car-night-city-drive-abstract-wire-low-poy-car-illustration-on-dark.jpg?s=612x612&w=0&k=20&c=cnmq-G3aNyD_EWyxFyS0yi-3jnbGE7idU1y6mQ9kveU=)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content py-10 px-4 ">
                    <div >
                        <div>
                            <img className="w-20" src="" alt="" />
                        </div>
                        <div className="">
                            <p className="text-2xl font-bold mb-4">About US</p>
                            <p className="text-xl">Part of Signature Drive, Our mission is to bring delight in car buying, we offer a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-4 mt-8">Our Group's Scale</h1>
                            <div className="flex flex-col  md:flex-row items-center gap-4 md:gap-20">
                                <div className="flex  items-center gap-8 border p-4">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/11907/11907221.png" alt="" />
                                    <div>
                                        <p className="text-3xl">100k</p>
                                        <p>Monthly Visitors</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 border px-10 py-4 md:px-4 md:py-4">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/10590/10590552.png" alt="" />
                                    <div>
                                        <p className="text-3xl">100+</p>
                                        <p>Car Listed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-4 mt-8">Our Core Values</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 ">
                                <div className="flex border p-4 items-center gap-4">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/3062/3062103.png" alt="" />
                                    <div>
                                        <p className="text-lg">RESPECT</p>
                                        <p>We respect our colleagues, customers and partners</p>
                                    </div>
                                </div>
                                <div className="flex border p-4 items-center gap-4">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/763/763965.png" alt="" />
                                    <div>
                                        <p className="text-lg">AGILITY</p>
                                        <p>We are extremely open-minded and adaptable</p>
                                    </div>
                                </div>
                                <div className="flex border p-4 items-center gap-4">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/1175/1175566.png" alt="" />
                                    <div>
                                        <p className="text-lg">OWNERSHIP</p>
                                        <p>We take ownership of results</p>
                                    </div>
                                </div>
                                <div className="flex border p-4 items-center gap-4">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9281/9281319.png" alt="" />
                                    <div>
                                        <p className="text-lg">WE BEFORE I</p>
                                        <p>We always put our company ahead of ourselves</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
