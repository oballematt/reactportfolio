import React from "react"
import { Link } from "react-router-dom";

function Project(props) {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                        <img src={props.img} class="card-img" alt="project" />
                        <div class="card-img-overlay">
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-3 bg-light text-black opacity" style={{ maxWidth: 800 }}>
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">{props.description}</p>
                                    <Link to={props.projectLink} className="btn btn-secondary">Check out the project!</Link>
                                    <hr/>
                                    <Link to={props.repoLink} className="btn btn-secondary">Check out the repository!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}
export default Project


