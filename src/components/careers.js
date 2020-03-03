import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
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
import CHeaderBanners from './careers/cHeaderBanners';
import Openings from './careers/openings';


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
            <CHeaderBanners />
            <Openings />
            <DoProjects />
            <MainFooter />
        </div>
    );
        
  }
}

export default withRouter(Services);
