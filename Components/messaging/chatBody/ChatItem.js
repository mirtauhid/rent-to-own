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
        className={`flex ${this.props?.user === "me" ? "justify-end items-end" : null} mb-6 mr-4`}
      >
        {this.props?.user != "me" ? (
          <div className="flex justify-end items-end">
            <Avatar isOnline="active" image={this.props.image} size />
          </div>
        ) : null}
        <div>
          <div className={style["chat__item__content"]}>
            <div className={style["chat__msg"]}>{this.props.msg}</div>
          </div>
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
