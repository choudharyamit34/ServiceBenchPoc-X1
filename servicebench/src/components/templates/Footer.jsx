import React from 'react';
import {Link} from 'react-router-dom';
var style = {
  backgroundColor: "gray",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',

}

const Footer = () =>(
//   <footer class="page-footer font-small blue pt-4">
//   <div class="container-fluid text-center text-md-left">
//       <div class="row">
//          <div class="col-md-6 mt-md-0 mt-3">            
//             <p>© ASURION 1994 - 2019 . ALL RIGHTS RESERVED | TERMS OF USE| PRIVACY POLICY</p>
//          </div>
//       </div>
//    </div>
// </footer>
<div>
            <div style={phantom} />
            <div style={style}>
                         <p>© ASURION 1994 - 2019 . ALL RIGHTS RESERVED | TERMS OF USE| PRIVACY POLICY</p>
            </div>
        </div>

)

export default Footer;