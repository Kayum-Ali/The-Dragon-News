import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrekingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-3">
            <a href="#_" className="inline-flex overflow-hidden lg:w-1/4 w-[45%] text-white bg-[#D72050] rounded group">
                <span className="px-3.5 py-2 text-white bg-[#D72050] group-hover:bg-purple-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </span>
                <span className="pl-4 pr-5 py-2.5">Breaking News</span>
            </a>

            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-5 text-lg font-bold opacity-80" to='/'>  I can be a React component, multiple React components, or just some text....</Link>
                <Link className="mr-5 text-lg font-bold opacity-80" to='/'>  I can be a React component, multiple React components, or just some text....</Link>
                <Link className="mr-5 text-lg font-bold opacity-80" to='/'>  I can be a React component, multiple React components, or just some text....</Link>
            </Marquee>
        </div>
    );
};

export default BrekingNews;