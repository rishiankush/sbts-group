import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import bannershape1 from '../../assets/images/shape/bannerShape1.png';


class HeaderBanner extends Component {
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
					{/* <img src={bannershape2} alt="" className="shape-one wow fadeInDown animated" data-wow-delay="1.8s" /> */}
					{/* <img src={bannershape3} alt="" className="shape-two wow fadeInUp animated" data-wow-delay="2.7s" />  */}
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
						{/* <div className="slogan wow fadeInDown animated" data-wow-delay="0.2s"><span>70% Off</span> for first 3 months</div> */}
						<h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">Global Full <br />Service  <br />ICT company.</h1>
						{/* <p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">The 3 golden rules professional graphic designer don’t <br /> want you to know about.</p> */}
						<ul className="button-group lightgallery">
							<li><a href="about-us-standard.html" className="more-button solid-button-one wow fadeInLeft animated" data-wow-delay="1.5s">More About us <i className="fa fa-angle-right icon-right" aria-hidden="true"></i></a></li>

							<li><a data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0" className="fancybox video-button-one wow fadeInRight animated" data-wow-delay="1.5s">See live demo. <i class="flaticon-play-button icon-right"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
        );

    }
}

export default withRouter(HeaderBanner);
