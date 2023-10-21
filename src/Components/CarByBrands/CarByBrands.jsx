import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const CarByBrands = () => {
    const Brand = useParams()
    // console.log(Brand.brand)

    const [allBrandCar, setallBrandCar] = useState([])
    const [BrandCar, setBrandCar] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setallBrandCar(data))
    }, [])
    useEffect(() => {
        const BrandData = allBrandCar.filter(data => data.brand.toLowerCase() == Brand.brand)
        setBrandCar(BrandData)
        if(BrandCar.length >0){
            setLoading(false)
        }
    }, [Brand.brand, allBrandCar,BrandCar.length])
    return (
        <div className="py-10">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                               loading ? <span className="loading loading-bars loading-lg py-40 text-blue-900"></span> : (BrandCar.length == 0) ? <p className="text-2xl py-40 text-center font-bold text-blue-900">Your Cart Is Empty</p>: BrandCar.map(data => <div key={data._id} >
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
                                            <Rating className="py-1" name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
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