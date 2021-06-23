import React, { Component } from 'react';
import style from './StudyRegistration.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios';
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

require('react-datepicker/dist/react-datepicker.css')

const StudyRegistration = (props) => {
    
    const { getToken, setToken } = props
    const token = getToken;
    console.log(token)
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
    const [start_date, setStartDate] = useState(new Date());
    const [end_date, setEndDate] = useState(new Date());
    var state={
        title:'',
        header:'',
        content:'',
        start_date: start_date,
        end_date: end_date,
        student_num: ''
    }
    
    
    var submit_Study = (event) => {
        state.title=document.getElementById('StudyRegistration_title').value;
        state.header=document.getElementById('StudyRegistration_header').value;
        state.content=document.getElementById('StudyRegistration_content').value;
        state.student_num=document.getElementById('StudyRegistration_sel1').value;
        console.log(state);
        
        axios.post('/api/study', state, {
            headers: {
                'x-access-token': localStorage['x-access-token']
            }
        }).then((res) => {
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
                스터디 등록
            </div>
            <div className="StudyRegistration_content">
            
            <div className="StudyRegistration_front">
                글머리
                <span className="StudyRegistration_span"><input id="StudyRegistration_header"></input></span>
            </div>
            
            <div className="StudyRegistration_front">
                제목
                <span className="StudyRegistration_span"><input id="StudyRegistration_title" style={{width: '150%'}}></input></span>
            </div>
            <div className="StudyRegistration_front">
                모집 시작
                <ReactDatePicker className="StudyRegistration_startdate" selected={start_date} onChange={date => setStartDate(date)} showTimeSelect
                dateFormat="Pp" name = "start_date"/>
            </div>
            <div className="StudyRegistration_front">
                모집 종료
                <ReactDatePicker className="StudyRegistration_enddate" selected={end_date} onChange={date => setEndDate(date)} showTimeSelect
                dateFormat="Pp" name="end_date"/>
            </div>

    
            <div className="StudyRegistration_front">
                인원
                <span className="StudyRegistration_span">
                    <select id= "StudyRegistration_sel1" >
                        <option>선택</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                    </select>
                </span>
            </div>
            
            <div className="StudyRegistration_front">
                작성일
                <span className="StudyRegistration_span">{current}</span>
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
