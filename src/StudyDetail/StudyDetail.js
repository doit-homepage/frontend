import React, { Component } from "react";
import TopBar from "../TopBar/TopBar.js";
import styles from "./StudyDetail.css";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

class StudyDetail extends React.Component {
  StudyData = (event) => {
    var wind = window.location.href;
    var afterwind = wind.split("/");
    var current_location = "/api/study/" + afterwind[4];
    console.log(afterwind);
    axios.get(current_location).then((res) => {
      console.log(res);
    });
  };

  componentWillMount() {
    this.StudyData();
  }

  render() {
    return (
      <div className="StudyDetail">
        <div className="StudyDetail_text">스터디 / 프로젝트</div>
        <hr width="1020"></hr>
        <div className="StudyDetail_Box_top">
          <p className="StudyDetail_title">
            {this.state.StudyDetailData.header}{" "}
            {this.state.StudyDetailData.title}{" "}
          </p>
          <p className="StudyDetail_studentnum">
            모집인원: {this.state.StudyDetailData.student_num} &nbsp;
          </p>
          <p className="SudyDetail_date">
            {this.state.StudyDetailData.staer_date}-{" "}
            {this.state.StudyDetailData.end_date}
          </p>
        </div>

        <div className="StudyDetail_writerinfo">
          {this.state.StudyDetailData.writer}&nbsp; 2020-03-07 &nbsp; 조회수210
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

        <Link to="/StudyList">
          <p className="StudyDetail_List">목록</p>
        </Link>
      </div>
    );
  }
}

export default StudyDetail;
