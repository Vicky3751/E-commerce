import { Instagram, Mail, MailOutline, Send, Twitter, WhatsApp } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React from 'react'
import "../assets/styles/Footer.css"
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                {/* <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>1010 Avenue, sw 54321, chandigarh</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footer-content pt-5 pb-5 footer-cta">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={require("../assets/images/logo.png")} className="img-fluid" alt="logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#"><Instagram /></a>
                                    <a href="#"><MailOutline /></a>
                                    <a href="#"><WhatsApp /></a>
                                    <a href="#"><Twitter /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">portfolio</a></li>
                                    <li><a href="#">Contact</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">portfolio</a></li>

                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">portfolio</a></li>
                                    <li><a href="#">Contact</a></li>
                                    
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="Email" variant="standard" InputProps={{ disableUnderline: true }} sx={{
                                        input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: "orange" },
                                        },
                                        borderBottom: "1px solid #000",
                                        color: "#000"
                                    }} />
                                </div>
                                <div className='pos'>
                                    <Send />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2023, All Right Reserved</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer