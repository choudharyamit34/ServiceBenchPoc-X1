import React from 'react';
import {Link} from 'react-router-dom';
import  { Icon } from 'semantic-ui-react'

const Header = () =>(
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button type="button" data-target="#navbarCollapse"
                        data-toggle="collapse" className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a href="#" className="navbar-brand">Welcome to Service Bench</a>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className='nav-link' to='/home'>
                        <Icon name='home' size='big' /><br />Home</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/serviceJobs'>
                        <Icon name='tasks' size='big'/><br />Jobs</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/home'>
                        <Icon name='cogs' size='big'/><br />Parts</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/claims'>
                        <Icon name='file alternate' size='big'/><br />Claims</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/home'>
                        <Icon name='copy' size='big'/><br />Documents</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/home'>
                        <Icon name='handshake' size='big'/><br />Contracts</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/home'>
                        <Icon name='edit' size='big'/><br />Registrations</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/home'>
                        <Icon name='book' size='big'/><br />Reports</Link></li>
                    </ul>
                </div>
            </nav>
    </header>
)

export default Header;