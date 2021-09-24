import React, { Component } from "react";
import Avatar from "../chatList/Avatar";
import style from './style.module.css';

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`flex ${this.props?.user === "me" ? "justify-end items-end" : null} mb-6 mx-2`}
      >
        {this.props?.user != "me" ? (
          <div className="flex justify-end items-end">
            <Avatar isOnline="active" image={this.props.image} size />
          </div>
        ) : null}
        <div>
          {this.props.messageImages ? (
            this.props.messageImages.map(item => (
              <img className={`bg-gray-200 flex mx-2 mt-2 w-[200px] rounded-t-md ${this.props?.user === "me" ? "rounded-bl-md" : "rounded-br-md"}`}
                src={item}
              />
            ))
          ) : (
            <div className={`bg-gray-100 flex p-4 mx-2 w-[250px] rounded-t-md ${this.props?.user === "me" ? "rounded-bl-md" : "rounded-br-md"}`}>
              <div className={style["chat__msg"]}>{this.props.msg}</div>
            </div>
          )}
          <div className="flex justify-between text-xs px-5">
              <span className="text-gray-400">16 mins ago</span>
              <span className="text-gray-400">Seen 1.03PM</span>
          </div>
        </div>
        {this.props?.user === "me" ? (
          <Avatar isOnline="active" image={this.props.image} size/>
        ) : null}
      </div>
    );
  }
}
