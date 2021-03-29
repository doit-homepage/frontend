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
          [글머리] 공지사항입니다
          </div>
          <div className="writerinfo">
            정성원    2020-03-07    조회수210
            </div>
          <p div className='add'>첨부파일: 참고자료.xlsx</p>
        <div className="Box_bottom"></div>
        <div className="border"></div>
      </div>
    );
};

export default NoticeDetail;
  