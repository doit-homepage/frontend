import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage.js';
import NoticeList from './NoticeList/NoticeList.js';
import StudyList from './StudyList/StudyList.js';
import TopBar from './TopBar/TopBar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component = {MainPage}/>
        <Route exact path='/StudyList' component = {StudyList}/>
        <Route exact path='/NoticeList' component = {NoticeList}/>
      </BrowserRouter>
    </div>
  );
}

export default App;