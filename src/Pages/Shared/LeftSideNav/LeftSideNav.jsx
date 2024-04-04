import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categoriec.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="p-4">
            <h2 className="text-2xl">All Categories</h2>
            <button className=" bg-[#E7E7E7] rounded-xl px-10 py-4 my-4 w-full font-bold text-xl">National News</button>
            {
                categories.map((item, idx) => <Link
                    className="block ml-12 opacity-80 text-[#9F9F9F] font-semibold mb-2"
                    to={`/category/${item.id}`}
                    key={idx}>{item.name}</Link>)
            }


        </div>
    );
};

export default LeftSideNav;