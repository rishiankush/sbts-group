import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import HeaderMain from './common/headerMain';
import HeaderBanner from './services/sheaderBanner';
import WhatWeDo from './common/WhatWeDo';
import Aboutus from './common/Aboutus';
import CompletedProjects from './common/CompletedProjects';
import OurGallery from './common/OurGallery';
import OurBlog from './common/OurBlog';
import DoProjects from './common/DoProjects';
import Products from './common/Products';
import MainFooter from './common/MainFooter';
import Leadership from './common/Leadership';
import StaticMap from './common/StaticMap';
import ServicesBox from './common/servicesBox';
import ContactBanners from './contact/contactBanners';
import Address from './contact/address';
import ContactForm from './contact/contactForm';
import Map from '../assets/images/contact/map.png';

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
        <ContactBanners />
        <div className="contactUs">
          <div className="container">
            <div className="row">
              <div className="contactTitle col-md-12">
                <h3 className="text-center"> For general inquiries, use the form below.  </h3>
              </div>
              <div className="col-md-7">
                <ContactForm />
            </div>
              <div className="col-md-5">
                <div className="contactMap">
                  <img src={Map} />
                </div>
                <Address />
              </div>
            </div>
          </div>
        </div>
        <Leadership />
        <StaticMap />
        <DoProjects />
        <MainFooter />
      </div>
    );

  }
}

export default withRouter(Services);
