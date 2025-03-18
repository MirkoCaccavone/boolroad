import { Link } from "react-router-dom"
export default function Header() {
    return (
        <nav className=" navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="../../public/logo.png" alt="" /></Link>
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-trip"><i className="fa-regular fa-square-plus"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}