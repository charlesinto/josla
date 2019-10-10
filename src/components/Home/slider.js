import React, { Component } from 'react';
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import background1 from "../../assets/Images/background1.png";
import background2 from "../../assets/Images/background2.png";
import background3 from "../../assets/Images/background3.png";

class SliderHome extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Slider {...settings}>
                <div >
                    <div className="slider-images" style={{background:`url(${background1})`}} >
                        <div className="slider-button">
                            <div className="landing-intro">We</div>
                            <div className="landing-intro">Innovate</div>
                            <Button className={classes.landingPageButton} variant="outlined">About Us</Button>
                        </div>
                        
                    </div>
                </div>
                <div >
                    <div className="slider-images" style={{background:`url(${background2})`}}>
                    <div className="slider-button">
                            <div className="landing-intro">We</div>
                            <div className="landing-intro">Compute</div>
                            <Button className={classes.landingPageButton} variant="outlined">About Us</Button>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="slider-images" style={{background:`url(${background3})`}}>
                    <div className="slider-button">
                            <div className="landing-intro">We</div>
                            <div className="landing-intro">Engineer</div>
                            <Button className={classes.landingPageButton} variant="outlined">About Us</Button>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const styles = (theme) => ({...theme.spreadIt})

  export default withStyles(styles)(SliderHome);