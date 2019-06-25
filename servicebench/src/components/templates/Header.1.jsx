import React from 'react';
import {Link} from 'react-router-dom';

const Header1 = () =>(
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
                    <button type="button" data-target="#navbarCollapse"
                        data-toggle="collapse" className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a href="#" className="navbar-brand">Welcome to Service Bench</a>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className='nav-link' to='/home'>Home</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/serviceJobs'>ServiceJobs</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/claims'>Claims</Link></li>
                    </ul>
                </div>
            </nav>
    </header>
)

export default Header1;