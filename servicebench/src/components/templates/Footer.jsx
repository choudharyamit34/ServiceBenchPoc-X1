import React from 'react';
import { Link } from 'react-router-dom';
import '../templates/Footer.css'
import '../../Stylesheets/mystyles.css'
var style = {
  background: '#ddd',
  padding: '15px',
  borderTop: 'solid 1px #bebebe',
  padding: '6px 15px',
  marginLeft: '65px'
}


const Footer = () => (
  <div className="footer">
    <section id="lab_social_icon_footer">
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
      <div >
        <div className="float_left">
          <span>© Asurion 1994-2019. All Rights Reserved |</span> <a href="">Contact Us</a>
        </div>
        <div className="marginTop_minus_10  float_right" >          
          <a href="https://www.facebook.com/ServiceBench1"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
          <a href="https://twitter.com/servicebench1"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
          <a href="https://www.youtube.com/user/ServiceBench"> <i id="social-gp" className="fa fa-youtube-square fa-3x social"></i></a>
          <a href="https://www.linkedin.com/company/servicebench"><i id="social-tw" className="fa fa-linkedin-square fa-3x social"></i></a>          
        </div>
      </div>


    </section>

  </div>

)

export default Footer;