import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import bannershape1 from '../../assets/images/shape/bannerShape1.png';


class SHeaderBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
			<div id="theme-banner-one">
				<div className="illustration wow zoomIn animated" data-wow-delay="1s" data-wow-duration="2s">
				<img src={bannershape1} className="bannerHaderImg" alt="" />
				</div>
				<img src={require("../../assets/images/shape/oval-1.svg")} alt="" className="oval-one" />
				<img src={require("../../assets/images/shape/shape-1.svg")} alt="" className="shape-three" />
				<img src={require("../../assets/images/shape/shape-55.svg")} alt="" className="shape-four" />
				<img src={require("../../assets/images/shape/shape-56.svg")} alt="" className="shape-five" />
				<img src={require("../../assets/images/shape/shape-57.svg")} alt="" className="shape-six" />
				<img src={require("../../assets/images/shape/shape-58.svg")} alt="" className="shape-seven" />
				<img src={require("../../assets/images/shape/shape-59.svg")} alt="" className="shape-eight" />
				<img src={require("../../assets/images/shape/shape-60.svg")} alt="" className="shape-nine" />
				<img src={require("../../assets/images/shape/shape-61.svg")} alt="" className="shape-ten" />
				<img src={require("../../assets/images/shape/shape-62.svg")} alt="" className="shape-eleven" />
				<div className="container">
					<div className="main-wrapper">
						<h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">Enterprise Solutions <br />for a better <br />tomorrow</h1>
						<ul className="button-group lightgallery">
						<li><a data-fancybox href="#" className="fancybox video-button-one wow fadeInRight animated" data-wow-delay="1.5s">Learn about our Company. <i class="flaticon-play-button icon-right"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
        );

    }
}

export default withRouter(SHeaderBanner);
