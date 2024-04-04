import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div className="bg-[#F3F3F3]">
            <Navbar></Navbar>

            <div className="bg-white w-2/3 mx-auto pt-5 pb-2 mt-5">
                <h2 className="text-3xl my-10 text-center font-bold">Register your account</h2>
                <hr className="w-2/3 mx-auto font-bold text-black h-[3px] shadow-xl" />

                <form onSubmit={handleRegister} className="p-10 mb-10">
                    <div className="form-control">

                        <label className="label">
                            <span className="text-xl font-bold">Your Name</span>
                        </label>

                        <input type="text" placeholder="Enter your name" className="bg-[#F3F3F3] p-5 rounded-lg" name="name" />

                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="text-xl font-bold">Photo URL</span>
                        </label>

                        <input type="text" placeholder="Enter your Photo URL" className="bg-[#F3F3F3] p-5 rounded-lg" name="photo" />

                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="text-xl font-bold">Email</span>
                        </label>

                        <input type="email" placeholder="Enter your email address" className="bg-[#F3F3F3] p-5 rounded-lg" required name="email" />

                    </div>

                    <div className="form-control">

                        <label className="label">
                            <span className="text-xl font-bold">Password</span>
                        </label>

                        <input type="password" placeholder="Enter your Password" name='password' className="bg-[#F3F3F3] p-5 rounded-lg" required />

                    </div>
                    <div className="form-control mt-5">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center mt-2">Already have an account ? <Link to='/login' className="text-blue-600 underline font-bold">login</Link></p>
                </form>

            </div>

        </div>
    );
};

export default Register;