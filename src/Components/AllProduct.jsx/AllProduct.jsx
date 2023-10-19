import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const AllProduct = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
                setLoading(false)
            })

    }, [loading])
    return (
        <div className="bg-blue-100 py-10">
            <div>
                <p className="text-center text-2xl font-bold mb-8">Total Car: {products.length} </p>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        products.map(data => <div key={data._id} >
                            <div className=" rounded-lg overflow-hidden w-[300px] lg:w-[400px] shadow-lg  transform hover:scale-105 transition-transform duration-300">
                                <div className="">
                                    {
                                        loading ? <img src="https://via.placeholder.com/200" alt="Placeholder" className="h-full w-full" />
                                            : <img src={data.photo_url} alt="Placeholder" className="w-full" />
                                    }

                                </div>

                                <div className="bg-white" >
                                    <div className=" flex flex-col justify-center items-center py-4">
                                        <div className="flex items-center gap-3 border-blue-900 rounded-sm border-2  md:ml-4 w-fit px-3 py-1">
                                            <h2 className="md:text-xl text-lg font-extrabold text-blue-900 ">Model: {data.model}</h2>
                                        </div>
                                        <div className="flex justify-center p-2">
                                            <div className="p-1 border-r-2 border-blue-900">
                                                <p className="text-lg font-bold border-b-2 border-blue-900">HorsePower</p>
                                                <p>{data.horsePower}</p>
                                            </div>
                                            <div className="p-1 border-b-2 border-blue-900">
                                                <p className="text-lg font-bold">Torque</p>
                                                <p>{data.torque}</p>
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
    );
};

export default AllProduct;