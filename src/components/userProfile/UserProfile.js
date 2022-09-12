import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGlR62-jN6E9Q/profile-displayphoto-shrink_400_400/0/1659021878746?e=1668643200&v=beta&t=VmYsGmO0-ukdiZCtzsTrrKrBN_aaq4g12R0TclzW_mA" />
          </div>
          <h4>Subhash</h4>
          <p>CEO & Founder  SCVClasses</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Education</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}