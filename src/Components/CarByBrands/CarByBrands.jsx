import { Link, useLoaderData, useParams } from "react-router-dom";


const CarByBrands = () => {
    const Brand = useParams()
    console.log(Brand.brand)
    const Product = useLoaderData()
    console.log(Product)
    const BrandData = Product.filter(data => data.brand.toLowerCase() == Brand.brand)
    console.log(BrandData)
    return (
        <div className="py-10">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            BrandData.map(data => <div key={data._id} >
                                <div className=" rounded-lg overflow-hidden w-[300px] lg:w-[400px] shadow-lg  transform hover:scale-105 transition-transform duration-300">
                                    <div className="">
                                        {
                                         <img src={data.photo_url} alt="Placeholder" className="w-full h-[250px]" />
                                        }

                                    </div>

                                    <div className="bg-white" >
                                        <div className=" flex flex-col justify-center items-center py-4">
                                            <div className="flex items-center gap-3 border-blue-900 rounded-sm border-2  md:ml-4 w-fit px-3 py-1">
                                                <h2 className="md:text-xl text-lg font-extrabold text-blue-900 ">Model: {data.model}</h2>
                                            </div>
                                            <div className="flex justify-center p-2">
                                                <div className="p-1 border-r-2 border-blue-900">
                                                    <p className="text-lg font-bold border-b-2 border-blue-900">Mileage</p>
                                                    <p>{data.mileage}</p>
                                                </div>
                                                <div className="p-1 border-b-2 border-blue-900">
                                                    <p className="text-lg font-bold">Engine</p>
                                                    <p>{data.engine}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p>Starting At: <span className="font-bold" >{data.price}</span></p>
                                        </div>
                                        <div className="flex flex-wrap justify-center items-center gap-2 py-2 px-4">
                                            <Link to={`/product/${data._id}`}><button className="p-2 border text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-900">Discover Now</button></Link>
                                            <button className="p-2 border text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-900">Update</button>
                                            <button className="p-2 border text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-900">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarByBrands;