import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const NewsDetails = () => {
    const { image_url } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid lg:grid-cols-4">
                <div className="col-span-3">

                    <h2 className="text-xl font-semibold">Dragon News</h2>
                    <img src={image_url} alt="" />



                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>

            </div>

        </div>
    );
};

export default NewsDetails;