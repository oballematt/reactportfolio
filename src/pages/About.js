import React from "react"
import ProfilePic from "../../public/images/profile.jpg"
import Resume from "../../public/images/Resume.pdf"
import { Link } from "react-router-dom";


function About () {
    return (
        <div className="container style">
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid opacity bg-light text-center">
                    <div className="container">
                        <h1 className="display-4 opacity">About Me</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="card bg-light mb-3 opacity" style={{maxWidth: 2000}} >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={ProfilePic} className="img-thumbnail Profile" alt="Profile" height="300" width="250"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Hey! I'm Matthew,</h5>
                                    <p className="card-text" id="fontStyle">UT Coding Boot Camp student and former production manager with skills in directing and developing individuals in a fast paced, competitive industry. With the transition into web development, I strive to bring my experience as a manager and mesh them with the skills I'm learning at the coding boot camp to become a great and innovative developer. </p>
                                    <br/>
                                    <Link className="text-dark font" to={Resume} target="_blank">Link to PDF Resume</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        
    )
}

export default About