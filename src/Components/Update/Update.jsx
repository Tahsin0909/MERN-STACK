import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
    const PrevData = useLoaderData()
    console.log(PrevData)
    const handleUpdateProduct = event => {
        event.preventDefault()
        const form = event.target
        const brand = form.brand.value
        const model = form.model.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value
        const seatingCapacity = form.seatingCapacity.value
        const mileage = form.mileage.value
        const acceleration = form.acceleration.value
        const engine = form.engine.value
        const transmission = form.transmission.value
        const fueltype = form.fueltype.value
        const technology_1 = form.technology_1.value
        const technology_2 = form.technology_2.value
        const photo_url = form.photo_url.value
        const UpdatedProduct = {
            brand, model, price,rating, description, seatingCapacity, mileage, acceleration, engine, transmission, fueltype, technology_1, technology_2, photo_url
        }
        console.log(UpdatedProduct)
        fetch(`http://localhost:5000/product/${PrevData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(NewData => {
                console.log(NewData)
                if (NewData.acknowledged) {
                    console.log(NewData)
                    Swal.fire({
                        title: 'Success',
                        text: 'Your Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'DONE'
                    })
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    })
                }


            })
    }
    return (
        <div className="my-10 flex flex-col justify-center items-center" >
            <div className=" flex flex-col justify-center items-center mb-4" >
                <h1 className="text-2xl font-bold text-blue-900" > ADD PRODUCT</h1>
                <p className="text-sm text-gray-400" >Before Add a New Product Please Remove The Value</p>
            </div>
            <form onSubmit={event => handleUpdateProduct(event)} >
                <div className="flex flex-col justify-center items-center gap-6 border w-fit p-4 md:p-10 rounded-xl  shadow-lg" >
                    {/* Brand And MOdel */}
                    <div className="flex justify-center items-center flex-col md:flex-row gap-4" >
                        <div className="">
                            <select name="brand" className="select select-primary w-64 ">
                                <option disabled defaultValue={PrevData.brand}>{PrevData ? `${PrevData.brand}` : 'Brand'}</option>
                                <option>honda</option>
                                <option>toyota</option>
                                <option>audi</option>
                                <option>nissan</option>
                                <option>mercedes-Benz</option>
                                <option>bMW</option>
                                <option>chevrolet</option>
                            </select>
                        </div>
                        <div className="relative h-11 w-64">
                            <input name="model" defaultValue={PrevData.model}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[18px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Model
                            </label>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="flex flex-col md:flex-row gap-4 ">
                        <div className="relative h-11 w-64 md:w-[560px]">
                            <input name="description" defaultValue={PrevData.description}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Description
                            </label>
                        </div>
                    </div>
                    {/* Price And Rating */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative h-11 w-64 ">
                            <input name='price' defaultValue={PrevData.price}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label
                                className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Price
                            </label>
                        </div>
                        <div className="relative h-11 w-64 ">
                            <input name="rating" defaultValue={PrevData.rating}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Rating
                            </label>
                        </div>
                    </div>
                    {/* HorsePOwer And Torque */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative h-11 w-64">
                            <input name='seatingCapacity' defaultValue={PrevData.seatingCapacity}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label
                                className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Seating Capacity
                            </label>
                        </div>
                        <div className="relative h-11 w-64 ">
                            <input name="mileage" defaultValue={PrevData.mileage}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Mileage
                            </label>
                        </div>
                    </div>
                    {/* Acceleration And EngineType */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative h-11 w-64 ">
                            <input name='acceleration' defaultValue={PrevData.acceleration}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label
                                className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Acceleration
                            </label>
                        </div>
                        <div className="relative h-11 w-64 ">
                            <input name="engine" defaultValue={PrevData.engine}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Engine
                            </label>
                        </div>
                    </div>
                    {/* Transmission And Front-Break */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative h-11 w-64 ">
                            <input name='transmission' defaultValue={PrevData.transmission}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label
                                className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Transmission
                            </label>
                        </div>
                        <div className="relative h-11 w-64 ">
                            <input name="fueltype" defaultValue={PrevData.fueltype}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Fuel Type
                            </label>
                        </div>
                    </div>
                    {/* Technology */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative h-11 w-64 ">
                            <input name='technology_1' defaultValue={PrevData.technology_1}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label
                                className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Technology-1
                            </label>
                        </div>
                        <div className="relative h-11 w-64 ">
                            <input name="technology_2" defaultValue={PrevData.technology_2}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Technology-2
                            </label>
                        </div>
                    </div>
                    {/* Photo */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative h-11 w-64 md:w-[560px] ">
                            <input name='photo_url' defaultValue={PrevData.photo_url}
                                className="peer h-full w-full rounded-md border border-blue-900-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-900-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-900-200 placeholder-shown:border-t-blue-900-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-900-50"
                            />
                            <label
                                className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[16px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-900-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-900-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-900-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-900-500">
                                Photo
                            </label>
                        </div>
                    </div>
                    {/* Submit */}
                    <div>
                        <input type="submit" value="Update" className="w-64 p-3  rounded-lg border border-blue-900 hover:bg-transparent hover:text-blue-900  bg-blue-900 text-white" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;