/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";


const Car = () => {
    const CarData = useLoaderData()
    console.log(CarData)
    const { brand, model, price, description, seatingCapacity, mileage, acceleration, engine, transmission, fueltype, technology_1, technology_2, photo_url } = CarData
    return (
        <div className="py-20 lg:px-0 md:px-8 flex justify-center items-center">
            <div>
                <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row justify-center items-center">
                    <img className="rounded-lg w-[250px] md:w-[700px]" src={photo_url} alt="" />
                    <div className=" px-2 flex flex-col gap-4" >
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="flex  gap-2">
                                    <h1 className="text-xl font-extrabold text-blue-600">{brand}</h1>
                                    <p className="text-xl font-extrabold text-blue-600">{model}</p>
                                </div>
                                <p>Starting At: <span className="font-bold">{price}</span></p>
                            </div>
                            <div>
                                <div className="border-blue-600 rounded-md border-2 p-2 hover:bg-blue-900 hover:text-white">
                                    <button className="font-bold">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            {description}
                        </div>
                    </div>
                </div>
                {/* MAin Div */}
                <div className="flex justify-center items-center">
                    {/* PArent Div */}
                    <div className="py-8  lg:flex grid grid-cols-1 md:grid-cols-3  lg:gap-0 gap-4">
                        {/* Child DIv */}
                        <div className="w-fit lg:border-r px-3" >
                            <div className="flex  items-center gap-2 border-b" >
                                <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/5557/5557384.png" alt="" />
                                <p className="text-2xl" >Engine</p>
                            </div>
                            <p className="text-center text-2xl">{engine}</p>
                        </div>
                        <div className="w-fit lg:border-r px-3" >
                            <div className="flex  items-center gap-2 border-b" >
                                <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/32/32443.png" alt="" />
                                <p className="text-2xl" >Mileage</p>
                            </div>
                            <p className="text-center text-2xl">{mileage}</p>
                        </div>
                        <div className="w-fit lg:border-r px-3" >
                            <div className="flex  items-center gap-2 border-b" >
                                <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/1023/1023409.png" alt="" />
                                <p className="text-2xl" >Seat Capacity</p>
                            </div>
                            <p className="text-center text-2xl">{seatingCapacity}</p>
                        </div>
                        <div className="w-fit lg:border-r px-3" >
                            <div className="flex  items-center gap-2 border-b" >
                                <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/7829/7829424.png" alt="" />
                                <p className="text-2xl" >Acceleration</p>
                            </div>
                            <p className="text-center text-2xl">{acceleration}</p>
                        </div>
                        <div className="w-fit lg:border-r px-3" >
                            <div className="flex  items-center gap-2 border-b" >
                                <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/3825/3825832.png" alt="" />
                                <p className="text-2xl" >Transmission</p>
                            </div>
                            <p className="text-center text-2xl">{transmission}</p>
                        </div>
                        <div className="w-fit  px-3" >
                            <div className="flex  items-center gap-2 border-b" >
                                <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/481/481233.png" alt="" />
                                <p className="text-2xl" >Fuel Type</p>
                            </div>
                            <p className="text-center text-2xl">{fueltype}"</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center" >
                    <div className="">
                        <div className="flex justify-center items-center border-b p-2 ">
                            <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/9760/9760149.png" alt="" />
                            <h1 className="text-2xl">Technology</h1>
                        </div>
                        <div className="flex md:flex-row flex-col">
                            <p className="text-lg md:text-3xl pr-10 pt-4 justify-start w-60">{technology_1}</p>
                            <p className="text-lg md:text-3xl md:pl-10 pt-4 justify-end w-52 md:border-l">{technology_2}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;