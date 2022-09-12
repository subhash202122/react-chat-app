import React, { Component } from "react";
import Avatar from "./Avatar";

export default class ChatListItems extends Component {
  constructor(props) {
    super(props);
  }
  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.props.image ? this.props.image : "https://media-exp1.licdn.com/dms/image/C4D03AQGlR62-jN6E9Q/profile-displayphoto-shrink_400_400/0/1659021878746?e=1668643200&v=beta&t=VmYsGmO0-ukdiZCtzsTrrKrBN_aaq4g12R0TclzW_mA"
          }
          isOnline={this.props.isOnline}
        />

        <div className="userMeta">
          <p>{this.props.name}</p>
          <span className="activeTime">32 mins ago</span>
        </div>
      </div>
    );
  }
}