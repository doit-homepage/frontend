import React, { Component } from 'react';
import style from './MainPage.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios';
require('react-datepicker/dist/react-datepicker.css')

class MainPage extends Component {
  state = {
    info_list: [],
    study_list: []
  }
  async getInfo() {
    await axios.get('/api/main', {}).then((res) => {
      this.setState({ info_list: res.data.info_list })
      this.setState({study_list: res.data.study_list})
      console.log(res.data.info_list);
    })
    
  }
  componentDidMount() {
    this.getInfo()
  }
  render() {
    var n = 1; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
    var ObjectArray = new Array();
    ObjectArray[1] = "./do-it 사진.jpg";
    ObjectArray[2] = "./do-it 사진2.jpg";
    ObjectArray[3] = "./do-it 사진3.png";
    var timer1;
    var timer2;
    var study_list = this.state.info_list;
    var info_list = [];

    function changeImage() {
      document.getElementById("MainPage_image").src = ObjectArray[n++];
      if (n > ObjectArray.length - 1) {
        n = 1;
      }
    }
    timer1 = setInterval(changeImage, 7000);

    var k = 1
    function changeBack() {
      document.getElementById("MainPage_back").src = ObjectArray[k++];
      if (k > ObjectArray.length - 1) {
        k = 1;
      }
    }

    timer2 = setInterval(changeBack, 7000);

    function endTime() {
      clearInterval(timer1);
      clearInterval(timer2);
    }
    function test() {
      axios.post('/api/asdfs', {}).then((res) => {
        console.log(res)
      })
    }

    return (
      <div className="MainPage">
        <div className="MainPage_up">
          <img id="MainPage_image" src="./do-it 사진.jpg"></img>
          <img id="MainPage_back" src="./do-it 사진.jpg"></img>
          <div className="MainPage_btns">
            <button id="MainPage_1" className="MainPage_btn"></button>
            <button id="MainPage_1" className="MainPage_btn"></button>
            <button id="MainPage_1" className="MainPage_btn"></button>
          </div>
        </div>
        <div className="MainPage_down">
          <div className="MainPage_Notice">
            <p id="MainPage_notice">공지사항</p>
            <Link to="/NoticeList">
              <p onClick="endTime()" id="MainPage_more">more+</p>
            </Link>

            {this.state.info_list.map((data) => {
              return (
                <div id="MainPage_notice1">
                  <object className="MainPage_noticeImgSet">
                    <img className="MainPage_noticeImg" src="./Do-it 로고.jpg"></img>
                  </object>
                  <div id="MainPage_header">{data.header}</div>
                  <div id="MainPage_title">{data.title}</div>
                  <div id="MainPage_like1">좋아요: 5</div>
                  <div id="MainPage_writer1">{data.writer}</div>
                  <div id="MainPage_date1">{data.date}</div>
                </div>
              )
            })}
          </div>
          
          <div className="MainPage_Study">
            <p id="MainPage_notice">스터디/프로젝트</p>
            <Link to="/StudyList">
              <p onClick="endTime()" onClick={endTime} id="MainPage_more">more+</p>
            </Link>
            {this.state.study_list.map((data) => {
              return (
                <div id="MainPage_notice1">
                  <object className="MainPage_noticeImgSet">
                    <img className="MainPage_noticeImg" src="./Do-it 로고.jpg"></img>
                  </object>
                  <div id="MainPage_header">{data.header}</div>
                  <div id="MainPage_title">{data.title}</div>
                  <div id="MainPage_like1"> 모집인원: {data.student_num}</div>
                  <div id="MainPage_writer1">작성자</div>
                  <div id="MainPage_date1">{data.date}</div>
                </div>
              )
            })}
            
           
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
