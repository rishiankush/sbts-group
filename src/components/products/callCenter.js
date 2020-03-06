import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import HeaderMain from '../common/headerMain';
import DoProjects from '../common/DoProjects';
import MainFooter from '../common/MainFooter';
import Openings from '../careers/openings';
import Professionals from '../careers/professionals';
import ProductBanner from './productBanner';


class CallCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <HeaderMain />
            <ProductBanner bannerText={('CallCenter')} />
            <Openings />
            <Professionals />
            <DoProjects />
            <MainFooter />
        </div>
    );
        
  }
}

export default withRouter(CallCenter);
