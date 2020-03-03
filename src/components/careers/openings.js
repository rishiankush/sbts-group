import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import internationalconsulting from '../../assets/images/shape/internationalconsulting.png';
import Projectmanagement from '../../assets/images/shape/Projectmanagement.png';
import Informationtechnology from '../../assets/images/shape/informationtechnology.png';
import Webdevelopment from '../../assets/images/shape/Webdevelopment.png';
import Webdesign from '../../assets/images/shape/Webdesign.png';
import Programming from '../../assets/images/shape/programming.png';
import Telecommunications from '../../assets/images/shape/telecommunications.png';
import Sales from '../../assets/images/shape/sales.png';
import SubmitCv from '../../assets/images/shape/submitCv.png';





class Openings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class="our-feature-app p0 mt-200">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="careerAbout"> SBTS Group is interested in working with and developing young talent. If you are interested in an internship while in school and you work in any of the following fields.  </p>
                        </div>
                    </div>
            <div class="row single-feature-box">
            <div class="col-md-12 col-lg-12">
                <div class="feature-img-box">
                    <img src={require("../../assets/images/shape/shape-45.svg")} alt="" class="shape-one" />
                    <img src={require("../../assets/images/shape/shape-46.svg")} alt="" class="shape-two" />
                    <img src={require("../../assets/images/shape/shape-47.svg")} alt="" class="shape-three" />
                    <img src={require("../../assets/images/shape/shape-48.svg")} alt="" class="shape-four" />
                    <img src={require("../../assets/images/shape/shape-49.svg")} alt="" class="shape-five" />
                    <div class="row">
                        <div class="col-md-4 col-lg-4">
                            <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={internationalconsulting} alt="" /></div>
                                <h4 class="title">Marketing</h4>
                                <p>Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="feature-offer-box price-feature js-tilt">
                                <div class="icon-box"><img src={Projectmanagement} alt="" /></div>
                                <h4 class="title">Project Management</h4>
                                <p>Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div class="feature-offer-box access-feature js-tilt">
                                <div class="icon-box"><img src={Informationtechnology} alt="" /></div>
                                <h4 class="title">Information Technology</h4>
                                <p>Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                        <h4 class="title">Information Technology</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-lg-3">
                            <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={Telecommunications} alt="" /></div>
                                <h4 class="title">System Analysis</h4>
                                <p>Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3">
                            <div class="feature-offer-box price-feature js-tilt">
                                <div class="icon-box"><img src={Webdevelopment} alt="" /></div>
                                <h4 class="title">Web Development</h4>
                                <p>Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div class="feature-offer-box access-feature js-tilt">
                                <div class="icon-box"><img src={Webdesign} alt="" /></div>
                                <h4 class="title">Web Design</h4>
                                <p>Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={Programming} alt="" /></div>
                                <h4 class="title">Programming</h4>
                                <p>Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <div class="feature-offer-box access-feature js-tilt">
                                <div class="icon-box"><img src={Sales} alt="" /></div>
                                <h4 class="title">Sales</h4>
                                <p>Lorem ipsum dolor si met, an dusino si  sinconstituto mir set gil amilu.</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-6">
                            <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={SubmitCv} alt="" /></div>
                                <h4 class="title">Please fill out the form below to submit your resume</h4>
                                <a href="#"> http://www.sonako.com/resume.php </a>
                            </div>
                        </div>
                      
                      
                       
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
        );

    }
}

export default withRouter(Openings);