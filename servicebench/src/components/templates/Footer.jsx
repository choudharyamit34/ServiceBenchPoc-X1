import React from 'react';
import { Link } from 'react-router-dom';
var style = {
  backgroundColor: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "right",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "4%",
  width: "100%",
}


const Footer = () => (

  <div >
    <div style={style}>
      <span>© Asurion 1994-2019. All Rights Reserved | </span>
      <a href="https://www.asurion.com/terms-conditions/" target="_blank">Terms of Use</a>
      <span>|</span>
      <a href="https://d3pubnymrxzo91.cloudfront.net/privacy-policy/GDPR-ServiceBench-Privacy-Policy.html" target="_blank">Privacy Policy</a>
    </div>
  </div>

)

export default Footer;