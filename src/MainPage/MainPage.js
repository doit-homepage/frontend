import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import style from './MainPage.css';

class MainPage extends Component{
    render(){
      var n=1; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
      var ObjectArray = new Array ();
      ObjectArray[1] = "./do-it 사진.jpg";
      ObjectArray[2] = "./do-it 사진2.jpg";
      ObjectArray[3] = "./do-it 사진3.png";
      function changeImage(){
        document.getElementById("MainPage_image").src=ObjectArray[n++];
        if(n>ObjectArray.length-1){
          n=1;
        }
        setTimeout(changeImage,7000);
      }
      setTimeout(changeImage,0);
      var k=1
      function changeBack(){
        document.getElementById("MainPage_back").src=ObjectArray[k++];
        if(k>ObjectArray.length-1){
          k=1;
        }
        setTimeout(changeBack,7000);
      }
      setTimeout(changeBack,0);
      return (
      <div className="MainPage">
        <div className="MainPage_up">
          <img id = "MainPage_image" src = "./do-it 사진.jpg"></img> 
          <img id = "MainPage_back" src = "./do-it 사진.jpg"></img> 
          <div className="MainPage_btns"> 
            <button id="MainPage_1" className="MainPage_btn"></button> 
            <button id="MainPage_1" className="MainPage_btn"></button> 
            <button id="MainPage_1" className="MainPage_btn"></button> 
          </div>  
        </div>
        <div className="MainPage_down">
          <div className="MainPage_Notice">
            <p id="MainPage_notice">공지사항</p>
            <p id="MainPage_more">more+</p>
            <div id="MainPage_notice1">  
              <object className="MainPage_noticeImgSet">
                  <img className="MainPage_noticeImg" src="./Do-it 로고.jpg"></img>
              </object>   
              <p id="MainPage_header">글머리</p>
              <p id="MainPage_title">Do-iT 공지사항 제목</p>
              <p id="MainPage_like1">좋아요: 5</p>
              <p id="MainPage_writer1">작성자</p>
              <p id="MainPage_date1">2021.01.01</p>
            </div>
            <div id="MainPage_notice2">  
              <object className="MainPage_noticeImgSet">
                  <img className="MainPage_noticeImg" src="./Do-it 로고.jpg"></img>
              </object>  
              <p id="MainPage_header">글머리</p>
              <p id="MainPage_title">Do-iT 공지사항 제목</p>
              <p id="MainPage_like2">좋아요: 5</p>
              <p id="MainPage_writer2">작성자</p>
              <p id="MainPage_date2">2021.01.01</p>
            </div>
          </div>
          <div className="MainPage_Study">
            <p id="MainPage_notice">스터디/프로젝트</p>
            <p id="MainPage_more">more+</p>
            <div id="MainPage_notice1">  
              <object className="MainPage_noticeImgSet">
                  <img className="MainPage_noticeImg" src="./Do-it 로고.jpg"></img>
              </object>   
              <p id="MainPage_header">글머리</p>
              <p id="MainPage_title">Do-iT 스터디/프로젝트 제목</p>
              <p id="MainPage_like1"> 모집인원: 5</p>
              <p id="MainPage_writer1">작성자</p>
              <p id="MainPage_date1">2021.01.01</p>
            </div>
            <div id="MainPage_notice2">  
              <object className="MainPage_noticeImgSet">
                  <img className="MainPage_noticeImg" src="./Do-it 로고.jpg"></img>
              </object>  
              <p id="MainPage_header">글머리</p>
              <p id="MainPage_title">Do-iT 스터디/프로젝트 제목</p>
              <p id="MainPage_like2">모집인원: 5</p>
              <p id="MainPage_writer2">작성자</p>
              <p id="MainPage_date2">2021.01.01</p>
            </div>
          </div>
        </div>
      </div>    
    );
    }
  }
  
export default MainPage;
  