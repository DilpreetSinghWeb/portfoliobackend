import "./footer.css";

import webLogo from "../../images/mainLogo.png";
import { LinkedIn,WhatsApp } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_container">
        <div className="footer_container_middle">
          <img src={webLogo} alt="FooterLogo" />
          <p className="footer_container_middle_phone_links">
            <div className="footer_container_phone"><a href="mailto:dilpreetweb65@gmail.com" style={{textDecoration:"underline"}}>dilpreetweb65@gmail.com</a></div>
            <div className="footer_container_links">
              <LinkedIn className="footer_container_links_icons" />
              <WhatsApp className="footer_container_links_icons" />
              <a href="tel:+91-987-732-0263" style={{textDecoration:"underline"}}>+91-987-732-0263</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
