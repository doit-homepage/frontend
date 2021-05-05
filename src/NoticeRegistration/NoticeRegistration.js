import React, { Component } from 'react';
import style from './NoticeRegistration.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios';
require('react-datepicker/dist/react-datepicker.css')

const NoticeRegistration = () => {
    var state={
        title:'',
        header:'',
        content:'',
        date:'2020-02-02',
        writer:'admin'
    }
    var submit_notice = (event) => {
        axios.post('/api/info', state).then((res) => {
            console.log(res)
            if (res.data.success == true) {
                window.location.href = '/NoticeList'
            } else {
                alert(res)
            }
        })
    }

    return(
        <div>
            <div className="NoticeRegistration_header">
                공지사항 등록
            </div>
            <div className="NoticeRegistration_content">
            <div className="NoticeRegistration_front">
                게시번호
                <span style={{color:'#3689CF'}} className="NoticeRegistration_span">23</span>
            </div>
            <div className="NoticeRegistration_front">
                글머리
                <span className="NoticeRegistration_span"><input type="text"></input></span>
            </div>
            <div className="NoticeRegistration_front">
                제목
                <span className="NoticeRegistration_span"><input type="text" style={{position: 'fixed', width: '20%'}}></input></span>
            </div>
            <div className="NoticeRegistration_front">
                작성자
                <span className="NoticeRegistration_span">23</span>
            </div>
            <div className="NoticeRegistration_front">
                작성일
                <span className="NoticeRegistration_span">23</span>
            </div>
            <div className="NoticeRegistration_front">
                본문
                <div>
                    <input type="text" className="NoticeRegistration_input"></input>
                </div>
            </div>
            <div className="NoticeRegistration_file">
                첨부파일
                <input className="NoticeRegistration_fileInput"></input>
                <button className="NoticeRegistration_filePush">가져오기</button>
            </div>
            <div>
                <button className="NoticeRegistrtaion_submit" onClick={submit_notice}>등록</button>
            </div>
            </div>
        </div>
    );
}

export default NoticeRegistration;
