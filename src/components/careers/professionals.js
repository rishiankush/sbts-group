import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class Professional extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="AddressComp">
                <div className="container"> 
                <div className="row">
                    <div className="col-md-12">
                        <h2> Professionals </h2>
                        <p> There are currently no positions available.
Please feel free to submit your resume and when a position does become available we will look at the collected resumes. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form action="mail.php" method="post">
                            <div className="card rounded-0">
                                <div className="card-body p-3">
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-phone text-info"></i></div>
                                            </div>
                                            <input type="tel" className="form-control" id="Phone" name="Phone" placeholder="Phone" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                            </div>
                                            <input type="email" className="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                            </div>
                                            <textarea className="form-control" placeholder="Message" required></textarea>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <input type="submit" value="Send Message" className="btn btn-info rounded-0 py-2" />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        );

    }
}

export default withRouter(Professional);
