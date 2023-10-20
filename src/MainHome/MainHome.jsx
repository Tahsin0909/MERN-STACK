import { ToastContainer, toast } from "react-toastify";
import Achievement from "../Components/Achivement/Achivement";
import Banner from "../Components/Banner.jsx/Banner";
import Brands from "../Components/Brands/Brands";
import YourCar from "../Components/YourCar/YourCar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Components/ContextApi/ContextApi";
import 'react-toastify/dist/ReactToastify.css';


const MainHome = () => {
    const { user } = useContext(AuthContext)
    const willShowToastRaw = localStorage.getItem('ShowToast')
    const willShowToast = JSON.parse(willShowToastRaw)
    // console.log(JSON.parse(willShowToast))
    useEffect(() => {
        if (willShowToast == "false") {
            // console.log('Toast dekhaw')
            const demo = user.email
            toast.info(`Authenticating As ${demo}`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            localStorage.setItem('ShowToast', JSON.stringify('True'))
        }
    }, [willShowToast, user.email])
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Achievement></Achievement>
            <YourCar></YourCar>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default MainHome;