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
            <ProductBanner bannerText={('Call Center')} />
            <section id="EGovernment">
              <div className="container">
                <div className="row">
                  <div className="EGovernmentText col-md-12">
                    <p>SBTS Group provides much more than contact center solutions, we partner with clients to support global products and services. We have a team of multilingual associates who become immersed in your products and services and execute strategies to get results. We offer around the clock support for all timezones and provide detailed analytics to help you innovate rapidly. </p>
                    <h2> Health Management </h2>
                    <p> We provide direct support for your outbreak management system with realtime metric tracking and multilingual support for global health organizations. </p>
                     <h2> Travel and Reservation Management </h2>
                     <p> We support our partners with travel arrangements for all types of travel and concierge services. We provide customized itineraries and an easy direct line when things go awry. </p>
                    <h2> Support Services </h2>
                    <p> Have a customized service that needs a solution. We can handle it. Our associates can adapt and product or service to streamline its effectiveness you your end customers. </p>
                    <p> this one is remaining. please let me know where I need to edit or add this content. </p> 
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

export default withRouter(CallCenter);
