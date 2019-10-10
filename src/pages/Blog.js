import React, { Component } from 'react';
import NavBar from "../components/Home/NavBar";
import CustomSlider from "../common/customSlider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import withStyles from "@material-ui/core/styles/withStyles";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

import image12 from "../assets/Images/image12.png";
import image10 from "../assets/Images/image10.png";
import image11 from "../assets/Images/image11.png";
import woman from "../assets/Images/woman.png";
import black from "../assets/Images/black.png";

class Blog extends Component {
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
        const { classes} = this.props;
        return (
            <div style={{position:'relative'}}>
                <NavBar />
                <CustomSlider text="b" image={black} >
                    <div className='landing-intro' 
                    style={{marginLeft:'-73px',fontSize:'2.5em',
                        paddingBottom:'10vh', textAlign:'center'}}
                    >Blog
                        <div className="form-group row" style={{margin:'30px 0',display:'flex', justifyContent:'center'}}>
                            <div className="col-sm-6" style={{marginTop: 10}}>
                                <input type="email" className="form-control" id="inputPassword" placeholder="Enter Email Address" />
                            </div>
                            <div className="col-sm-2">
                                <Button className={classes.jobApplyButton} endIcon={<Icon>send</Icon>} >subscribe</Button>
                            </div>
                            
                        </div>
                    </div>
                </CustomSlider>

                <div className="container">
                    <div
                        className="after-landing-intro" style={{ textAlign: 'left' }}
                    >Latest Post</div>
                    <div className="lines" style={{ justifyContent: 'flex-start' }}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <Grid container sm={12} md={12} spacing={2}>
                        <Grid item sm={12} md={4}>
                            <div style={{textAlign:'center'}}>
                                <div><img src={image12} 
                                style={{width:'100%', height:'auto', maxWidth:'300px', margin:'20px auto'}} 
                                alt="book logo" /></div>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={8}>
                            
                            <div className="what-we-do" style={{textAlign: 'left'}}>
                            <article style={{color:'#000', margin:'20px 0'}}>
                                <p>Cyber Security and Mobility</p>
                                <p> 3rd Nov 2018 by karina </p>
                            </article>
                            What is cyber security? Cyber security is the practice of protecting systems, networks, programs which include hardware, software and data from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; or interrupting normal business processes. Why is cyber security important?
                             Innovation is a key driver for competition and more generally… Continue reading
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{ margin:'20px 0' }}>
                    <div
                        className="after-landing-intro" style={{ textAlign: 'left'}}
                    >Older Posts</div>
                    <div className="lines" style={{ justifyContent: 'flex-start' }}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    </div>
                    <section className="section-blog divider" style={{background:'#fff'}}>
                    <Grid container sm={12} md={12} spacing={4}>
                            
                            <Grid sm={12} md={4} item>
                                <div className="client-logo">
                                    <div>
                                        <img src={image11} alt="logo"></img>
                                    </div>
                                    <p>Cognitive Microservices</p>
                                    <p>Josla is Lagos-based technology company whose 
                                        core capabilities lie in digital</p>
                                </div>
                            </Grid>
                            <Grid sm={12} md={4} item>
                                <div className="client-logo">
                                    <div>
                                        <img src={image10} alt="logo"></img>
                                    </div>
                                    <p>Introducing our new product - KIRA</p>
                                    <p>The world is changing and its only right to change 
                                        with it. People and businesses</p>
                                </div>
                            </Grid>
                            <Grid sm={12} md={4} item>
                                <div className="client-logo">
                                    <div>
                                        <img src={woman} alt="logo"></img>
                                    </div>
                                    <p>Moving form a novice to a front-end Dev</p>
                                    <p>At the start of my final year , 
                                        I knew I wanted to get involved in the Nigerian</p>
                                </div>
                            </Grid>
                        </Grid>
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
                             <Button className={classes.getQuoteButton} onClick={(event) => this.onButtonClick(event)} >Enquire</Button>
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
            minWidth: 180,
            '&:hover': {
                backgroundColor: '#009051',
                color: '#FFF'
            }
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

export default withStyles(styles)(Blog);