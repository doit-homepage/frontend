import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import styles from './StudyDetail.css';

function StudyDetail() {
  return (
    <div className="StudyDetail">
      <div className="text">
        스터디 / 프로젝트
        </div>
        <hr width = "1020"></hr>
        <div className="Box_top">
        <h1>[글머리] 웹스터디 모집 </h1>   
        <h2>모집인원: 5명</h2> 
        <h5>2020-03-08 - 2020-03-18</h5>
        </div>

        <div className="writerinfo">
          정성원    2020-03-07    조회수210
          </div>
        <p div className='add'>첨부파일: 참고자료.xlsx</p>
      <div className="Box_bottom"></div>
      <hr width = "1020"></hr>
      
      <h3>이전글</h3>
      <h4>        [글머리] 이전글 제목</h4>
     

      <hr width = "1020"></hr>

      
      <h3>다음</h3>
      <h4>        [글머리] 다음 제목</h4>
      

      <hr width = "1020"></hr>

    
      <button className ="List">목록</button>
      
      
    </div>
  );
}
  
export default StudyDetail;
  