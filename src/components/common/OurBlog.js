import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class OurBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <div className="agn-home-blog our-blog-one">
                    <img src="images/shape/shape-58.svg" alt="" className="shape-one" />
                    <img src="images/shape/shape-57.svg" alt="" className="shape-two" />
                    <img src="images/shape/shape-9.svg" alt="" className="shape-three" />
                    <img src="images/shape/shape-55.svg" alt="" className="shape-four" />
                    <div className="container">
                        <div className="theme-title-one text-center">
                            <div className="upper-title">Our Blog</div>
                            <h2 className="main-title">Our Company News</h2>
                        </div>
                        <div className="blog-one-slider">
                            <div className="item">
                                <div className="single-blog-post">
                                    <div className="flip-box-front">
                                        <div className="clearfix">
                                            <img src="images/home/2.jpg" alt="" className="author-img" />
                                            <div className="author-info">
                                                <h6 className="name">Rashed Kabir.</h6>
                                                <div className="date">06 Aug 2018</div>
                                            </div>
                                        </div>
                                        <a href="#" className="title">Internet advertising what Went wrong.</a>
                                        <p>Having a home based business is a wonderful asset to your life. The main problem time advertise..</p>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="author-info">
                                            <h6 className="name">Rashed Kabir.</h6>
                                            <div className="date">06 Aug 2018</div>
                                        </div>
                                        <a href="#" className="title">Internet advertising what Went wrong.</a>
                                        <a href="#" className="more"><i className='flaticon-next-1'></i></a>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="single-blog-post">
                                        <div className="flip-box-front">
                                            <div className="clearfix">
                                                <img src="images/home/5.jpg" alt="" className="author-img" />
                                                <div className="author-info">
                                                    <h6 className="name">Jannatul Ferdus.</h6>
                                                    <div className="date">07 Aug 2018</div>
                                                </div>
                                            </div>
                                            <a href="#" className="title">Internet advertising what Went wrong.</a>
                                            <p>Having a home based business is a wonderful asset to your life. The main problem time advertise..</p>
                                        </div>
                                        <div className="flip-box-back">
                                            <div className="author-info">
                                                <h6 className="name">Jannatul Ferdus.</h6>
                                                <div className="date">07 Aug 2018</div>
                                            </div>
                                            <a href="#" className="title">Internet advertising what Went wrong.</a>
                                            <a href="#" className="more"><i className='flaticon-next-1'></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="single-blog-post">
                                        <div className="flip-box-front">
                                            <div className="clearfix">
                                                <img src="images/home/6.jpg" alt="" className="author-img" />
                                                <div className="author-info">
                                                    <h6 className="name">Zubayer hasan.</h6>
                                                    <div className="date">05 Aug 2018</div>
                                                </div>
                                            </div>
                                            <a href="#" className="title">Internet advertising what Went wrong.</a>
                                            <p>Having a home based business is a wonderful asset to your life. The main problem time advertise..</p>
                                        </div>
                                        <div className="flip-box-back">
                                            <div className="author-info">
                                                <h6 className="name">Zubayer hasan.</h6>
                                                <div className="date">05 Aug 2018</div>
                                            </div>
                                            <a href="#" className="title">Internet advertising what Went wrong.</a>
                                            <a href="#" className="more"><i className='flaticon-next-1'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );

    }
}

export default withRouter(OurBlog);
