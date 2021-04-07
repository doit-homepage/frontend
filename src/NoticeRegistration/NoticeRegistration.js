import React, { Component } from 'react';
import style from './NoticeRegistration.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios';
require('react-datepicker/dist/react-datepicker.css')

class NoticeResgistration extends Component {
    render() {
      return(
          <div>
              <div className="NoticeRegistration_header">
                  공지사항 등록
              </div>
              <div className="NoticeRegistration_content">
                <div className="NoticeRegistration_front">
                    게시번호
                </div>
                <div className="NoticeRegistration_front">
                    글머리
                </div>
                <div className="NoticeRegistration_front">
                    제목
                </div>
                <div className="NoticeRegistration_front">
                    작성자
                </div>
                <div className="NoticeRegistration_front">
                    작성일
                </div>
                <div className="NoticeRegistration_front">
                    본문
                </div>
                <div className="NoticeRegistration_front">
                    첨부파일
                </div>
              </div>
          </div>
      );
    }
  }

export default NoticeResgistration;
