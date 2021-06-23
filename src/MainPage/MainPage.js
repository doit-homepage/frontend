import React, { Component } from 'react';
import style from './MainPage.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios';
import { render } from '@testing-library/react';
require('react-datepicker/dist/react-datepicker.css')

class MainPage extends Component {
  state = {
    info_list: [],
    study_list: []
  }
  
  constructor(props){
    super(props)
 
  }
  async getInfo() {
    await axios.get('/api/main', {}).then((res) => {
      this.setState({ info_list: res.data.info_list })
      this.setState({study_list: res.data.study_list})
    })
  }
    
    
  componentDidMount(){
    this.getInfo()
  }
 
  render(){
    //var n = 1; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
    var ObjectArray = new Array();
    ObjectArray[1] = "./do-it 사진.jpg";
    ObjectArray[2] = "./do-it 사진2.jpg";
    ObjectArray[3] = "./do-it 사진3.png";
    var study_list = this.state.info_list;
    var info_list = [];
    
    



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
              <p id="MainPage_more">more+</p>
            </Link>

            {this.state.info_list.map((data) => {
              return (
                <div id="MainPage_notice1">
                  <object className="MainPage_noticeImgSet">
                    <img className="MainPage_noticeImg" src="./Do-it 로고.jpg"></img>
                  </object>
                  <div id="MainPage_header">{data.header}</div>
                  <div id="MainPage_title">{data.title}</div>
                  <div id="MainPage_like1">좋아요: {data.like}</div>
                  <div id="MainPage_writer1">{data.writer}</div>
                  <div id="MainPage_date1">{data.date}</div>
                </div>
              )
            })}
          </div>
          
          <div className="MainPage_Study">
            <p id="MainPage_notice">스터디/프로젝트</p>
            <Link to="/StudyList">
              <p onClick="endTime()" onClick={this.endTime} id="MainPage_more">more+</p>
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
                  <div id="MainPage_writer1">{data.teacher}</div>
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
