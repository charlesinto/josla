import React, { Component } from 'react';
import NavBar from "../components/Home/NavBar";
import CustomSlider from "../common/customSlider";
import aboutLanding from "../assets/Images/aboutLanding.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

import book from "../assets/Images/book.png";
import cloudComputing from "../assets/Images/cloudComputing.png";
import service from "../assets/Images/service.png";
import idea from "../assets/Images/idea.png";
import avatar1 from "../assets/Images/avatar1.png";
import avatar2 from "../assets/Images/avatar2.png";
import avatar3 from "../assets/Images/avatar3.png";
import avatar4 from "../assets/Images/avatar4.png";
import avatar5 from "../assets/Images/avatar5.png";
import blacBackground from "../assets/Images/blackBackground.png";


class About extends Component {
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
        const {classes} = this.props;
        return (
            <div style={{position:'relative'}}>
                <NavBar />
                <CustomSlider image={aboutLanding} text="About Us" />

                <div className="container">


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
                                <div><img src={book} 
                                style={{width:'70%', height:'auto', maxWidth:'200px', margin:'20px auto'}} 
                                alt="book logo" /></div>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={8}>
                            <div className="what-we-do" style={{textAlign: 'left'}}>
                            Josla Electric Company Ltd., Josla is a Lagos-based technology company established in 2015. The company was founded by Akinlabi Ajelabi in pursuit of his entrepreneurial dream to leverage modern day technology that create optimal service experiences for the average Nigerian. Over the last four years of operations, we have built business competency in areas of innovation management, data science, software development and internet of- thing (IoT) engineering. This is reflected in the number of innovative projects we have embarked. Our delivery approach is through collaboration with notable established organisations as well as the core development of digital products that has the potentials to 
                            impact service offerings of key industries within the Nigerian business environment.
                            </div>
                        </Grid>
                    </Grid>
                    <section className="section-2">
                        <div style={{backgroundImage:`url(${blacBackground})`, height:'287px',
                          backgroundSize:'cover', margin:'20px 0 0 0'}} >
                            <div style={{color:'#fff', fontSize:'30px',
                             fontFamily:'Roboto sans-seriff', padding: '20px 0 0 10px', fontWeight: 'normal'}}>Our Vision</div>
                            <div 
                                style={{textAlign:'center', color:'#fff',
                                 fontFamily:'Roboto sans-seriff', fontWeight: 'normal', fontSize:'30px', marginTop: 30}}>
                            Our vision is to be at the intersection of digital innovation,
                             cloud computing and service engineering to deliver optimal customer service experiences.
                            </div>
                        </div>
                    </section>
                    <section className="section-2">
                        <div style={{backgroundColor: '#222121',padding:20, marginBottom:20}}>
                            <Grid container spacing={2}>
                                <Grid item sm={12} md={4}>
                                    <div className="service"><img  src={idea} alt="idea" /></div>
                                    <p>Digital Innovation</p>
                                    <p> Transform traditional business models &amp; processes with digital technologies</p>
                                </Grid>
                                <Grid item sm={12} md={4}>
                                    <div className="service"><img src={cloudComputing} alt="cloudComputing" /></div>
                                    <p>Cloud Computing</p>
                                    <p> Leverage cost effective computing power and other IT resources via the internet.</p>
                                </Grid>
                                <Grid item sm={12} md={4}>
                                    <div className="service" style={{marginTop:40}}><img src={service} alt="service" /></div>
                                    <p>Service Engineering</p>
                                    <p> Apply first principle of engineering to build concept into tangible value propositions.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </section>
                    <section className="section-2">
                        <div style={{marginBottom: 20}}>
                            <div>
                                <div className="after-landing-intro">Core Value</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </div>
                        <div style={{padding:20}}>
                        <Grid container spacing={2}>
                                <Grid item sm={12} md={3}>
                                    <div className="value"></div>
                                    <p>Commitment</p>
                                    <p>We show daily commitment as individual to achieve our collective goals.</p>
                                </Grid>
                                <Grid item sm={12} md={3}>
                                    <div className="value"></div>
                                    <p>Smart Work</p>
                                    <p> We work smart using agile and lean methodologies to create continous value.</p>
                                </Grid>
                                <Grid item sm={12} md={3}>
                                    <div className="value"></div>
                                    <p>Keep It SImple</p>
                                    <p>We employ design principle across every business 
                                        facet to build simple solutions to everyday problems.</p>
                                </Grid>
                                <Grid item sm={12} md={3}>
                                    <div className="value"></div>
                                    <p>Social Responsibility</p>
                                    <p>We believe that it is up to us to deliver the type of environment the next generation Nigerians can prosper</p>
                                </Grid>
                        </Grid>
                        </div>
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
                                <div className="after-landing-intro">Our Team</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-2 divider">
                        <Grid container>
                            <Grid sm item>
                                <div className="avatar-logo">
                                    <img src={avatar1} alt="logo"></img>
                                </div>
                                <p>Akinlabi Ajelabi</p>
                                <p>CEO/Data Scientist</p>
                            </Grid>
                            <Grid sm item>
                                <div className="avatar-logo">
                                    <img src={avatar2} alt="logo"></img>
                                </div>
                                <p>Babatunde Adeniyi</p>
                                <p>COO/Innovation Lead</p>
                            </Grid>
                            <Grid sm item>
                            <div className="avatar-logo">
                                    <img src={avatar3} alt="logo"></img>
                                </div>
                                <p>Ayodeji Ilesanmi</p>
                                <p>Service Designer</p>
                            </Grid>
                            <Grid sm item>
                                <div className="avatar-logo">
                                    <img src={avatar4} alt="logo"></img>
                                </div>
                                <p>First and last name</p>
                                <p>Front-end developer</p>
                            </Grid>
                            <Grid sm item>
                                <div className="avatar-logo">
                                    <img src={avatar5} alt="logo"></img>
                                </div>
                                <p>First and last name</p>
                                <p>Front-end developer</p>
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

export default withStyles(styles)(About);