import React, { Component } from "react";
import TopBar from "../TopBar/TopBar.js";
import "./NoticeDetail.css";
import axios from "axios";
import { render } from "@testing-library/react";

class NoticeDetail extends React.Component {
  NoticeData = (event) => {
    axios.get("/api/info/1").then((res) => {
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
  componentWillMount() {
    this.NoticeData();
  }

  render() {
    return (
      <div className="NoticeDetail">
        <div className="NoticeDetail_text">공지사항</div>
        <hr width="1020"></hr>
        <div className="NoticeDetailBox_top">
          <p className="NoticeDetail_notice">[글머리] 공지사항입니다 </p>
          <p className="NoticeDetail_Like">12</p>
          <button onClick={this.NoticeLike()}>❤️</button>
        </div>
        <div className="NoticeDetail_writerinfo">
          정성원 &nbsp; 2020-03-07 &nbsp; 조회수210
        </div>
        <p div className="NoticeDetail_add">
          첨부파일: 참고자료.xlsx
        </p>
        <div className="NoticeDetailBox_bottom"></div>
        <hr width="1020"></hr>

        <p className="NoticeDetail_next">이전글 &nbsp;&nbsp;</p>
        <p className="NoticeDetail_bottomtext">[글머리] 이전글 제목</p>

        <hr width="1020"></hr>

        <p className="NoticeDetail_next">다음 &nbsp;&nbsp;</p>
        <p className="NoticeDetail_bottomtext">[글머리] 다음 제목</p>

        <hr width="1020"></hr>

        <button className="NoticeDetail_List">목록</button>
      </div>
    );
  }
}
export default NoticeDetail;
