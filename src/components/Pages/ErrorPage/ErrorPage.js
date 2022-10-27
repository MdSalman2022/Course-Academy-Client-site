import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1 className="text-9xl font-bold text-warning my-20">404</h1>
            <h1 className="text-4xl my-10 font-bold">OPPS!PAGE NOT FOUND</h1>
            <p className="text-2xl my-10">Sorry, the page you're looking for doesn't exist</p>
            <Link to='/'> <button className="btn btn-block container mx-auto my-20">Return Home</button></Link>
        </div>
    );
}