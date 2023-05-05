import React from "react";
import MenuBar from "../../../components/menu";
import OnePageHeader from "../../../components/onePageHeader";
import "./contactSection.scss";
import FacebookIcon from "../../../assets/images/fb.png";
import SecImage from "../../../assets/images/a-7.png";
import InstaIcon from "../../../assets/images/insta.png";
import LinkdinIcon from "../../../assets/images/linkdin.png";
export default function ContactSection() {
  return (
    <div>
      <div className="contact-section-banner">
        <div className="main-contact-banner">
          <div className="service-flex">
            <div className="service-flex-items">
              <div className="image-style">
                <img src={SecImage} alt="SecImage" />
              </div>
            </div>
            <div className="service-flex-items">
              <div>
                <div className="service-text-style-for-page">
                  <div className="first-text">
                    <h2>contact</h2>
                    <p>
                      For a full list of services to help solve your problem or advance your breeding program please contact 
                    </p>
                  </div>
                  <div className="mobile-email-text">
                    <a href="mailto:howdy@rareearthgenomics.com?subject = Feedback&body = Message">
                      howdy@rareearthgenomics.com
                    </a>
                  </div>
                  <h2 className="mobile-text">CONNECT</h2>
                  <div className="social-media">
                    <a href="https://www.instagram.com/rareearthgenomics/"><img src={InstaIcon} alt="InstaIcon" /></a>
                   
                  </div>
                  <div className="subscribe-text">
                    <p>subscribe to our newsletter</p>
                    <div className="mail-grid">
                      <div className="mail-grid-items">
                        <input type="text" placeholder="YOUR EMAIL" />
                      </div>
                      <div className="mail-grid-items">
                        <button>enter</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
