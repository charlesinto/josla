import React, { Component } from 'react';
import NavBar from "./NavBar";
import Slider from "./slider";

class home extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <NavBar />
                <Slider />
            </div>
        );
    }
}

export default home;