import React, { Component } from "react";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="avatar relative">
        <div className="avatar-img">
          <img src={this.props.image} alt="#" className={`${this.props.size ? "h-6 w-6" : "h-12 w-12"} rounded-full`}/>
        </div>
        <div className={`h-2 w-2 rounded-full absolute bottom-0 right-1 bg-green-500 ${this.props.isOnline}`}></div>
      </div>
    );
  }
}
