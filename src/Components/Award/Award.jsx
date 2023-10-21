

const Award = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  p-10">
                <div className="flex flex-col justify-center items-center  p-2">
                    <div className="transform hover:scale-105 transition-transform duration-300 w-fit  text-center py-4 md:px-20 rounded-lg bg-slate-800 shadow-lg bg-opacity-10 hover:text-blue-900 hover:underline hover:font-bold">
                        <img className="w-52 h-64 " src="https://i.ibb.co/hc6GFS1/image-removebg-preview-10.png" alt="" />
                        <p>Loyalty Award</p>
                        <p>2023 Signature Drive Recognized</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center  p-2">
                    <div className="transform hover:scale-105 transition-transform duration-300 w-fit  text-center py-4 md:px-20 rounded-lg bg-slate-800 shadow-lg bg-opacity-10 hover:text-blue-900 hover:underline hover:font-bold">
                        <img className="w-52 h-64  md:ml-8" src="https://i.ibb.co/jr20WpK/image-removebg-preview-11.png" alt="" />
                        <p>Brand Image</p>
                        <p>2022 Our Brand Image Recognized</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center  p-2">
                    <div className="transform hover:scale-105 transition-transform duration-300 w-fit  text-center py-2 md:px-24 rounded-lg bg-slate-800 shadow-lg bg-opacity-10 hover:text-blue-900 hover:underline hover:font-bold">
                        <img className="w-52 h-64   " src="https://i.ibb.co/bN9FgM2/image-removebg-preview-12.png" alt="" />
                        <p>Sarah NGO Awards</p>
                        <p>2021 During Pandemic <br /> Our Work Got Recognized </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center  p-2">
                    <div className="transform hover:scale-105 transition-transform duration-300 w-fit  text-center py-4 md:px-[78px] rounded-lg bg-slate-800 shadow-lg bg-opacity-10 hover:text-blue-900 hover:underline hover:font-bold">
                        <img className="w-52 h-64  md:ml-10" src="https://i.ibb.co/tBbWJwW/image-removebg-preview-13.png" alt="" />
                        <p>Best Quality Award</p>
                        <p>2020 Quality That We Provided To You</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;