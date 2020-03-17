import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import LocationMap from '../../assets/images/marker/pin.png';
import {
    StaticGoogleMap,
    Marker
} from 'react-static-google-map';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="AddressComp">
                <div className="row">
                    <div className="col-md-12">
                        <div class="officelocations">

                        <p> 
                            <div class="mappin">
                             <img src={LocationMap} />
                             </div>
                             <span>Washington, DC, USA</span>
                             </p>

                            <p> 
                            <div class="mappin">
                             <img src={LocationMap} />
                             </div>
                             <span>Freetown, Sierra Leone</span>
                             </p>

                             <p> 
                            <div class="mappin">
                             <img src={LocationMap} />
                             </div>
                             <span> Pune, India </span>
                             </p>

                             <p> 
                            <div class="mappin">
                             <img src={LocationMap} />
                             </div>
                             <span> Monrovia, Liberia  </span>
                             </p>

                             <p> 
                            <div class="mappin">
                             <img src={LocationMap} />
                             </div>
                             <span> Kinsasha, Congo </span>
                             </p>

                             
                           

                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(Address);
