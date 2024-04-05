import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrekingNews from "./BrekingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div className="font-poppins">
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>

            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 mt-10">
                <div className="">
                    <LeftSideNav></LeftSideNav>

                </div>

                {/* news Container */}
                <div className="lg:col-span-2 p-4 ">
                    <h2 className="text-xl font-semibold">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }

                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;