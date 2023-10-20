import Achievement from "../Components/Achivement/Achivement";
import Banner from "../Components/Banner.jsx/Banner";
import Brands from "../Components/Brands/Brands";
import YourCar from "../Components/YourCar/YourCar";

const MainHome = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Achievement></Achievement>
            <YourCar></YourCar>
        </div>
    );
};

export default MainHome;