import { Outlet } from "react-router-dom";
import NavBar from "../NavBar.jsx/NavBar";


const Home = () => {
    return (
        <div className="lg:mx-32">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;