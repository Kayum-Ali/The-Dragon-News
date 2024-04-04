import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins container mx-auto max-w-6xl">
            <Outlet></Outlet>

        </div>
    );
};

export default Root;