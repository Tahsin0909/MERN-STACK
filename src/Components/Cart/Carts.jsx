/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Swal from "sweetalert2";



const Carts = () => {
    // const [cart, SetCart] = useState(Data)
    const [cartData, setCartData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadedData = useLoaderData()
    // const handleDelete = (id) => {
    //     SetCart(remaining)
    // }
    console.log(loadedData);
    const UId = useParams()
    console.log(UId.id);
    useEffect(() => {
        fetch(`https://mern-stack-server-f016uivpb-tahsins-projects-38f8b810.vercel.app/myCart/${UId.id}`)
            .then(res => res.json())
            .then(data => {
                setCartData(data)
                setLoading(false)
            })

    }, [UId.id])
    const handleRemove = id => {
        fetch(`https://mern-stack-server-f016uivpb-tahsins-projects-38f8b810.vercel.app/myCart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(NewData => {
                console.log(NewData)
                if (NewData.acknowledged) {
                    console.log(NewData)
                    Swal.fire({
                        title: 'Success',
                        text: 'Product Remove Successfully',
                        icon: 'success',
                        confirmButtonText: 'DONE'
                    })
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Some Error Occurred',
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    })
                }

                const remaining = cartData.filter(prod => prod._id !== id)
                setCartData(remaining)

            })
    }
    console.log(cartData.length);

    return (
        <div className="py-10 flex justify-center items-centers">
            <div className={`${cartData.length === 0 ? 'flex justify-center items-centers' : 'grid grid-cols-1 lg:grid-cols-2'}`}>
                {
                    loading ? <span className="loading loading-bars loading-lg py-40 text-blue-900"></span> : (cartData.length == 0) ? <p className="text-2xl py-40 text-center font-bold text-blue-900">Your Cart Is Empty</p> : cartData?.map(data => <div key={data._id} className="flex justify-between border p-4">
                        <div>
                            <img src={data.CarPhoto} alt="" className="w-80" />
                        </div>
                        <div className="flex flex-col justify-between w-[50%]">
                            <div>
                                <p className="">
                                    <span className="text-xl text-blue-600 font-extrabold">{data.CarBrand}</span> <span className="text-xl text-blue-600 font-extrabold">{data.model}</span>
                                </p>
                                <Rating className="py-1 " name="half-rating-read" defaultValue={parseInt(data.CarRating)} precision={0.5} readOnly />
                                <p>{data?.price}</p>
                                <p className="text-lg font-bold">Price: <span className="text-blue-600">{data.CarPrice}</span></p>
                            </div>
                            <div className="flex  gap-4 items-center">
                                <Link to={`/product/${data.CarId}`}><button className="p-2 border text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-900">Details</button></Link>
                                <button onClick={() => handleRemove(data._id)} className="p-2 border text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-900">Remove</button>
                            </div>
                        </div>

                    </div>)


                }
            </div>
            
        </div >
    );
};

export default Carts;