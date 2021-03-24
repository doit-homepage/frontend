import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MainPage from './MainPage/MainPage.js';
import NoticeList from './NoticeList/NoticeList.js';
import StudyList from './StudyList/StudyList.js';
import TopBar from './TopBar/TopBar.js';
import StudyDetail from './StudyDetail/StudyDetail.js'

function App() {
  return (
    <div className="App">
      <Router>
        <div className = "App_header">
          <TopBar/>
        </div>
        <div className = "App_body">
          <Route exact path='/' component = {MainPage}/>
          <Route exact path='/StudyList' component = {StudyList}/>
          <Route exact path='/NoticeList' component = {NoticeList}/>
          <Route exact path='/StudyDetail' component = {StudyDetail}/>
        </div>
      </Router>
    </div>
  );
}

export default App;