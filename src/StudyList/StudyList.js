
import TopBar from '../TopBar/TopBar.js';
import styles from './StudyList.scss';
import axios from 'axios';
import { Component } from 'react';

class StudyList extends Component {
  state = {dataList:[]};
  getData(){
    axios.get('/study/list/:1').then((res)=>{
      console.log(res);
      this.setState({dataList: res.data.StudyList})
      console.log("성공했습니다!!");
    });
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    const {dataList} = this.state;

  return (
    <div className={'StudyList'}>
      <TopBar/>
      <div className = {'ReservedLsit'}>
        <div className={'NoticeTitle'}>스터디/프로젝트 목록</div>
        <hr width = "1020" className = {'StudyHR'}></hr>
        <ul>
        {dataList.map(data => {
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
        })}
        <hr width="1500" className={'NoticeHR'}></hr>
        </ul>
        
      </div>
      <ul>
        <div className={'NoticeTitle'}>스터디/프로젝트 목록</div>
        <hr width="1020" className={'StudyHR'}></hr>

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
    </div>
  );
}}
export default StudyList;