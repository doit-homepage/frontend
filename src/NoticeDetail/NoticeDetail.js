import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import styles from './NoticeDetail.css';

function NoticeDetail() {
    return (
      <div className="NoticeDetail">
        <TopBar/>
        <div className="text">
          공지사항
          </div>
          <hr width = "1020"></hr>
          <div className="Box_top">
          <h1>[글머리] 공지사항입니다 </h1>   
          <h2>12 ❤️</h2> 
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
  
export default NoticeDetail;
