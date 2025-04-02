import { Link, NavLink } from "react-router-dom"

export default function NavBar() {

    return (

        <>
            <NavLink className="navbar-brand " to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="/post">Post</NavLink>
            <NavLink className="navbar-brand" to="/chi-siamo">Chi Siamo</NavLink>
            <NavLink className="navbar-brand" to="/test">Test</NavLink>
        </>


    )



}