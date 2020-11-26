import React from "react"
import { Link } from "react-router-dom";

function Project(props) {
    return (
            <div className="col-md-4">
                <div className="card opacity bg-light">
                    <img src={props.img} className="card-img-top" alt="project" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5> 
                        <p className="card-text">{props.description}</p>
                        <Link to={{pathname:props.projectLink}} target="_blank" className="btn btn-secondary">Check out the project!</Link>
                        <br/>
                        <br/>
                        <Link to={{pathname:props.repoLink}} target="_blank" className="btn btn-secondary">Check out the repository!</Link>
                    </div>
                </div>
            </div>
    )
}
export default Project