import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import withStyles from "@material-ui/core/styles/withStyles";

class Jobs extends Component {
    state={
        showModal: false,
        jobToShow: []
    }
    showJobs() {
        const {classes} = this.props;
        return this.props.jobs.map((job, i) => (
            <div className="jobs" key={i} style={{padding:20, backgroundColor:'#F4F1F1', borderRadius:3}}>
                <div className="title">{job.job_title}</div>
                <div className="jd">{job.job_description}</div>
                <div className="job-apply"><Button 
                    className={classes.jobApplyButton} variant="contained" onClick={(event) => this.onButtonClick(event, job)}>Apply Now</Button></div>
            </div>
        ))
    }
    renderJobs(){
        const {jobs} = this.props;
        return jobs.length > 0 ?
        this.showJobs()
        : null
    }
    onButtonClick = (event, job) => {
        event.preventDefault();
        console.log('clicked Job', job)
        this.setState({
            showModal: true,
            jobToShow: [job]
        })
    }
    handleClose = () => {
        this.setState({
            showModal: false
        }, () => console.log('state', this.state))
    }
    render() {
        const {classes} = this.props;
        const { jobToShow: job} = this.state; 
        return (
            <div>
                {this.renderJobs()}
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
                        {job.length > 0 ?
                        <div className={classes.paper}>
                            <span className="close-icon" onClick={this.handleClose}>X</span>
                            <h2 id="transition-modal-title" className="modal-title">Job Recruitment Form</h2>
                            <div id="transition-modal-description" className="job-pos">
                                <div className="after-landing-intro">Position</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                                <div className="job-pos">{job[0].job_title}</div>
                            </div>
                            <div id="transition-modal-description" className="job-pos">
                                <div className="after-landing-intro">Description</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                                <div className="job-pos">{job[0].job_description}</div>
                            </div>
                            <div id="transition-modal-description" className="job-pos">
                                <div className="after-landing-intro">Responsibilities</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                                <ul>
                                    {job[0].job_responsibilities.map((task,i) =>(
                                        <li key={i}>{task}</li>
                                    ) )}
                                </ul>
                            </div>
                            <div id="transition-modal-description" className="job-pos">
                                <div className="after-landing-intro">Qualification</div>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                                <ul style={{margin: '20px 0 10px 0px'}}>
                                    {job[0].qualification.map((task,i) =>(
                                        <li key={i}>{task}</li>
                                    ) )}
                                </ul>
                            </div>
                            <div style={{width: '70%', margin:'20px auto'}}>
                                <form>
                                    <div className="form-group row">
                                        <label for="fullname" className="col-sm-2 col-form-label">Full Name*</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" id="fullname" value="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="email" className="col-sm-2 col-form-label">Email*</label>
                                        <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="phonenumber" className="col-sm-2 col-form-label">Phone Number*</label>
                                        <div className="col-sm-10">
                                        <input type="email" className="form-control" id="phonenumber" placeholder="" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="job-title" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                        <input style={{background:'#F5EFEF',borderRadius:3, padding:'5px 0 10px 5px'}} type="text" readonly class="form-control-plaintext"
                                         id="job-title" value={job[0].job_title}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="coverletter" className="col-sm-2 col-form-label">Cover Letter*</label>
                                        <div className="col-sm-10">
                                        <textarea className="form-control" id="coverletter" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" for="exampleFormControlFile1">Resume*</label>
                                        <div className="col-sm-10">
                                            <div className="form-control" style={{padding: '9px 0 9px 8px', height:'fit-content'}}>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </form>

                            </div>
                            <div className="job-apply" style={{width:'100%', textAlign:'center', margin:'20px 0'}}><Button 
                                className={classes.jobApplyButton} variant="contained">Send</Button></div>
                        </div> 
                    : null
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
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            position: 'absolute',
            top: '5vh'
          },
        
    }
}

export default withStyles(styles)(Jobs);