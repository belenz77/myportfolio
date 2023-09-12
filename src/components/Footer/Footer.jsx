import React from "react";
import "./Footer.css";
import { MDBFooter } from "mdb-react-ui-kit";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";

//Footer Belen
function Footer() {
  return (
    <>
        <MDBFooter className="text-white text-center footerBelen spikes">
          

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Belén Zumalacarregui
            <a className="text-white " href="https://mdbootstrap.com/"></a>
            
                <a href="https://linkedin.com/in/belén-zumalacarregui-1907534" target={"_blank"}>
                  <MDBIcon fab icon="linkedin" size="2x" href="https://www.linkedin.com/in/bel%C3%A9n-zumalacarregui-1907534/" />
                  </a>

                  <a href="https://github.com/belenz77" target={"_blank"}>
                  <MDBIcon fab icon="github" size="2x"  href="https://github.com/belenz77" />
                  </a>
                  
                  
          </div>
          
        </MDBFooter>
    </>
  );
}

export default Footer;
