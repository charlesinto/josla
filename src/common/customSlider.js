import React, { Component } from 'react';
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

class SliderHome extends Component {
    render() {
        const { classes, image, text, children } = this.props;
        return (
            <Slider {...settings}>
                <div >
                    <div className="slider-images" style={{background:`url(${image})`,}} >
                        { text ? (
                            <div className="slider-button">
                            <div className={`landing-intro center-intro`}> {text}</div>
                            <div className="landing-intro"></div>
                            <div style={{width:'100%', height:'100%'}}>
                                {children}
                            </div>
                        </div>
                        ) : <div className="slider-button">
                        <div className="landing-intro">We</div>
                        <div className="landing-intro">Innovate</div>
                        <Button className={classes.landingPageButton} variant="outlined">About Us</Button>
                    </div> }
                        
                        
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