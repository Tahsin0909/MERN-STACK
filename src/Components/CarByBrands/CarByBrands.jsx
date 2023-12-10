/* eslint-disable react/no-unescaped-entities */
import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const CarByBrands = () => {
    const Brand = useParams()
    // console.log(Brand.brand)

    // const [allBrandCar, setallBrandCar] = useState([])
    const [BrandCar, setBrandCar] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        // fetch('')
        // fetch(`http://localhost:5000/${Brand.brand}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBrandCar(data)
        //         setLoading(false)
        //     })
        axios.get(`http://localhost:5000/${Brand.brand}`)
        .then(res => {
            setBrandCar(res.data)
            setLoading(false)
        })
    }, [Brand.brand])
    // useEffect(() => {
    //     const BrandData = allBrandCar.filter(data => data.brand.toLowerCase() == Brand.brand)
    //     setBrandCar(BrandData)
    //     if (BrandCar.length >= 0) {
    //         setLoading(false)
    //     }
    // }, [Brand.brand, allBrandCar, BrandCar.length])
    const NoCAr = () => {
        return (
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.wallpapersafari.com/68/99/izwPvs.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Notice:</h1>
                        <p className="text-lg">At Signature, we pride ourselves on offering a wide range of high-quality vehicles to meet our customers' needs. However, we want to be transparent about our current inventory. As of now, we do not carry [Car Brand Name] vehicles in our showroom.</p>
                        <p className="text-lg">
                            While we don't have Popular vehicles available, we encourage you to explore the exceptional selection of other popular brands that we do offer. Our inventory includes a diverse assortment of cars, SUVs, and trucks to suit various preferences and requirements.
                        </p>
                        <Link to={'/'}><button className="p-2 border text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-900">Go to Home</button></Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex justify-center items-center">
            <div className={`${BrandCar.length === 0 ? '' : 'py-10'}`}>
                <div className={`${BrandCar.length === 0 ? '' : 'flex justify-center items-center'}`}>
                    {/* <div className="flex justify-center items-center"> */}
                    <div className={`${BrandCar.length === 0 ? '' : 'flex justify-center items-center'}`}>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
                        <div className={`${BrandCar.length === 0 ? '' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}`}>
                            {

                                // loading ? <span className="loading loading-bars loading-lg py-40 text-blue-900"></span> : (cartData.length == 0) ? <p className="text-2xl py-40 text-center font-bold text-blue-900">Your Cart Is Empty</p> : cartData?.map(data => <div key={data._id} className="flex justify-between border p-4">


                                loading ? <span className="loading loading-bars loading-lg py-40 text-blue-900"></span> : (BrandCar.length == 0) ? NoCAr() : BrandCar.map(data => <div key={data._id} >
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
        </div>
    );
};

export default CarByBrands;