import React from "react";
import "./Contact.css";

const name = "Buffy Summers";
const avatar =
  "https://i.pinimg.com/originals/07/e2/02/07e202d848969c7f265ba15f37af5234.jpg";
const isOnline = true;

//const qui récup le CSS selon le "props"
let className = "status-online";
if (isOnline) {
  className += " status-online";
} else {
  className += " status-offline";
}

function Contact() {
  return (
    <div>
      <div className="Contact">
        <img className="avatar" src={avatar} alt="hello buffy" />
        <div className="status-text">
          <div>
            <h4 className="name">{name}</h4>

            <div className="status" style={{ display: "inline-flex" }}>
              <div className={className}></div>
              <div>{isOnline ? "Online" : "Offline"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
