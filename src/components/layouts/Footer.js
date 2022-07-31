import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle bg-dark pt-3 pb-2 text-light">
        <div className="container">
          <div className="row"></div>
          {/*Footer BOTTOM */}
          <div className="footer-bottom"></div>
          <p className="text-xs-center text-center ">
            &copy;{new Date().getFullYear()} ZeraLixo - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
