import React, { Component } from "react";
import Avatar from "./Avatar";
import style from "./style.module.css";

export default class ChatListItems extends Component {
  constructor(props) {
    super(props);
  }
  selectChat = (e) => {
    console.log(e);
    console.log(this.props.userId)
    this.props.setSelectedId(this.props.userId)
    // for (
    //   let index = 0;
    //   index < e.currentTarget.parentNode.children.length;
    //   index++
    // ) {
    //   e.currentTarget.parentNode.children[index].classList.remove("active");
    // }
    // e.currentTarget.classList.add("active");
  };

  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`flex cursor-pointer px-2 py-3 hover:border ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          className="h-16 w-16"
          image={
            this.props.image ? this.props.image : "https://picsum.photos/200"
          }
          isOnline={true}
        />

        <div className="ml-4 w-56">
          <div className="flex relative">
            <p className="font-semibold text-sm">{this.props.name}</p>
            <span className="text-xs text-gray-500 absolute right-2 top-1">32 mins ago</span>
          </div>
          <span className="text-xs text-gray-500">You have 1 new message</span>
        </div>
      </div>
    );
  }
}
