import { Link } from "react-router-dom";
import logo from "../assets/logoFull.svg";
import { useContext } from 'react';
import { UserContext } from './Context';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);
    const Logout = () => {
        setUserData({
            "id": 0,
            "email": "",
            "username": ""
        })

        localStorage.setItem("id", 0);
        localStorage.setItem("username", "");
        localStorage.setItem("email", "");
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top" data-bs-theme="light">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand">
                    <img src={logo} width="100" alt="Logo" />{" "}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor03"
                    aria-controls="navbarColor03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarColor03">
                    <ul className="navbar-nav me-auto align-items-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                Home
                            </Link>
                        </li>
                    </ul>
                        
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        {(userData.id!=0) ? (
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={Logout}>
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">
                                        Register
                                    </Link>
                                </li>
                                <li
                                    className="nav-item d-none d-lg-block "
                                    style={{ marginLeft: "-15px", marginRight: "-15px" }}
                                >
                                    <span className="nav-link">/</span>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
