import React from "react";
import {Footer} from "react-materialize";

const FooterSect = () =>{
  return (
  <div>
    <Footer id="page-footer">
        <div className="row">
          <div className="col s12" id="footerContent">
            <h6 className="white-text">HiScholar.com</h6>
          </div>
        </div>
        <div id="footer-copyright">
          <div className="row">
            <div className="col s12">
              © 2017 BRSS
            </div>
          </div>
        </div>
     </Footer>
   </div>
  );
}


export default FooterSect;
