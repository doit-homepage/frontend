import React, { Component } from "react";
import TopBar from "../TopBar/TopBar.js";
import styles from "./StudyDetail.css";
import axios from 'axios'

class StudyDetail extends React.Component {
  NoticeData = (event) => {
    axios.get("/api/study/:id").then((res) => {
      console.log(res.study.id);
    });
  };
  componentWillMount() {
    this.NoticeData()
  }
  render() {
    return (
      <div className="StudyDetail">
        <div className="StudyDetail_text">스터디 / 프로젝트</div>
        <hr width="1020"></hr>
        <div className="StudyDetail_Box_top">
          <p className="StudyDetail_title">[글머리] 웹스터디 모집 </p>
          <p className="StudyDetail_studentnum">모집인원: 5명 &nbsp;</p>
          <p className="SudyDetail_date">2020-03-08 - 2020-03-18</p>
        </div>

        <div className="StudyDetail_writerinfo">
          정성원 &nbsp; 2020-03-07&nbsp; 조회수210
        </div>
        <p div className="StudyDetail_add">
          첨부파일: 참고자료.xlsx
        </p>
        <div className="StudyDetail_Box_bottom"></div>
        <hr width="1020"></hr>

        <p className="StudyDetail_next">이전글 &nbsp;</p>
        <p className="StudyDetail_bottomtext"> [글머리] 이전글 제목</p>

        <hr width="1020"></hr>

        <p className="StudyDetail_next">다음 &nbsp;&nbsp;</p>
        <p className="StudyDetail_bottomtext">[글머리] 다음 제목</p>

        <hr width="1020"></hr>

        <button className="StudyDetail_List">목록</button>
      </div>
    );
  }
}

export default StudyDetail;
