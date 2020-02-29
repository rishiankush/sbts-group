import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import {
    StaticGoogleMap,
    Marker
} from 'react-static-google-map';

class StaticMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <StaticGoogleMap scale={4} className="static-map" size="600x200" apiKey="AIzaSyBIR6KYwHzXNFR-0ighiJDR5t2G4MrcaEg">
                <Marker.Group size={'tiny'}>
                    <Marker location="18.5204,73.8567" />
                    <Marker location="8.4657,-13.2317" />
                    <Marker location="38.9072,-77.0369" />
                </Marker.Group>
            </StaticGoogleMap>
        );

    }
}

export default withRouter(StaticMap);
