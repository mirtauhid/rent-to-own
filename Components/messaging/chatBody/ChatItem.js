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
        className={`flex ${this.props?.user === "me" ? "justify-end items-end ml-10" : "ml-0 mr-14"} mb-6 mx-5`}
      >
        {this.props?.user != "me" ? (
          <div className="flex justify-end items-end">
            <Avatar isOnline="active" image={this.props.image ? this.props.image : "https://res.cloudinary.com/jingalalatech/image/upload/v1634006214/user-dummy-200x200-1_czlwxk_oevsbo.png"} size />
          </div>
        ) : null}
        <div>
          {this.props.messageImages ? (
            this.props.messageImages?.map((item, index) => (
              <img className={`bg-gray-200 flex mx-2 mt-2 min-w-[300px] max-w-[400px]  rounded-t-md ${this.props?.user === "me" ? "rounded-bl-md" : "rounded-br-md"}`}
                src={item}
                key={index}
              />
            ))
          ) : (
            <div className={`bg-gray-100 flex p-4 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] rounded-t-md ${this.props?.user === "me" ? "rounded-bl-md mr-2 bg-blue-100" : "rounded-br-md ml-2"}`}>
              <div className={style["chat__msg"]}>{this.props.msg}</div>
            </div>
          )}
          <div className="flex justify-center text-xs">
              <span className="text-gray-400">{this.props.createdAt?.toDate().toDateString()}</span>
              <span className="text-gray-400 ml-5">{this.props.createdAt?.toDate().toLocaleTimeString('en-US')}</span>
          </div>
        </div>
        {this.props?.user === "me" ? (
          <Avatar isOnline="active" image={this.props.sUserImage ? this.props.sUserImage : "https://res.cloudinary.com/jingalalatech/image/upload/v1634006214/user-dummy-200x200-1_czlwxk_oevsbo.png"} size/>
        ) : null}
      </div>
    );
  }
}
