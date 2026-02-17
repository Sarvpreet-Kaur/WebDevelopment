import { Outlet } from "react-router-dom";

function Details() {
    return (
        <>
        <h1>Details Page</h1>
        <Outlet />
        </>
    );
}

export default Details;
