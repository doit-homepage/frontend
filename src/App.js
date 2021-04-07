import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MainPage from './MainPage/MainPage.js';
import NoticeList from './NoticeList/NoticeList.js';
import StudyList from './StudyList/StudyList.js';
import TopBar from './TopBar/TopBar.js';
import StudyDetail from './StudyDetail/StudyDetail.js'
import Login from './Login/Login.js'
import Signup from './Signup/Signup.js'
import NoticeDetail from './NoticeDetail/NoticeDetail'
import NoticeResgistration from './NoticeRegistration/NoticeRegistration';

function App(props) {
  const { getToken, setToken } = props
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
          <Route exact path='/Login'
            render={() => <Login getToken={getToken} setToken={setToken}/>}
          />
          <Route exact path='/NoticeList/NoticeRegistration' component={NoticeResgistration}/>
          <Route exact path='/Signup' component = {Signup}/>
          <Route exact path='/NoticeDetail' component = {NoticeDetail}/>
        </div>
      </Router>
    </div>
  );
}

export default App;