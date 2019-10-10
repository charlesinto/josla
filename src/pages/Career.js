import React, { Component } from 'react';
import { connect } from "react-redux";
import CustomSlider from "../common/customSlider";
import NavBar from "../components/Home/NavBar";
import black from "../assets/Images/black.png";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Job from "../common/Jobs";

import chess from "../assets/Images/chess.png";

import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import * as actions from '../actions';

class Career extends Component {
    state={
        showModal: false
    }
    componentDidMount(){
        this.props.getJobs()
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
            <div style={{position:'relative'}}>
                <NavBar />
                <CustomSlider text="b" image={black} >
                    <div className='landing-intro' 
                    style={{marginLeft:'-73px',fontSize:'2.5em',
                        paddingBottom:'30vh', textAlign:'center'}}
                    >Career</div>
                </CustomSlider>

                <div className="container">
                    <div className="career-page-landing-intro">
                        <div>Awesome!</div>
                        <div>Welcome to our career page. Are you ready to join our team create the future?</div>
                    </div>

                    <Grid container>
                        <Grid sm item></Grid>
                        <Grid sm item>
                            <div className="after-landing-intro">Our Story</div>
                            <div className="lines">
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>

                        </Grid>
                        <Grid sm item></Grid>
                    </Grid>
                    <Grid container sm={12} md={12} spacing={2}>
                        <Grid item sm={12} md={4}>
                            <div style={{textAlign:'center'}}>
                                <div><img src={chess} 
                                style={{width:'70%', height:'auto', maxWidth:'200px', margin:'20px auto'}} 
                                alt="book logo" /></div>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={8}>
                            <div className="what-we-do" 
                                style={{textAlign: 'left', lineHeight: 2, width:'100%'}}>
                            At Josla, we combine our love for computing, enthusiasm for technology and interest in relationship development, to create an environment that can foster the growth of local talents in software and hardware engineering. 
                            <div style={{marginTop:16}}>Join Josla today and together we can create tomorrow and the future.</div>
                            </div>
                        </Grid>
                    </Grid>
                    <section className="section-2">
                        <div style={{marginBottom: 20}}>
                            <div>
                                <div className="after-landing-intro">Job Openings</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </div>
                        <Job jobs={this.props.jobs} />
                        {/* <div className="jobs" style={{padding:20, backgroundColor:'#F4F1F1', borderRadius:3}}>
                            <div className="title">Digital Marketer</div>
                            <div className="jd">Are you social media savvy? Are you creative, enthusiastic and data-driven? Then this is the team for you.
                             Join Josla and help take the future to the people.</div>
                             <div className="job-apply"><Button className={classes.jobApplyButton} variant="contained">Apply Now</Button></div>
                        </div>
                        <div className="jobs" style={{padding:20, backgroundColor:'#F4F1F1', borderRadius:3}}>
                            <div className="title">Backend Software Engineer</div>
                            <div className="jd">Interested in building softwares that can change the future for the best? At Josla, 
                            you will be joining a team of young professionals to build tomorrow and the future.</div>
                             <div className="job-apply"><Button className={classes.jobApplyButton} variant="contained">Apply Now</Button></div>
                        </div> */}
                    </section>
                    <section className="divider">
                        {/* <Grid container>
                            <Grid sm item></Grid>
                            <Grid sm item>
                                
                                

                            </Grid>
                            {/* <Grid sm item></Grid> 
                        </Grid> */}
                    </section>
                    <section className="section-blog divider get-in-touch">
                        <div className="what-we-do">At Josla, we love extraordinary talents. If you think 
                        </div>
                        <div className="center" style={{marginBottom:40}}>
                            You are one that can help change the future, fantastic lets have your details.</div>
                        
                        <div style={{textAlign:'center'}}>
                             <Button className={classes.jobApplyButton} onClick={(event) => this.onButtonClick(event)} >Upload Resume</Button>
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
                            <h2 id="transition-modal-title" className="modal-title" style={{color:'#000'}}>Upload Resume</h2>
                            <div >
                                <form style={{width: '90%', margin:'20px auto'}}>
                                    <div className="form-group">
                                        <label for="fullname" className="col-sm-2 col-form-label">Full Name*</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" id="fullname" value="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="email" className="col-sm-2 col-form-label">Email*</label>
                                        <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="phonenumber" className="col-sm-2 col-form-label">Portfolio Link*</label>
                                        <div className="col-sm-10">
                                        <input type="email" className="form-control" id="phonenumber" placeholder="" />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="col-sm-2 col-form-label" for="exampleFormControlFile1">Resume*</label>
                                        <div className="col-sm-10">
                                            <div className="form-control" style={{padding: '9px 0 9px 8px', height:'fit-content'}}>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label for="coverletter" className="col-sm-2 col-form-label">Cover Letter*</label>
                                        <div className="col-sm-10">
                                        <textarea className="form-control" id="coverletter" placeholder="" />
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
            height:'80%',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            position: 'absolute',
            top: '5vh'
          },
        
    }
}
const mapStateToProps = state => {
    const {home: {jobs}} = state;
    console.log('jobs', jobs)
    return {
        jobs
    }
    
}
export default connect(mapStateToProps, actions)(withStyles(styles)(Career));