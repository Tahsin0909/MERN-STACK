

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[92vh]"
                style={{ backgroundImage: 'url(https://img.lovepik.com/background/20211022/large/lovepik-car-scene-background-image_501004058.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div
                style={{
                    fontFamily:'Oswald'
                }}
                className="hero-content relative flex text-start text-neutral-content">
                    <div className="lg:relative lg:right-64  lg:w-[600px]">
                        <h1 className="mb-5 text-6xl font-bold text-transparent bg-blue-900 bg-clip-text font-Oswald ">Discover</h1>
                        <p className="mb-5 text-2xl">Your Dream Car Today at SignatureDrive. <br /> Your Source for Top Brands and Unmatched Deals. A Legacy of Trust and Excellence in Every Vehicle </p>
                        <p className="font-[Montserrat Alternates]">
                            Find the Perfect Match for Your Lifestyle -  <br />
                            <button className="btn shadow-lg hover:text-blue-900  bg-blue-900 text-white mt-4">Discover Now</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

// https://t3.ftcdn.net/jpg/04/79/02/02/360_F_479020258_8qnUoQvBFtY5034IczymXkjmAkhSxKdk.jpg
