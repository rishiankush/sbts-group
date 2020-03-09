import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';


class ContactUsform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:'',
            message:'',
        };
    }

    onChange(e) {
        if (e.target.id === 'name') {
            // console.log('inside name ****** ',e.target.value);
            this.setState({ name: e.target.value });
        } else if (e.target.id === 'phone') {
            // console.log('inside phone ****** ',e.target.value);
            this.setState({ phone: e.target.value });
        } else if (e.target.id === 'email') {
            // console.log('inside email ****** ',e.target.value);
            this.setState({ email: e.target.value });
        } else if (e.target.id === 'message') {
            // console.log('inside message ****** ',e.target.value);
            this.setState({ message: e.target.value});
            // console.log(e.target.value);
        }
    }

    submitContactForm(e){
        e.preventDefault();
        let reqObj = {
            "first_name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "message": this.state.message
        }

        console.log(reqObj)
    
        fetch('https://sbts-group.herokuapp.com/users/contact',{
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqObj),
        })
        .then(response =>  response.json())
        .then(resData => {
            if(resData.statusCode == 200){
                alert(resData.message);
            }
            this.setState({
                name:'',
                email:'',
                phone:'',
                message:'',
            });
        })
        .catch((error)=>{
            console.log('error ******* ',error)
        })
        
    }

    render() {
        return (
            <div className="AddressComp">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={(e)=>this.submitContactForm(e)}>
                            <div className="card rounded-0">
                                <div className="card-body p-3">
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input type="text" onChange={(e)=>this.onChange(e)} className="form-control" id="name" name="name" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-phone text-info"></i></div>
                                            </div>
                                            <input type="tel" onChange={(e)=>this.onChange(e)} className="form-control" id="phone" name="phone" placeholder="Phone" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                            </div>
                                            <input type="email" onChange={(e)=>this.onChange(e)} className="form-control" id="email" name="email" placeholder="ejemplo@gmail.com" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                            </div>
                                            <textarea name="message" onChange={(e)=>this.onChange(e)} id="message" className="form-control" placeholder="Message" required></textarea>
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
        );

    }
}

export default withRouter(ContactUsform);
