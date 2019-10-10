import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import josla from "../assets/Images/josla2.png";
import image14 from "../assets/Images/image14.png";
import mapIcon from "../assets/Images/map_icon.png";
import mailIcon from "../assets/Images/mail_icon.png";
import phoneIcon from "../assets/Images/phone_icon.png";
import twitter from "../assets/Images/twitter.png";
import facebook from "../assets/Images/facebook.png";
import linkedln from "../assets/Images/linkedln.png";
import instagram from "../assets/Images/instagram.png";


class Footer extends Component {
    render() {
        return (
            <div className="footer add-padding">
                    <div className="container">
                        <Grid container spacing={2}>
                            <Grid item sm>
                                <div className="footer-sections">
                                    <div className="footer-header">
                                        <img src={josla} alt="logo" />
                                    </div>
                                    <div>
                                        
                                        <div>
                                            At Josla, we combine our love for computing, enthusiasm for technology and 
                                            interest in relationship development, to create an environment that can 
                                            foster the growth of local talents in software and hardware engineering.
                                        </div>
                                        <div style={{margin:'20px 0'}}>
                                            <img src={image14} alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm>
                            <div className="footer-sections">
                                    <div className="footer-title footer-title footer-header">
                                        Quick Links
                                    </div>
                                    <ul>
                                        <li><a href="/">Products</a></li>
                                        <li><a href="/about">Us</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/career">Career</a></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item sm>
                            <div className="footer-sections contact">
                                    <div className="footer-title footer-header">
                                        Contact Us
                                    </div>
                                    <div>
                                        <div className="contact-info">
                                            <div><img src={mapIcon} alt="map icon"/></div>
                                            <div>The OA &amp; A Parthnership, 6th Floor Fortune Tower, 
                                                Adeyemo Alakija Street, Victoria Island, Lagos.</div>
                                        </div>
                                        <div className="contact-info">
                                            <div><img src={phoneIcon} alt="map icon"/></div>
                                            <div>+234 (0) 8087488793 </div>
                                        </div>
                                        <div className="contact-info">
                                            <div><img src={mailIcon} alt="map icon"/></div>
                                            <div>corporate@josla.com.ng</div>
                                        </div>
                                    </div>
                                    <div className="social-links">
                                        <div><img src={linkedln} alt="social icon" /></div>
                                        <div><img src={facebook} alt="social icon" /></div>
                                        <div><img src={twitter} alt="social icon" /></div>
                                        <div><img src={instagram} alt="social icon" /></div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <div className="footer-hr"></div>
                        <Grid container>
                            <Grid item sm>
                                <div>&copy; 2019 Josla</div>
                            </Grid>
                            <Grid item sm>
                                <div>
                                    <div className="footer-keywords">
                                        <span>Innovate |</span>
                                        <span> Compute | </span>
                                        <span>Engineer</span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm>
                                <div className="footer-privacy">Privacy</div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
        );
    }
}

export default Footer;