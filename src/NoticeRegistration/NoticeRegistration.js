import React, { Component } from 'react';
import style from './NoticeRegistration.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios';
require('react-datepicker/dist/react-datepicker.css')

const NoticeRegistration = (props) => {
    const { getToken, setToken } = props
    const token = getToken;
    let today=new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    if(day==1){
        day="월";
    }
    else if(day==2){
        day="화";
    }
    else if(day==2){
        day="화";
    }
    else if(day==3){
        day="수";
    }
    else if(day==4){
        day="목";
    }
    else if(day==5){
        day="금";
    }
    else if(day==6){
        day="토";
    }
    else if(day==7){
        day="일";
    }
    let current=year+"/"+month+"/"+date+"("+day+")";
    var state={
        title:'',
        header:'',
        content:'',
        date:current
    }
    var submit_notice = (event) => {
        state.title=document.getElementById('NoticeRegistration_title').value;
        state.header=document.getElementById('NoticeRegistration_header').value;
        state.content=document.getElementById('NoticeRegistration_content').value;
        axios.post('/api/info', state, {
            headers: {
                'x-access-token': token
            }
        }).then((res) => {
            
            if (res.data.success == true) {
                window.location.href = '/NoticeList'
                alert("등록 완료");
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
                글머리
                <span className="NoticeRegistration_span"><input id="NoticeRegistration_header"></input></span>
            </div>
            <div className="NoticeRegistration_front">
                제목
                <span className="NoticeRegistration_span"><input id="NoticeRegistration_title" style={{position: 'fixed', width: '20%'}}></input></span>
            </div>
            <div className="NoticeRegistration_front">
                작성일
                <span className="NoticeRegistration_span">{current}</span>
            </div>
            <div className="NoticeRegistration_front">
                본문
                <div>
                    <input id="NoticeRegistration_content" className="NoticeRegistration_input"></input>
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
