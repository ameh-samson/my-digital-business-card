import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img className="info--profile-image" src="./images/samson-ameh.png" />
      <h1 className="info--title">Samson Ameh</h1>
      <p className="info--sub-title">Frontend Developer</p>
      <a href="#">
        <p className="info--web">samsonameh.com</p>
      </a>
      <div className="info--social-links">
        <a href="mailto:amehsam69@gmail.com?subject=Email%20Subject">
          <div className="info-social-links-inner-mail">
            <img
              className="info-social-links-icons"
              src="./images/Mail-icon.png"
              alt="Mail icon"
            />
            <p>Email</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/samsonameh/" target="_blank">
          <div className="info-social-links-inner-linkedIn">
            <img
              className="info-social-links-icons"
              src="./images/LinkedIn-icon.png"
              alt="LinkedIn icon"
            />
            <p>LinkedIn</p>
          </div>
        </a>
      </div>
    </div>
  );
}
