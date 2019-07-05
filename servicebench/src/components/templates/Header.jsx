import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import LogoImage from '../../resources/imgs/SB_logo.png';
import '../../Stylesheets/home.css';


var logoStyle = {
    background: `url(${LogoImage})`,
    width: `22%`,
    height: 80,
    marginTop: `-22px`,
    cursor: 'pointer'

}
var headerMenuColor = {
    color: '#ecb215'
}


const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark  height_75_px header_position marginTop_minus_21">
            <button type="button" data-target="#navbarCollapse"
                data-toggle="collapse" className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div style={logoStyle} />
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item " className="headerIcon" style={{ textAlign: "center" }}>
                        <Link className='nav-link' to='/home'>
                            <Icon name='home' size='big' className="colorLogo"/>
                            <br /><span>Home</span></Link>
                    </li>
                    <li className="nav-item" className="headerIcon" style={{ textAlign: "center" }} ><Link className='nav-link' to='/serviceJobs'>
                        <Icon name='tasks' size='big' className="colorLogo" /><br />Jobs</Link></li>
                    <li className="nav-item" className="headerIcon"  style={{ textAlign: "center" }}><Link className='nav-link' to='/parts'>
                        <Icon name='cogs' size='big' className="colorLogo" /><br />Parts</Link></li>
                    <li className="nav-item" className="headerIcon"  style={{ textAlign: "center" }}><Link className='nav-link' to='/claims'>
                        <Icon name='file alternate' size='big' className="colorLogo" /><br />Claims</Link></li>
                    <li className="nav-item" className="headerIcon"  style={{ textAlign: "center" }}><Link className='nav-link' to='/home'>
                        <Icon name='copy' size='big' className="colorLogo" /><br />Documents</Link></li>
                    <li className="nav-item" className="headerIcon"  style={{ textAlign: "center" }}><Link className='nav-link' to='/home'>
                        <Icon name='handshake' size='big' className="colorLogo" /><br />Contracts</Link></li>
                    <li className="nav-item" className="headerIcon"  style={{ textAlign: "center" }}><Link className='nav-link' to='/home'>
                        <Icon name='edit' size='big' className="colorLogo" /><br />Registrations</Link></li>
                    <li className="nav-item" className="headerIcon"  style={{ textAlign: "center" }}><Link className='nav-link' to='/home'>
                        <Icon name='book' size='big' className="colorLogo" /><br />Reports</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header;