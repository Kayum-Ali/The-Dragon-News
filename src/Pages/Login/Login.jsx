import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center font-bold">Login Your Account</h2>
                <hr className="w-2/3 mx-auto font-bold text-black h-[3px] shadow-xl" />

                <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
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
                        <label className="label">
                            <a href="#" className="text-sm font-medium link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center  mt-4"> Do not have an account ? <Link to='/register' className="text-blue-600 underline font-bold">Register</Link></p>

            </div>



        </div>
    );
};

export default Login;