import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen flex-col space-y-3">
            <h2 className="text-3xl">404</h2>
            <p className="text-5xl">Not Found</p>
            <Link to='/' className="btn btn-primary">Home</Link>

        </div>
    );
};

export default ErrorPage;