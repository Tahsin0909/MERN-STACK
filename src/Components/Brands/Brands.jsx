import { Link } from "react-router-dom";



const Brands = () => {
    const brands = [
        { brand: "Honda", description: "Known for its reliable and fuel-efficient vehicles.", logo: "https://i.ibb.co/3rNTJV6/image-removebg-preview-2.png", photo: "https://i.ibb.co/1bPFvvh/image.png" },

        { brand: "Toyota", description: "Renowned for its durable and dependable cars and trucks.", logo: "https://i.ibb.co/N7wpG4n/image-removebg-preview-3.png", photo: "https://i.ibb.co/WHwwsNw/image.png" },

        { brand: "Audi", description: "Famous for its luxurious and high-performance vehicles.", logo: "https://i.ibb.co/0XhGFkV/image-removebg-preview-4.png", photo: "https://i.ibb.co/pjs6hkZ/image.png" },

        { brand: "Nissan", description: "Innovative carmaker with a focus on advanced technology.", logo: "https://i.ibb.co/qybf126/image-removebg-preview-5.png", photo: "https://i.ibb.co/sJbq43T/image.png" },

        { brand: "Mercedes", description: "Elegant and sophisticated vehicles, a symbol of luxury.", logo: "https://i.ibb.co/D47Dt8T/image-removebg-preview-6.png", photo: "https://i.ibb.co/gWfhFrx/image.png" },

        { brand: "BMW", description: "Sporty and dynamic cars that offer a thrilling driving experience.", logo: "https://i.ibb.co/ZxKK103/image-removebg-preview.png", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiwO0peEoONAUd1GwwqR2WzMbgPw3XL95A&usqp=CAU" },

        { brand: "Chevrolet", description: "A wide range of vehicles, from trucks to compact cars.", logo: "https://i.ibb.co/0F1ZMT9/image-removebg-preview-7.png", photo: "https://i.ibb.co/FbNtYqH/image.png" }
    ];

    console.log(brands);


    console.log(brands);
    return (
        <div className="py-10 mx-4 md:mx-0 bg-slate-200 " >
            <div className="text-center">
                <p className="text-blue-800">Best Solution For Your Needs</p>
                <h1 className="text-3xl font-extrabold">MULTI BRANDS DEALER</h1>
            </div>
            <div className="flex justify-center items-center mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {
                        brands.map(data => <Link to={`/${data.brand.toLowerCase()}`}  key={data.brand}  >
                        <div className="flex flex-col md:flex-row  shadow-xl w-fit md:h-52 rounded-xl transition ease-in-out delay-100  hover:scale-105  duration-300">
                            <figure>
                                <img className="w-full md:w-[320px] h-full rounded-t-xl md:rounded-l-xl" src={data.photo} alt="Movie" />
                            </figure>
                            <div className="flex justify-center bg-glass md:rounded-r-xl rounded-b-xl flex-col md:w-56 p-2 md:p-1">
                                <div className="flex items-center shadow-md gap-3 border-blue-900 rounded-lg border-2  md:ml-4 w-fit px-3 py-1">
                                    <img className="w-8 md:w-10" src={data.logo} alt="" />
                                    <h2 className="md:text-2xl text-lg font-extrabold text-blue-900 ">{data.brand}</h2>
                                </div>
                                <div className="md:p-4 text-lg">
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Brands;