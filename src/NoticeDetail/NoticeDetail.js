import React, { Component } from "react";
import TopBar from "../TopBar/TopBar.js";
import "./NoticeDetail.css";
import axios from "axios";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

class NoticeDetail extends React.Component {
  NoticeData = (event) => {

    var wind = window.location.href;
    var afterwind = wind.split("/");
    var current_location = "/api/info/" + afterwind[4];
    console.log(afterwind);
    axios.get(current_location).then((res) => {
      this.state.NoticeData = res.data.data[0];
      console.log(res);
    });
  };
  NoticeLike = (event) => {
    axios
      .post("/api/info/like", { user_id: "userid", notice_id: "noticeid" })
      .then(function () {
        console.log("좋아요 등록");
      })
      .catch(function (error) {
        console.log("좋아요 등록 실패");
      });
  };

  state = {
    NoticeData: [],
  };

  componentWillMount() {
    this.NoticeData();
  }

  render() {
    // var data = {};
    const { NoticeData } = this.state;
    console.log(NoticeData);
    return (
      <div className="NoticeDetail">
        <div className="NoticeDetail_text">공지사항</div>
        <hr width="1020"></hr>
        <div className="NoticeDetailBox_top">
          <p className="NoticeDetail_notice"> [글머리] 공지사항 입니다!</p>
          <p className="NoticeDetail_Like">{this.state.NoticeData.like}</p>
          <button onClick={this.NoticeLike()}>❤️</button>
        </div>
        <div className="NoticeDetail_writerinfo">
          유가은 &nbsp; 2021.09.11 &nbsp; 조회수210
        </div>
        <p div className="NoticeDetail_add">
          첨부파일: 참고자료.xlsx
        </p>
        <div className="NoticeDetailBox_bottom"></div>
        <hr width="1020"></hr>

        <Link to="/NoticeDetail">
          <p className="NoticeDetail_next">이전</p>
        </Link>

        <Link to="/NoticeDetail/'current_location-1'">
          <p className="NoticeDetail_bottomtext"> [글머리] 제목</p>
        </Link>

        <hr width="1020"></hr>

        <Link to="/NoticeDetail/'current_location+1'">
          <p className="NoticeDetail_next">다음 </p>
        </Link>

        <Link to="/NoticeDetail">
          <p className="NoticeDetail_bottomtext"> [글머리] 제목</p>
        </Link>

        <hr width="1020"></hr>

        <Link to="/NoticeList">
          <p className="NoticeDetail_List">목록</p>
        </Link>
      </div>
    );
  }
}
export default NoticeDetail;
