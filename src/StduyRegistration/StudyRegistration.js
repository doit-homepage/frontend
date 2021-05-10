import React, { Component } from 'react';
import style from './StudyRegistration.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios';
require('react-datepicker/dist/react-datepicker.css')

const StudyRegistration = () => {
    var state={
        title:'',
        header:'',
        content:'',
        date:'2020-02-02',
        writer:'admin'
    }
    var submit_Study = (event) => {
        state.title=document.getElementById('StudyRegistration_title').value;
        state.header=document.getElementById('StudyRegistration_header').value;
        state.content=document.getElementById('StudyRegistration_content').value;
        axios.post('/api/study', state).then((res) => {
            console.log(res)
            if (res.data.success == true) {
                window.location.href = '/StudyList'
                alert("등록 완료");
            } else {
                alert(res)
            }
        })
    }

    return(
        <div>
            <div className="StudyRegistration_header">
                공지사항 등록
            </div>
            <div className="StudyRegistration_content">
            <div className="StudyRegistration_front">
                게시번호
                <span style={{color:'#3689CF'}} className="StudyRegistration_span">23</span>
            </div>
            <div className="StudyRegistration_front">
                글머리
                <span className="StudyRegistration_span"><input id="StudyRegistration_header"></input></span>
            </div>
            <div className="StudyRegistration_front">
                제목
                <span className="StudyRegistration_span"><input id="StudyRegistration_title" style={{position: 'fixed', width: '20%'}}></input></span>
            </div>
            <div className="StudyRegistration_front">
                작성자
                <span className="StudyRegistration_span">23</span>
            </div>
            <div className="StudyRegistration_front">
                작성일
                <span className="StudyRegistration_span">23</span>
            </div>
            <div className="StudyRegistration_front">
                본문
                <div>
                    <input id="StudyRegistration_content" className="StudyRegistration_input"></input>
                </div>
            </div>
            <div className="StudyRegistration_file">
                첨부파일
                <input className="StudyRegistration_fileInput"></input>
                <button className="StudyRegistration_filePush">가져오기</button>
            </div>
            <div>
                <button className="StudyRegistrtaion_submit" onClick={submit_Study}>등록</button>
            </div>
            </div>
        </div>
    );
}

export default StudyRegistration;
