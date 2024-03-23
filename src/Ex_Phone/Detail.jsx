import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div className="container my-5" style={{ display: this.props.isDisplay }}>
        <div className="row">
          <div className="col-4 mx-auto">
            <h1>{this.props.detail.tenSP}</h1>
            <img
              src={this.props.detail.hinhAnh}
              alt=""
              style={{ width: "300px" }}
            />
          </div>
          <div className="col-8 mx-auto">
            <h1>Thông số kĩ thuật</h1>
            <ul class="list-group list-group-flush text-start mt-3">
              <li class="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <h5 className="my-0">Màn hình</h5>
                  </div>
                  <div className="col-6">
                    <p className="my-0">{this.props.detail.manHinh}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <h5 className="my-0">Hệ điều hành</h5>
                  </div>
                  <div className="col-6">
                    <p className="my-0">{this.props.detail.heDieuHanh}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <h5 className="my-0">Camera trước</h5>
                  </div>
                  <div className="col-6">
                    <p className="my-0">{this.props.detail.cameraTruoc}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <h5 className="my-0">Camera sau</h5>
                  </div>
                  <div className="col-6">
                    <p className="my-0">{this.props.detail.cameraSau}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <h5 className="my-0">RAM</h5>
                  </div>
                  <div className="col-6">
                    <p className="my-0">{this.props.detail.ram}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <h5 className="my-0">ROM</h5>
                  </div>
                  <div className="col-6">
                    <p className="my-0">{this.props.detail.rom}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
