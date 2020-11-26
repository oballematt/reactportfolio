import React from 'react'
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card bg-light mb-3 opacity margin">
                        <div className="card-body">
                        <div className="text-center">
                        <Link to={{pathname:"https://www.facebook.com/matt.oballe/"}} target="_blank"> <img src="https://www.clker.com/cliparts/Q/i/m/K/Y/C/facebook-icon-th.png" height="50px" width="50px" alt="Facebook"/> </Link>
                            <Link to={{pathname:"https://www.linkedin.com/in/matt-oballe-4a1b0563/"}} target="_blank"> <img src="https://www.iconarchive.com/download/i82926/limav/flat-gradient-social/Linkedin.ico" height="50px" width="50px" alt="Linkedin"/></Link>
                            <Link to={{ pathname:"https://github.com/oballematt"}} target="_blank"> <img src="https://www.iconfinder.com/data/icons/social-15/200/github-icon-128.png" height="50px" width="50px" alt="Github"/> </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer