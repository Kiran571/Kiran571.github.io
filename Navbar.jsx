import React, { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Navbar = (props) => {
    const history = useHistory()
    const [show, setShow] = useState(false);
    const [isVerified, setIsVerified] = useState({});
   
   
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setIsVerified(user);
    }, [isVerified]);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        history.push('/');
    }
    return (
        <>
            <section className="navbar-bg">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">TimeTable Maker</NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => setShow(!show)}>
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li classNameName="nav-item">
                            <NavLink activeclassName='menu_active' exact className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li classNameName="nav-item">
                            <NavLink activeclassName='menu_active' exact className="nav-link active" to="/about">About us</NavLink>
                            </li>
                        
                                {isVerified !== null && isVerified.verified === true ? (
                                    <button onClick={logout} className="btn btn-style btn-style-border">Logout</button>
                                ) : (
                                    <>
                                        <button onClick={() => history.push("/login")} activeclassName='menu_active' exact className="btn btn-style"  >
                                            Login
                                        </button>
                                        <button onClick={() => history.push("/register")} className="btn btn-style btn-style-border">Register</button>
                                    </>
                                )}
    
                        </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>       
    );
};

export default Navbar;
