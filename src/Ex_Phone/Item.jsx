import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card mx-3" style={{ width: "18rem" }}>
        <img
          src={this.props.data.hinhAnh}
          className="card-img-top"
          alt={this.props.data.tenSP}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.tenSP}</h5>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.handleChangeDetail(this.props.data);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
