import { Outlet } from "react-router-dom";
import Navbar from "../../components/Pages/Shared/Navbar/Navbar";
import Footer from "../../components/Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="md:px-[134px]">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;