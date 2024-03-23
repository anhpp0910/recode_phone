import React, { Component } from "react";
import { phoneArr } from "./data";
import List from "./List";
import Detail from "./Detail";

export default class Ex_Phone extends Component {
  state = {
    listPhone: phoneArr,
    detail: {},
    isDisplay: "none",
  };
  handleChangeDetail = (phone) => {
    this.setState({ detail: phone, isDisplay: "block" });
  };
  render() {
    return (
      <div>
        <List
          listPhone={this.state.listPhone}
          handleChangeDetail={this.handleChangeDetail}
        />
        <Detail detail={this.state.detail} isDisplay={this.state.isDisplay} />
      </div>
    );
  }
}
