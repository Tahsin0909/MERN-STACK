/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = ({ Data, setCartData }) => {
    const handleRemove = id => {
        fetch(`http://localhost:5000/myCart/${id}`, {
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

                const remaining = Data.filter(prod => prod._id !== id)
                setCartData(remaining)

            })
    }
    console.log(Data)
    return (
        <div className="flex justify-between  border p-4">
            <div>
                <img src={Data.CarPhoto} alt="" className="w-80" />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <p className="">
                        <span className="text-xl text-blue-600 font-extrabold">{Data.CarBrand}</span> <span className="text-xl text-blue-600 font-extrabold">{Data.model}</span>
                    </p>
                    <Rating className="py-1 " name="half-rating-read" defaultValue={parseInt(Data.CarRating)} precision={0.5} readOnly />
                    <p>{Data?.price}</p>
                    <p className="text-lg font-bold">Price: <span className="text-blue-600">$4000</span></p>
                </div>
                <div className="flex  gap-4 items-center">
                    <Link to={`/product/${Data.CarId}`}><button className="p-2 border text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-900">Details</button></Link>
                    <button onClick={() => handleRemove(Data._id)} className="p-2 border text-white bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-900">Remove</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;