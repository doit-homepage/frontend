import { render } from '@testing-library/react';
import React, {Component} from 'react';
import styles from './TopBar.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

export default function TopBar() {
  
    return (

        <div className="top-bar"> 
            <div className="top-bar_first">
                <div className="logo-container">
                    <a href="/" className="top-bar_logo">
                      Do-iT!
                    </a>
                </div> 
            </div>
            <form className="top-bar_second">
                <div className="top-bar_second_container">
                    <Link to ='/'>
                      <button className="senses" id="senses_home">Home</button>
                    </Link>
                    <Link to ='/NoticeDetail'>
                      <button className="senses">공지사항</button>
                    </Link>
                    <Link to='/StudyList'>
                      <button className="senses">스터디/프로젝트</button>
                    </Link>
                    <Link to ='/'>
                      <button className="senses">컴파일러</button>
                    </Link>
                    <Link to ='/'>
                      <button className="senses">마이페이지</button>
                    </Link>
                </div>
            </form> 
            <form className="top-bar_login">
                    홍길동/201000000 로그아웃
            </form>
        </div>
    );
  }
  

