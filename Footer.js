import React from 'react';

const Footer = () => {
    return <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-2 col-lg-3">
                                <h2>Company</h2>
                                <ul>
                                    <li>
                                        <a href="http://localhost:3000/login">Get Started</a>
                                    </li>
                                    
                                  
                                </ul>
                            </div>

                            {/* <div className="col-6 col-lg-2">
                                <h2>Contact us</h2>
                                <ul>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                   
                                </ul>                            
                            </div> */}

                            <div className="col-2 col-lg-3">
                                <h2>About Us</h2>
                                <ul>
                                    <li>
                                        <a href="http://localhost:3000/about">About</a>
                                    </li>
                                   
                                   
                                </ul>
                            </div>

                            {/* <div className="col-6 col-lg-2">
                                <h2>Feedback</h2>
                                <ul>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                   
                                </ul>
                            </div> */}

                            <div className="col-12 col-lg-3">
                                <h2>Follow Us</h2>
                                <div className="row">
                                    {/* <div className="col-3 mx-auto">   
                                        <i className="fab fa-facebook-f fontawesome-style"></i>
                                    </div> */}
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.linkedin.com/in/kiran-suryawanshi-1856ab207/">
                                            <i className="fab fa-linkedin fontawesome-style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.instagram.com/kiran_ms10">
                                            <i className="fab fa-instagram fontawesome-style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">    
                                        <i className="fab fa-twitter fontawesome-style"></i>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://github.com/Kiran571/">
                                            <i className="fab fa-github fontawesome-style"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="mt-1">
                            <p className="main-hero-para text-center w-100">
                                Copyright @ 2021 Time Table Application. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    
    
    </>
};

export default Footer;








