import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class CompletedProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
			<div className="agn-counter-section">
				<img src={require("../../assets/images/shape/shape-55.svg")} alt="" className="shape-one" />
				<img src={require("../../assets/images/shape/shape-59.svg")} alt="" className="shape-two" />
				<img src={require("../../assets/images/shape/shape-61.svg")} alt="" className="shape-three" />
				<div className="container">
					<div className="main-wrapper">
						<div className="theme-title-one text-center">
							<h2 className="main-title">We completed 1500+ Projects Yearly <br />Successfully & counting</h2>
						</div>

						<div className="counter-wrapper">
							<div className="row">
								<div className="col-sm-4">
									<div className="single-counter-box">
							      		<h2 className="number"><span className="timer" data-from="0" data-to="16" data-speed="1200" data-refresh-interval="5">0</span>k</h2>
							      		<p>Global Customer</p>
							      	</div>
								</div>
								<div className="col-sm-4">
									<div className="single-counter-box">
							      		<h2 className="number"><span className="timer" data-from="0" data-to="500" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
							      		<p>Completed Projects</p>
							      	</div>
								</div>
								<div className="col-sm-4">
									<div className="single-counter-box">
							      		<h2 className="number"><span className="timer" data-from="0" data-to="460" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
							      		<p>Experts Worker</p>
							      	</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bottom-banner">
						<div className="clearfix">
							<div className="text">
								<h3 className="title">Have any question about us?</h3>
								<p>Dont’t hesitate to contact us.</p>
							</div>
							<a href="#" className="contact solid-button-one">Contact us</a>
						</div>
					</div>
				</div>
			</div>
        );

    }
}

export default withRouter(CompletedProjects);
