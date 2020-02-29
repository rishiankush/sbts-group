import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class OurGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <div className="agn-our-gallery">
                    <img src="images/shape/shape-62.svg" alt="" className="shape-one" />
                    <img src="images/shape/shape-55.svg" alt="" className="shape-two" />
                    <img src="images/shape/shape-61.svg" alt="" className="shape-three" />
                    <div className="container">
                        <div className="theme-title-one">
                            <h2 className="main-title">Check some of our <br />Recent work.</h2>
                            <p className="bottom-title">Click the below button to check all of our work.</p>
                        </div>
                    </div>
                    <div className="main-wrapper">
                        <a href="#" className="view-gallery">View Gallery</a>
                        <div className="gallery-slider lightgallery">
                            <div className="item">
                                <div className="img-box">
                                    <img src="images/portfolio/1.jpg" alt="" />
                                    <div className="hover-content">
                                        <a href="images/portfolio/1.jpg" className="icon zoom fancybox" data-fancybox="images" data-caption="My caption">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-box">
                                    <img src="images/portfolio/2.jpg" alt="" />
                                    <div className="hover-content">
                                        <a href="images/portfolio/2.jpg" className="icon zoom fancybox" data-fancybox="images" data-caption="My caption">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-box">
                                    <img src="images/portfolio/3.jpg" alt="" />
                                    <div className="hover-content">
                                        <a href="images/portfolio/3.jpg" className="icon zoom fancybox" data-fancybox="images" data-caption="My caption">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-box">
                                    <img src="images/portfolio/4.jpg" alt="" />
                                    <div className="hover-content">
                                        <a href="images/portfolio/4.jpg" className="icon zoom fancybox" data-fancybox="images" data-caption="My caption">+</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );

    }
}

export default withRouter(OurGallery);
