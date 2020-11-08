import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';



function Contact(props) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.image}
        alt={props.name}
      />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
        <div className={props.isOnline ? 'status-offline' : 'status-online'}></div>
          <p className="status-text">{props.statustext}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  statustext: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Contact;
