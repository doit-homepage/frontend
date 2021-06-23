import React, {Component, useRef} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MainPage from './MainPage/MainPage.js';
import NoticeList from './NoticeList/NoticeList.js';
import StudyList from './StudyList/StudyList.js';
import TopBar from './TopBar/TopBar.js';
import StudyDetail from './StudyDetail/StudyDetail.js'
import Login from './Login/Login.js'
import Signup from './Signup/Signup.js'
import StudyRegistration from './StduyRegistration/StudyRegistration';
import NoticeDetail from './NoticeDetail/NoticeDetail'
import Video from './Video/Video'
import NoticeRegistration from './NoticeRegistration/NoticeRegistration';

function App(props) {
  const { getToken, setToken } = props
  var timer1 = null
  var setTimer = (timer) => {
    if(timer !== null && window.location.pathname!='/'){
      timer();
    }
  }
  console.log(getToken)
  
  
  return (
    <div className="App">
      <Router>
        <div className = "App_header">
        <TopBar/>
        </div>
        <div className = "App_body">
        
          <Route exact path='/' component={MainPage}
          />
          <Route exact path='/StudyList' component = {StudyList}/>
          <Route exact path='/NoticeList' component = {NoticeList}/>
          <Route exact path='/StudyDetail' component = {StudyDetail}/>
          <Route exact path='/Login'
            render={() => <Login getToken={getToken} setToken={setToken}/>}
          />
          <Route exact path='/NoticeList/NoticeRegistration' 
            render={() => <NoticeRegistration getToken={getToken} setToken={setToken}/>}
          />
          <Route exact path='/StudyList/StudyRegistration' 
            render={() => <StudyRegistration getToken={getToken} setToken={setToken}/>}
          />
          <Route exact path='/Signup' component = {Signup}/>
          <Route exact path='/NoticeDetail' component = {NoticeDetail}/>
          <Route exact path='/Video' 
            render={() => <Video/>}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;