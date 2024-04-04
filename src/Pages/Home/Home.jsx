import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrekingNews from "./BrekingNews";


const Home = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>

            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>

                </div>
                <div className="lg:col-span-2 border ">
                    <h2 className="text-3xl">News Coming soon</h2>

                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;