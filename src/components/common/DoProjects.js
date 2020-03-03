import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class DoProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <div className="agn-contact-banner">
                    <div className="container">
                        <h2 className="title">Need help on your next project? <br />Contact us.</h2>
                        <a onClick={()=>this.props.history.push('/contactus')} className="contact-button line-button-one">Contact Us</a>
                    </div>
                </div>
        );

    }
}

export default withRouter(DoProject);
