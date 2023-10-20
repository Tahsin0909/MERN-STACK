/* eslint-disable react/no-unescaped-entities */


const WhyChooseUs = () => {
    return (
        <div className="flex flex-col justify-center items-center py-10 px-4 bg-gray-600 bg-opacity-20 " >
            <div>
                <h1 className="text-center text-3xl font-bold py-2">Easy To Buy</h1>
                <input  type="range" min={0} max="100" value="25" className="range range-primary range-xs" step="25" />
                <div className="w-full flex justify-between text-xs px-2">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center  ">
                <div className="flex flex-col justify-center items-center transition ease-in-out delay-100  hover:scale-105  duration-300">
                    <img className="w-28" src="https://cdn-icons-png.flaticon.com/128/2211/2211425.png" alt="" />
                    <p className="text-xl font-bold text-blue-900 py-4">Select Your Car</p>
                    <p>Start by selecting the perfect car for your needs and preferences.Browse through our wide range of cars to find the one that suits you best.Your car, your way. Begin the journey by choosing the perfect vehicle for you.</p>
                </div>
                <div className="flex flex-col justify-center items-center transition ease-in-out delay-100  hover:scale-105  duration-300">
                    <img className="w-28" src="https://cdn-icons-png.flaticon.com/128/4393/4393152.png" alt="" />
                    <p className="text-xl font-bold text-blue-900 py-4">Select Payment</p>
                    <p>Are you tired of being locked into long-term commitments and fixed plans? Our Pay As You Go service offers you the ultimate flexibility and control over your payments. With Pay As You Go, you only pay for what you use, when you use it.</p>
                </div>
                <div className="flex flex-col justify-center items-center transition ease-in-out delay-100  hover:scale-105  duration-300">
                    <img className="w-28" src="https://cdn-icons-png.flaticon.com/128/8551/8551937.png" alt="" />
                    <p className="text-xl font-bold text-blue-900 py-4">Shipment</p>
                    <p>At Signature Drive, we understand the importance of reliable and efficient shipping services. Our mission is to deliver your goods with precision, care, and promptness. Whether you're a business looking to fulfill customer orders or an individual sending a package, we've got your shipping needs covered.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;