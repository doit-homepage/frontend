import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import styles from './NoticeList.scss';
import axios from 'axios';
import { render } from '@testing-library/react';

class NoticeList extends Component {
  state = {dataList:[]};

  getData(){
    axios.get('/list/:1').then(function(res){
    console.log(res);
    });
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    const {dataList} = this.state;

    return (
      
      <div className={'styles.NoticeList'}>
        <TopBar/>
        <div className={'styles.NoticeTitle'}>공지사항</div>
        <hr width = "1020" className = {'styles.NoticeHR'}></hr>
        <ul>
          {dataList.map(data => {
            <li>
            <div className={'styles.Notice_Card'}>
              <img
                //alt="articleImage"
                className={'styles.Notice_Image'}
                //src="#"
              />
              <div className={'styles.Notice_content'}>
                <p className={'styles.Notice_bullet'}>[{data.header}]</p>
                <p className={'styles.Notice_title'}>{data.title}</p>
                <p className={'styles.Notice_authorName'}>{data.writer}</p>
                <p className={'styles.Notice_date'}>{data.date}</p>
                <p className={'styles.Notice_likes'}>❤ {data.like}</p>
              </div>
            </div>
          </li>  
          })}
          <li>
            <div className={styles.Notice_Card}>
              <img
                //alt="articleImage"
                className={styles.Notice_Image}
                //src="#"
              />
              <div className={styles.Notice_content}>
                <p className={styles.Notice_bullet}>[글머리]</p>
                <p className={styles.Notice_title}>Do-iT 공지사항 제목</p>
                <p className={styles.Notice_authorName}>정성원</p>
                <p className={styles.Notice_date}>2020-03-07</p>
                <p className={styles.Notice_likes}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={styles.Notice_Card}>
              <img
                //alt="articleImage"
                className={styles.Notice_Image}
                //src="#"
              />
              <div className={styles.Notice_content}>
                <p className={styles.Notice_bullet}>[글머리]</p>
                <p className={styles.Notice_title}>Do-iT 공지사항 제목</p>
                <p className={styles.Notice_authorName}>정성원</p>
                <p className={styles.Notice_date}>2020-03-07</p>
                <p className={styles.Notice_likes}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={styles.Notice_Card}>
              <img
                //alt="articleImage"
                className={styles.Notice_Image}
                //src="#"
              />
              <div className={styles.Notice_content}>
                <p className={styles.Notice_bullet}>[글머리]</p>
                <p className={styles.Notice_title}>Do-iT 공지사항 제목</p>
                <p className={styles.Notice_authorName}>정성원</p>
                <p className={styles.Notice_date}>2020-03-07</p>
                <p className={styles.Notice_likes}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={styles.Notice_Card}>
              <img
                //alt="articleImage"
                className={styles.Notice_Image}
                //src="#"
              />
              <div className={styles.Notice_content}>
                <p className={styles.Notice_bullet}>[글머리]</p>
                <p className={styles.Notice_title}>Do-iT 공지사항 제목</p>
                <p className={styles.Notice_authorName}>정성원</p>
                <p className={styles.Notice_date}>2020-03-07</p>
                <p className={styles.Notice_likes}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={styles.Notice_Card}>
              <img
                //alt="articleImage"
                className={styles.Notice_Image}
                //src="#"
              />
              <div className={styles.Notice_content}>
                <p className={styles.Notice_bullet}>[글머리]</p>
                <p className={styles.Notice_title}>Do-iT 공지사항 제목</p>
                <p className={styles.Notice_authorName}>정성원</p>
                <p className={styles.Notice_date}>2020-03-07</p>
                <p className={styles.Notice_likes}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={styles.Notice_Card}>
              <img
                //alt="articleImage"
                className={styles.Notice_Image}
                //src="#"
              />
              <div className={styles.Notice_content}>
                <p className={styles.Notice_bullet}>[글머리]</p>
                <p className={styles.Notice_title}>Do-iT 공지사항 제목</p>
                <p className={styles.Notice_authorName}>정성원</p>
                <p className={styles.Notice_date}>2020-03-07</p>
                <p className={styles.Notice_likes}>❤ 13</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NoticeList;