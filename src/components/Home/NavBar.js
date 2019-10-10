import React, { Component } from 'react';
import josla from "../../assets/Images/josla2.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="company-logo">
                   <Link to="/"> <img src={josla} alt='logo'  /></Link> 
                </div>
                <ul className="ui-menu">
                    <li><a href="/"> Products</a></li>
                    <li><Link to="/about">Us</Link></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/career">Career</a></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;