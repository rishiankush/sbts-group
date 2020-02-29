import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import SbtsLogo from '../../assets/images/logo/sbtsLogo.png';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <div id="footer" className="theme-footer-one">
                    <div className="shape-one"></div>
                    <img src={require("../../assets/images/shape/shape-67.svg")} alt="" className="shape-two" />
                    <div className="top-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-12 about-widget">
                                    <a href="index.html" className="logo"><img src={SbtsLogo} alt="" /></a>
                                    <a href="#" className="email">info@sbts.com</a>
                                    <a href="#" className="phone">1234567890</a>
                                </div>
                                <div className="col-lg-3 col-lg-3 col-sm-6 col-12 footer-list">
                                    <h5 className="title">Products</h5>
                                    <ul>
                                        <li><a href="#">E-Goverment Suite</a></li>
                                        <li><a href="#">Financial Suite</a></li>
                                        <li><a href="#">Training Suite</a></li>
                                        <li><a href="#">Call Center Suite</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12 footer-list">
                                    <h5 className="title">Quick Links</h5>
                                    <ul>
                                        <li><a href="about-us-standard.html">Home</a></li>
                                        {/* <li><a href="project-standard.html">About Us</a></li> */}
                                        <li><a href="team-standard.html">Services</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="blog-default.html">Media Kit</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-lg-2 col-sm-6 col-12 footer-information">
                                    <h5 className="title">Our Offices</h5>
                                    <p>Pune</p>
                                    <p>Freetown Sierra Leone</p>
                                    <p>Washington DC</p>

                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="bottom-footer">
                            <div className="clearfix">
                                <p>&copy; 2019 copyright all right reserved</p>
                                <ul>
                                    <li><a href="#">Privace & Policy.</a></li>
                                    <li><a href="faq.html">Faq.</a></li>
                                    <li><a href="#">Terms.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        );

    }
}

export default withRouter(Footer);
