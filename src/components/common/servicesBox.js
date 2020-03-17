import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import internationalconsulting from '../../assets/images/shape/internationalconsulting.png';
import ArtificialIntelligence from '../../assets/images/shape/artificialIntelligence.png';
import Cybersecurity from '../../assets/images/shape/cybersecurity.png';
import Telecommunications from '../../assets/images/shape/telecommunications.png';
import ITConsulting from '../../assets/images/shape/ITConsulting.png';
import Mobileapplicationdevelopment from '../../assets/images/shape/mobileapplicationdevelopment.png';
import DIntegration from '../../assets/images/shape/DIntegration.png';
import SDevelopment from '../../assets/images/shape/SDevelopment.png';
import HDevelopment from '../../assets/images/shape/HDevelopment.png';
import Networking from '../../assets/images/shape/networking.png';
import VPNWANIntegration from '../../assets/images/shape/VPNWANIntegration.png';
import Enterpriseweb from '../../assets/images/shape/Enterpriseweb.png';
import Helpdeskintegration from '../../assets/images/shape/Helpdeskintegration.png';
import Supporttraining from '../../assets/images/shape/Supporttraining.png';




class Servicesbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class="our-feature-app p0 mt-200">
                <div className="container">
            <div class="row single-feature-box">
            <div class="col-md-12 col-lg-12">
                <div class="feature-img-box">
                    <img src={require("../../assets/images/shape/shape-45.svg")} alt="" class="shape-one" />
                    <img src={require("../../assets/images/shape/shape-46.svg")} alt="" class="shape-two" />
                    <img src={require("../../assets/images/shape/shape-47.svg")} alt="" class="shape-three" />
                    <img src={require("../../assets/images/shape/shape-48.svg")} alt="" class="shape-four" />
                    <img src={require("../../assets/images/shape/shape-49.svg")} alt="" class="shape-five" />
                    <div class="row service-box-row">
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={internationalconsulting} alt="" /></div>
                                <h4 class="title">International Consulting</h4>
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box price-feature js-tilt">
                                <div class="icon-box"><img src={ArtificialIntelligence} alt="" /></div>
                                <h4 class="title">Artificial Intelligence / Machine Learning</h4>
                            </div>
                        </div>
                        <div className="col-md-2 service-boxes">
                        <div class="feature-offer-box access-feature js-tilt">
                                <div class="icon-box"><img src={Cybersecurity} alt="" /></div>
                                <h4 class="title">Cyber Security</h4>
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={Telecommunications} alt="" /></div>
                                <h4 class="title">Telecommunications</h4>
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box price-feature js-tilt">
                                <div class="icon-box"><img src={ITConsulting} alt="" /></div>
                                <h4 class="title">IT Consulting</h4>
                            </div>
                        </div>
                        
                    </div>

                    <div class="row">
                        <div className="col-md-2 service-boxes">
                            <div class="feature-offer-box access-feature js-tilt">
                                <div class="icon-box"><img src={Mobileapplicationdevelopment} alt="" /></div>
                                <h4 class="title">Mobile Application Development</h4>
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={DIntegration} alt="" /></div>
                                <h4 class="title">Database Integration</h4>
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box price-feature js-tilt">
                                <div class="icon-box"><img src={SDevelopment} alt="" /></div>
                                <h4 class="title">Software Development</h4>
                            </div>
                        </div>
                        <div className="col-md-2 service-boxes">
                        <div class="feature-offer-box access-feature js-tilt">
                                <div class="icon-box"><img src={HDevelopment} alt="" /></div>
                                <h4 class="title">Hardware Design and Development </h4>
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={Networking} alt="" /></div>
                                <h4 class="title">Networking</h4>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box price-feature js-tilt">
                                <div class="icon-box"><img src={VPNWANIntegration} alt="" /></div>
                                <h4 class="title">VPN/WAN Integration</h4>
                            </div>
                        </div>
                        <div className="col-md-2 service-boxes">
                        <div class="feature-offer-box access-feature js-tilt">
                                <div class="icon-box"><img src={Enterpriseweb} alt="" /></div>
                                <h4 class="title">Enterprise Web</h4>
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <div class="icon-box"><img src={Helpdeskintegration} alt="" /></div>
                                <h4 class="title">Help Desk Integration</h4>
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box price-feature js-tilt">
                                <div class="icon-box"><img src={Supporttraining} alt="" /></div>
                                <h4 class="title">Support/ Training Management</h4>
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

export default withRouter(Servicesbox);