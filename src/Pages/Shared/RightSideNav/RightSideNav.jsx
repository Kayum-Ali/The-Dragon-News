import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>

                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub ></FaGithub>

                    Login with Github
                </button>

            </div>
            <div className="p-4">
                <h2 className="text-3xl font-bold my-5" >find Us On</h2>

                <a href="" className="p-4 flex gap-3 items-center text-center text-lg border-2 rounded-t-lg">
                    <FaFacebook className="bg-slate-300 p-2 text-4xl rounded-full"></FaFacebook>
                    FaceBook
                </a>
                <a href="" className="p-4 flex gap-3 items-center text-lg border-x-2">
                    <FaTwitter className="bg-slate-300 p-2 text-4xl rounded-full"></FaTwitter>
                    Twitter
                </a>
                <a href="" className="p-4 flex gap-3 items-center text-lg border-2 rounded-b-lg">
                    <FaLinkedinIn className="bg-slate-300 p-2 text-4xl rounded-full"></FaLinkedinIn>
                    Instragram
                </a>

            </div>

            {/* qZone  */}

            <div className="p-4">
                <h2 className="text-3xl font-bold my-5" >Q-Zone</h2>

                <a href="" className="p-4 flex gap-3 items-center text-center text-lg border-2 rounded-t-lg">
                    <FaFacebook className="bg-slate-300 p-2 text-4xl rounded-full"></FaFacebook>
                    FaceBook
                </a>
                <a href="" className="p-4 flex gap-3 items-center text-lg border-x-2">
                    <FaTwitter className="bg-slate-300 p-2 text-4xl rounded-full"></FaTwitter>
                    Twitter
                </a>
                <a href="" className="p-4 flex gap-3 items-center text-lg border-2 rounded-b-lg">
                    <FaLinkedinIn className="bg-slate-300 p-2 text-4xl rounded-full"></FaLinkedinIn>
                    Instragram
                </a>

            </div>


        </div>
    );
};

export default RightSideNav;