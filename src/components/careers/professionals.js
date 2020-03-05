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
                                    <div className="row">
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-building text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Company Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-map-marker text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Address" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-hospital-o text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="City" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-globe text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="State/Province" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-globe text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Postal Code" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-globe text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Country" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-phone text-info"></i></div>
                                            </div>
                                            <input type="tel" className="form-control" id="Phone" name="Phone" placeholder="Phone" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                            </div>
                                            <input type="email" className="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                                        </div>
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                            </div>
                                            <textarea className="form-control" placeholder="Details" required></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <input type="submit" value="Send Message" className="btn btn-info rounded-0 py-2" />
                                    </div>
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
