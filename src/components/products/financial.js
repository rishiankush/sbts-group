import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import HeaderMain from '../common/headerMain';
import DoProjects from '../common/DoProjects';
import MainFooter from '../common/MainFooter';
import Openings from '../careers/openings';
import Professionals from '../careers/professionals';
import ProductBanner from './productBanner';


class Finacial extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <HeaderMain />
            <ProductBanner bannerText={('Finacial')} />
            <section id="EGovernment">
              <div className="container">
                <div className="row">
                  <div className="EGovernmentText col-md-12">
                    <p> Payment Solutions have evolved over the past decade. The introduction of online partners, blockchain technology, smart contract and changed the way we make payments. Some of these technologies can be quite overwhelming in deciding what is the best course of action for your organization.</p>
                    <p> At STBS Group, we work directly with you to remove the complexity. Some of our clients request an audit of their payment system to understand what the next iteration of payment solutions looks like. Other clients need solutions to ensure their payments are protected online with authentication and smart contract services . We have created a suite of plugins and applications that give confidents when making payments. </p>
                    <h2> Payment Authentication and Management System </h2>
                    <p> Our PAM system enables organizations engaged in the transfer of funds to keep track of all of their transactions. It allows clients to keep track of funds sent, create reports, and catalogue intimation with the click of a mouse. This system is updated regularly to accommodate current compliance and regulatory laws. </p>

                    <h2> Payment Gateway </h2>

                    <p> Looking for a new payment provider or frustrated working with solutions that don’t integrate well with your business, we can facilitate your payments through our portal and provide reconciliation and reports to streamline your payment platforms. </p>

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

export default withRouter(Finacial);
