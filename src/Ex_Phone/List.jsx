import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  renderListPhone = () => {
    return this.props.listPhone.map((item) => {
      return (
        <Item data={item} handleChangeDetail={this.props.handleChangeDetail} />
      );
    });
  };
  render() {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          {this.renderListPhone()}
        </div>
      </div>
    );
  }
}
