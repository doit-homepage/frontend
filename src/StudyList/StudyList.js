
import TopBar from '../TopBar/TopBar.js';
import styles from './StudyList.scss';
import axios from 'axios';
import { Component } from 'react';

//신청된 스터디 및 프로젝트 api가 없음.

class StudyList extends Component {
  state = {dataList:[]};
  getData(){
    axios.get('/study/list/:1').then((res)=>{
      console.log(res);
      this.setState({dataList: res.data.StudyList})
      console.log("(스터디 목록) 성공했습니다!!");
    });
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    const {dataList} = this.state;
    console.log(dataList)
  return (
    <div all>
      <TopBar/>
      <div className = {'ReservedLsit'}>
      <div className={'StudyTitle'}>신청한 스터디/프로젝트 목록</div>
      <hr width = "1020" className = {'TitleHR'}></hr>
      <ul>
        { dataList.map(data => {
          return(
            <li>
              <div className={'Study_Card'}>
                <img
                  //alt="articleImage"
                  className={'Study_Image'}
                  //src="#"
                />
                <div className={'Study_content'}>
                  <p className={'Study_bullet'}>[{data.header}]</p>
                  <p className={'Study_title'}>{data.title}</p>
                  <p className={'Study_authorName'}>{data.writer}</p>
                  <p className={'Study_personnel'}>모집인원 : {data.student_num}명</p>
                </div>
              </div>
            </li>
        )})}
        <li>
        <div className={'Study_Card'}>
            <img
              //alt="articleImage"
              className={'Study_Image'}
              //src="#"
            />
            <div className={'Study_content'}>
                <p className={'Study_bullet'}>[스터디]</p>
                <p className={'Study_title'}>웹 스터디 모집</p>
                <p className={'Study_authorName'}>정성원</p>
                <p className={'Study_personnel'}>모집인원 : 7명</p>
            </div>
        </div>
        </li>
        <li>
        <div className={'Study_Card'}>
            <img
              //alt="articleImage"
              className={'Study_Image'}
              //src="#"
            />
            <div className={'Study_content'}>
                <p className={'Study_bullet'}>[스터디]</p>
                <p className={'Study_title'}>웹 스터디 모집</p>
                <p className={'Study_authorName'}>정성원</p>
                <p className={'Study_personnel'}>모집인원 : 7명</p>
            </div>
          </div>
        </li>
      </ul>
      <hr width="1020" className={'TitleHR2'}></hr>
      </div>
      <div className={'recruit'}>
      <div className={'StudyTitle'}>모집중인 스터디/프로젝트 목록</div>
      <hr width = "1020" className = {'TitleHR'}></hr>
      <ul>
        <li>
        <div className={'Study_Card'}>
            <img
              //alt="articleImage"
              className={'Study_Image'}
              //src="#"
            />
            <div className={'Study_content'}>
                <p className={'Study_bullet'}>[스터디]</p>
                <p className={'Study_title'}>웹 스터디 모집</p>
                <p className={'Study_authorName'}>정성원</p>
                <p className={'Study_personnel'}>모집인원 : 7명</p>
              </div>
          </div>
        </li>
      </ul>
      </div>
    </div>
  );
}}
export default StudyList;