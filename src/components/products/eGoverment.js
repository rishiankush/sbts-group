import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import HeaderMain from '../common/headerMain';
import DoProjects from '../common/DoProjects';
import MainFooter from '../common/MainFooter';
import Openings from '../careers/openings';
import Professionals from '../careers/professionals';
import ProductBanner from './productBanner';


class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <HeaderMain />
            <ProductBanner bannerText={('E-Government')} />
            <section id="EGovernment">
              <div className="container">
                <div className="row">
                  <div className="EGovernmentText col-md-12">
                    <p> Governments around the globe attempt to institute large-scale e-government programs to increase benefits to both key stakeholders and the public. These programs consists of electronic services to support people and document identification and recognition, health and wellness services, and threat analysis. These programs can present complex challenges that require expertise, a thoughtful approach and cutting-edge technology. </p>
                    <p> As SBTS Group, we work with governments and technology agencies to alleviate these challenges and deliver E-Government solutions tailored to your unique environment . We have a suite of products to support a wide range of topics and we have a robust hardware and software team to support new products and services. </p>
                    <h2> Identity Management </h2>
                    <p> Our Identify management products cover plug and play recognition to support document, facial, and fingerprint recognition. These plugins provide quick integration with current supported softwares. In addition, we provide creation of chipped technology for identification to support both country and regional identity management. </p>

                    <h2> Health and Wellness Management </h2>
                    <p> Our health and wellness management tools support government and international health organizations in managing health crises and viral outbreaks. Out tools cover bioterrorism containment, outbreak management, and plugins to support user reporting symptom checking and self diagnosis. </p>

                    <h2> Cyber Security Management </h2>
                    <p> Our cyber plugins track online tendencies to support threat modeling, managed online attacks, and notification management. We also provide full solutions to provide end-to-end cyber consulting to support ever growing cyber threats </p>
                  </div>
                </div>
              </div>
            </section>
            <DoProjects />
            <MainFooter />
        </div>
    );
        
  }
}

export default withRouter(Services);
