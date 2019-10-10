import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LandingPage from "../components/Home/home";
import withStyles from "@material-ui/core/styles/withStyles";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

import analytics from "../assets/Images/analytics.png";
import appDev from "../assets/Images/appDev.png";
import phone from "../assets/Images/phone.png";
import car from "../assets/Images/car.png";
import power from "../assets/Images/power.png";
import image1 from "../assets/Images/image1.png";
import image2 from "../assets/Images/image2.png";
import image3 from "../assets/Images/image3.png";
import image4 from "../assets/Images/image4.png";
import image5 from "../assets/Images/image5.png";
import image6 from "../assets/Images/image6.png";
import image10 from "../assets/Images/image10.png";
import image11 from "../assets/Images/image11.png";
import image12 from "../assets/Images/image12.png";
import chat from "../assets/Images/chat.png";
import network from "../assets/Images/network.png";



class Home extends Component {
    state = {
        showModal: false
    }
    handleClose = () => {
        this.setState({
            showModal: false
        }, () => console.log('state', this.state))
    }
    onButtonClick = (event) => {
        event.preventDefault();
        console.log('clicked Job')
        this.setState({
            showModal: true
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <LandingPage />
                <div className="container">


                    <Grid container>
                        <Grid sm item></Grid>
                        <Grid sm item>
                            <div className="after-landing-intro">What We Offer</div>
                            <div className="lines">
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>

                        </Grid>
                        <Grid sm item></Grid>
                    </Grid>
                    <div className="what-we-do">
                        We are at the intersection between Digital innovation,
                        Cloud computing and Service Engineering to deliver optimal customer service.
                    </div>
                    <Grid container spacing={2}>
                        <Grid item sm>
                            <div className="home-image-container">
                                <img className="home-images" src={analytics} alt="analytics" />
                            </div>
                            <div className="after-landing-intro">
                                Data Science As A Service
                            </div>
                            <div className="what-we-do">
                                Josla helps organisations who want to leverage both 
                                operational and customer data to generate insight that guides business outcomes. 
                            </div>
                        </Grid>
                        <Grid item sm>
                            <div className="home-image-container">
                                <img className="home-images" src={appDev} alt="app development" />
                            </div>
                            <div className="after-landing-intro">
                                Web and Mobile Development
                            </div>
                            <div className="what-we-do">
                                At Josla, we take the time to understand clients’ needs and work hard to deliver 
                                bespoke web and mobile apps that support their visions, 
                                and integrate seamlessly with their business process and goals
                            </div>
                        </Grid>
                    </Grid>
                    <section>
                        <div className="get-quote-container">
                            <Button className={classes.getQuoteButton} variant="contained">Get Quote</Button>
                        </div>
                    </section>
                    <section className="section-2">
                        <Grid container>
                            <Grid sm item>
                                <div className="section-2-div">
                                    <div className="box1">
                                        <div className="box1-detail-icon">
                                            <div className="chat-img-span"><img src={chat} alt="chat logo" /></div>
                                            <div>Kira</div>
                                        </div>
                                        {/* <div className="box1-inner-first"> */}
                                            
                                            <div className="box1-details">
                                                <div>
                                                Kira is an AI-driven application that helps internet-enabled Nigerians 
                                            with a registered BVN to access financial services such as digital wallet, payment transactions, 
                                            spend analytics and P2P lending. Want to know more about our Kira product? 
                                                </div>
                                                
                                            </div>
                                            <div style={{textAlign:'center', marginBottom: 16}}>
                                                <Button className={classes.customButton1} variant="outlined">learn more</Button>
                                            </div>
                                        {/* </div> */}
                                        {/* <div className="box1-inner-second"></div> */}
                                        
                                    </div>
                                </div>
                            </Grid>
                            <Grid sm item>
                                <div className="section-2-div">
                                    <img src={phone} alt="phone" />
                                </div>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="section-2">
                        <Grid container>
                            <Grid sm item>
                                <div className="section-2-div">
                                    
                                   <img src={car} alt="car" />
                                    
                                </div>
                            </Grid>
                            <Grid sm item>
                                <div className="section-2-div">
                                    <div className="box2">
                                        <div className="box2-box1">
                                            <div className="b2b1-b1"></div>
                                            <div className="b2b1-b2">
                                                <div className="box1-detail-icon">
                                                    <div className="title">HaloTrak</div>
                                                    <div className="chat-img-span"><img src={network} alt="network logo" /></div>
                                                    
                                                </div>
                                        {/* <div className="box1-inner-first"> */}
                                            
                                            <div className="box1-details">
                                                <div>
                                                HaloTrak is an IoT-based solution that helps internet-enabled Nigerians with at least one duly registered vehicle to securely manage their mobile assets through locate &amp;
                                                 track, review of operational information and on-demand insurance premiums.
                                                </div>
                                                
                                            </div>
                                            <div style={{textAlign:'center', marginBottom: 16, marginTop:40}}>
                                                <Button className={classes.customButton2} variant="outlined">Get started</Button>
                                            </div>
                                        {/* </div> */}
                                        {/* <div className="box1-inner-second"></div> */}
                                        
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="section-2">
                        <Grid container>
                            <Grid sm item>
                                <div className="section-2-div">
                                    <div style={{background:"#A4B0BC", height:'360px'}}>
                                    <div className="box2">
                                        <div className="box2-box1" style={{display:'flex', height:'100%', alignItems:'center'}}>
                                            <div className="b2b1-b2" >
                                            
                                            <div className="box1-details">
                                                <div>
                                                peGrid helps both public and private distribution utilities to match supply and demand of electrical energy in real-time through integration of 
                                                renewable energy systems and disaggregation of electricity consumption.
                                                </div>
                                                
                                            </div>
                                            
                                        {/* </div> */}
                                        {/* <div className="box1-inner-second"></div> */}
                                        
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid sm item>
                                <div className="section-2-div">
                                    <img src={power} alt="power" />
                                </div>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="divider">
                        {/* <Grid container>
                            <Grid sm item></Grid>
                            <Grid sm item>
                                
                                

                            </Grid>
                            {/* <Grid sm item></Grid> 
                        </Grid> */}
                        <div>
                            <div>
                                <div className="after-landing-intro">Key Partners and Customers</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="what-we-do">
                            Not to brag, but we ve had the pleasure to work and
                            partner with some amazing companies..
                        </div>
                    </section>
                    <section className="section-2 divider">
                        <Grid container>
                            <Grid sm item>
                                <div className="client-logo">
                                    <img src={image2} alt="logo"></img>
                                </div>
                            </Grid>
                            <Grid sm item>
                                <div className="client-logo">
                                    <img src={image5} alt="logo"></img>
                                </div>
                            </Grid>
                            <Grid sm item>
                            <div className="client-logo">
                                    <img src={image1} alt="logo"></img>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid sm item>
                                <div className="client-logo">
                                    <img src={image6} alt="logo"></img>
                                </div>
                            </Grid>
                            <Grid sm item>
                                <div className="client-logo">
                                    <img src={image4} alt="logo"></img>
                                </div>
                            </Grid>
                            <Grid sm item>
                            <div className="client-logo">
                                    <img src={image3} alt="logo"></img>
                                </div>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="section-blog divider">
                        <div>
                            <div>
                                <div className="after-landing-intro">Blog</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="what-we-do">
                            Yeah! And here are our latest blog posts
                        </div>
                        <Grid container spacing={4}>
                            <Grid sm item>
                                <div className="client-logo">
                                    <div>
                                        <img src={image12} alt="logo"></img>
                                    </div>
                                    <p>Cyber security and Mobility</p>
                                    <p>What is cyber security? Cyber 
                                        security is the practice of protecting systems</p>
                                </div>
                            </Grid>
                            <Grid sm item>
                                <div className="client-logo">
                                    <div>
                                        <img src={image11} alt="logo"></img>
                                    </div>
                                    <p>Cognitive Microservices</p>
                                    <p>Josla is Lagos-based technology company whose 
                                        core capabilities lie in digital</p>
                                </div>
                            </Grid>
                            <Grid sm item>
                                <div className="client-logo">
                                    <div>
                                        <img src={image10} alt="logo"></img>
                                    </div>
                                    <p>Introducing our new product - KIRA</p>
                                    <p>The world is changing and its only right to change 
                                        with it. People and businesses</p>
                                </div>
                            </Grid>
                        </Grid>
                        <div style={{textAlign:'center'}}>
                             <Button className={classes.landingPageButton} variant="outlined">See More</Button>
                        </div>
                    </section>
                    <section className="section-blog divider get-in-touch">
                        <div>
                            <div>
                                <div className="after-landing-intro">Get In Touch</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="what-we-do">
                            Ready to Innovate, Compute and Engineer? You can call us or leave a request and 
                            we will reply as soon as possible. 
                            We are always glad to see you in our office from 9am to 6pm weekdays.
                        </div>
                        <div className="center add-margin" style={{marginBottom:0}}>The OA &amp; A Partnership, 6th Floor Fortune Tower</div>
                        <div className="center" style={{marginBottom:20}} >27/29, 
                            Adeyemo Alakija Str, Victoria Island, Lagos, Nigeria.</div>
                        <div className="center add-margin">Contact Us on</div>
                        <div className="center ">Phone - +234 (0) 8087488793 Email</div>
                        <div className="center" style={{marginBottom:20}}>Email - corporate@josla.com.ng </div>
                        <div style={{textAlign:'center'}}>
                             <Button className={classes.getQuoteButton}  onClick={(event) => this.onButtonClick(event)}  >Enquire</Button>
                        </div>
                    </section>
                </div>
                
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    /* eslint no-restricted-globals:0 */
                    open={this.state.showModal}
                    onClose={() => this.handleClose()}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={this.state.showModal}>
                        {
                        <div className={classes.paper}>
                            <span className="close-icon" onClick={this.handleClose}>X</span>
                            <h2 id="transition-modal-title" className="modal-title" style={{color:'#000'}}>Get In Touch</h2>
                            <div >
                                <form style={{width: '90%', margin:'20px auto'}}>
                                    <div className="form-group">
                                        <label for="fullname" className="col-sm-2 col-form-label">Full Name</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" id="fullname" value="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="email" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="phonenumber" className="col-sm-2 col-form-label">Enquiry type</label>
                                        <div className="col-sm-10">
                                            <select class="form-control">
                                                <option>Default select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="coverletter" className="col-sm-2 col-form-label">Some few words</label>
                                        <div className="col-sm-10">
                                        <textarea style={{height:200}} className="form-control" id="coverletter" placeholder="" />
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="job-apply" style={{width:'100%', textAlign:'center', margin:'20px 0'}}><Button 
                                className={classes.jobApplyButton} variant="contained">Send</Button></div>
                        </div> 
                    }
                    
                    </Fade>
                </Modal>
            </div>
        );
    }
}

const styles = (theme) => {
    return {
        ...theme.spreadIt,
        getQuoteButton:{
            ...theme.spreadIt.getQuoteButton,

            '&:hover': {
                backgroundColor: '#ff4040',
                color: '#FFF'
            }
        },
        landingPageButton:{
            ...theme.spreadIt.landingPageButton,
            color: '#161515',
            fontFamily: 'Roboto, sans-serif',
            margin: '0 auto',
            fontWeight:'bold'
        },
        customButton1:{
            ...theme.spreadIt.landingPageButton,
            color: '#fff',
            fontFamily: 'Roboto, sans-serif',
            margin: '0 auto',
            fontWeight:'bold',
            width: 'fit-contents'
        },
        customButton2:{
            ...theme.spreadIt.landingPageButton,
            color: '#161515',
            fontFamily: 'Roboto, sans-serif',
            margin: '0 auto',
            fontWeight:'bold',
            width: 'fit-contents'
        },
        jobApplyButton:{
            background:'#009051',
            color:'#fff',
            fontFamily:'Roboto sans-serif',
            minWidth: 180
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY:'auto',
            height: '100vh'
          },
          paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            width:'80%',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            position: 'absolute',
            top: '5vh'
          },
    }
}

export default withStyles(styles)(Home);