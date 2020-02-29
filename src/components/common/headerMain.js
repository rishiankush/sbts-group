import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import SbtsLogo from '../../assets/images/logo/sbtsLogo.png';

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="theme-main-menu theme-menu-one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo"><a href="index.html"><img style={{width:'150px'}} src={SbtsLogo} alt="" /></a></div>
                        </div>
                        <div className="col-md-8">
                            <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
                                <div className="container nav-container">
                                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="flaticon-setup"></i>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active dropdown">
                                                <a href="index.html" className="nav-link dropdown-toggle" data-toggle="dropdown">Home</a>
                                            </li>
                                            <li className="nav-item dropdown position-relative">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Products</a>
                                                <ul class="dropdown-menu">
							            <li class="dropdown-submenu dropdown">
							              	<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">E-Goverment Suite</a>
							            </li>
                                        <li class="dropdown-submenu dropdown">
							              	<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Financial Suite</a>
							            </li>
                                        <li class="dropdown-submenu dropdown">
							              	<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Training Suite</a>
							            </li>
                                        <li class="dropdown-submenu dropdown">
							              	<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Call Center Suite</a>
							            </li>
						            </ul>
                                            </li>
                                            <li className="nav-item dropdown position-relative">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Services</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Careers</a>
                                            </li>
                                            <li className="nav-item dropdown position-relative">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(MainHeader);
