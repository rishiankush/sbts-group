import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import HeaderMain from '../common/headerMain';
import DoProjects from '../common/DoProjects';
import MainFooter from '../common/MainFooter';
import Openings from '../careers/openings';
import Professionals from '../careers/professionals';
import ProductBanner from './productBanner';


class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <HeaderMain />
            <ProductBanner bannerText={('Training')} />
            <section id="EGovernment">
              <div className="container">
                <div className="row">
                  <div className="EGovernmentText col-md-12">
                    <p>SBTS Group has created more than 100 courses in multiple languages that cover a wide range of technology and leadership topics. We offer these courses in 3 distinct methods to serve a dynamic schedules and unique clientele. In addition we also offer custom training solutions for your products and services and have a team who will work directly with you to organize your content into digestible chucks for your customers. We offer testing and certification for many courses with more support adding this year.</p>

                      <h2> Instructor-Led Training </h2>
                      <p> We conduct full training in our facility with our instructors and also have our instructors meet you at your facility to conduct training. Our instructors are also multilingual to support diverse clients. </p>

                      <h2> E-learning</h2>
                      <p> We support both daytime and evening options for our clients to support a busy schedule. Our instructors lead instructions along with real tome questions and answer sessions so you never finish a course without fully understanding the content. </p>

                      <h2> Online/Self Study </h2>

                      <p> No matter what timezone, region or schedule you may have we have online courses that you can complete at your own pace. Our portal provides you with access to the content and live notifications to help keep you on track. </p>


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

export default withRouter(Training);
