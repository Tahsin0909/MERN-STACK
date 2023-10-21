
const News = () => {
    return (
        <div className="flex justify-center items-center">
            <div>
                <p className="text-center text-2xl font-bold">Popular News</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                    <div className="card w-96 bg-gray-100 transition ease-in-out delay-100  hover:scale-110  duration-300 hover:underline shadow-xl">
                        <figure><img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/163061/tata-safari-right-front-three-quarter0.jpeg?isig=0&q=80" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            2023 Tata Safari on-road prices in top 10 cities in India
                                <div className="badge badge-error">Hot</div>
                            </h2>
                            <div className="card-actions flex justify-between">
                                <div className="">By Titas Das</div>
                                <div className="">20 Hours ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-gray-100 transition ease-in-out delay-100  hover:scale-110  duration-300 hover:underline shadow-xl">
                        <figure><img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/163009/maruti-suzuki-jimny-left-front-three-quarter0.jpeg?isig=0&q=80" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Maruti Jimny 5-door attracts discounts of up to Rs. 1.32 lakh in October 2023
                                <div className="badge badge-error">New</div>
                            </h2>
                            <div className="card-actions flex justify-between">
                                <div className="">By Moeen Ali</div>
                                <div className="">21 Hours ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-gray-100 transition ease-in-out delay-100  hover:scale-110  duration-300 hover:underline shadow-xl">
                        <figure><img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/162995/maruti-suzuki-celerio-left-front-three-quarter0.jpeg?isig=0&q=80" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Maruti Suzuki Celerio achieves 7 lakh unit sales milestone
                            </h2>
                            <div className="card-actions flex justify-between">
                                <div className="">By Partho</div>
                                <div className="">10 Hours ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-gray-100 transition ease-in-out delay-100  hover:scale-110  duration-300 hover:underline shadow-xl">
                        <figure><img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/162911/front-view0.jpeg?isig=0&q=80" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Audi India retails 5,530 units in the first nine months of 2023
                                <div className="badge badge-error">Hot</div>
                            </h2>
                            <div className="card-actions flex justify-between">
                                <div className="">By Sazid</div>
                                <div className="">23 Hours ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-gray-100 transition ease-in-out delay-100  hover:scale-110  duration-300 hover:underline shadow-xl">
                        <figure><img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/162839/bmw-7-series-left-front-three-quarter1.jpeg?isig=0&wm=1&q=80" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            New BMW 7 Series 740d M Sport launched; priced from Rs. 1.81 crore
                            </h2>
                            <div className="card-actions flex justify-between">
                                <div className="">By Tahsin</div>
                                <div className="">1 Day ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;