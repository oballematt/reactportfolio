import React from "react"
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg opacity navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/about">Matthew Oballe</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link font" to="/about">About Me <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link font" to="/portfolio">Portfolio</Link>
                    <Link className="nav-link font" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav