import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import EGovermentSuite from '../../assets/images/home/EGovermentSuite.png';
import FinancialSuite from '../../assets/images/home/FinancialSuite.png';
import TrainingSuite from '../../assets/images/home/TrainingSuite.png';
import CallCenterSuite from '../../assets/images/home/CallCenterSuite.png';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class="products agn-what-we-do pt-150 pb-200">
                <img src={require("../../assets/images/shape/shape-63.svg")} alt="" class="shape-one" data-aos="fade-right" />
                <img src={require("../../assets/images/shape/shape-56.svg")} alt="" class="shape-two" />
                <div class="container">
                    <div class="theme-title-one text-center">
                        <div class="upper-title">Our Products Suites</div>
                        {/* <h2 class="main-title">Our Services</h2> */}
                        {/* <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. </p> */}
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="productsbox single-block">
                                <div class="icon">
                                    <img src={require("../../assets/images/shape/shape-2.svg")} alt="" class="bg" />
                                    <img src={EGovermentSuite} alt="" class="shape" />
                                </div>
                                <h5 class="title">E-Goverment Suite</h5>
                                <ul>
                                    <li> Identification Management </li>
                                    <li> Health and Wellness Management </li>
                                    <li> Cyber Security Management </li>
                                </ul>

                                {/* <p>Lorem ipsum dolor si amet, an dus situ  sint pertinacia constituto, mir dignsius quo great.</p>
                            <a href="#" class="more-button">More About Strategy & Research</a> */}
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="productsbox single-block">
                                <div class="icon">
                                    <img src={require("../../assets/images/shape/shape-2.svg")} alt="" class="bg" />
                                    <img src={FinancialSuite} alt="" class="shape" />
                                </div>
                                <h5 class="title">Financial Suite</h5>
                                <ul>
                                    <li> Payment Authentication and Management System </li>
                                    <li> Payment Gateway </li>
                                </ul>
                                {/* <p>Lorem ipsum dolor si amet, an dus situ  sint pertinacia constituto, mir dignsius quo great.</p>
                            <a href="#" class="more-button">More About Design & Development</a> */}
                            </div>
                        </div>

                        <div class="col-lg-3 co-12 d-md-none d-lg-block">
                            <div class="productsbox single-block">
                                <div class="icon">
                                    <img src={require("../../assets/images/shape/shape-2.svg")} alt="" class="bg" />
                                    <img src={TrainingSuite} alt="" class="shape" />
                                </div>
                                <h5 class="title">Training Suite</h5>
                                <ul>
                                    <li> Online Training </li>
                                    <li>  E-lerarning </li>
                                    <li> Instructor Led Training </li>
                                </ul>
                                {/* <p>Lorem ipsum dolor si amet, an dus situ  sint pertinacia constituto, mir dignsius quo great.</p>
                            <a href="#" class="more-button">More About Managment & Marketing</a> */}
                            </div>
                        </div>

                        <div class="col-lg-3 co-12 d-md-none d-lg-block">
                            <div class="productsbox single-block">
                                <div class="icon">
                                    <img src={require("../../assets/images/shape/shape-2.svg")} alt="" class="bg" />
                                    <img src={CallCenterSuite} alt="" class="shape" />
                                </div>
                                <h5 class="title">Call Center Suite</h5>

                                <ul>
                                    <li>  Health Management </li>
                                    <li>  Travel and Reservation Management</li>
                                    <li> Support Services</li>
                                </ul>

                                {/* <p>Lorem ipsum dolor si amet, an dus situ  sint pertinacia constituto, mir dignsius quo great.</p>
                            <a href="#" class="more-button">More About Managment & Marketing</a> */}
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                        <a href="#" class="contact-us white-shdw-button">Read More <i class="icon flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(Products);