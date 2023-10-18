import { Outlet } from "react-router-dom";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer/Footer";



const Home = () => {
    return (
        <div className="lg:mx-28">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;