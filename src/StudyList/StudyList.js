import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import style from './StudyList.scss';

function StudyList() {
  return (
    <div className={styles.StudyList}>
      <TopBar/>
      <div className={styles.NoticeTitle}>스터디/프로젝트 목록</div>
      <hr width = "1020" className = {styles.StudyHR}></hr>
      <ul>
        <li>
          <div className={styles.Study_Card}>
            <img
              alt="articleImage"
              className={styles.Study_Image}
              src="#"
            />
            <div className={styles.Study_content}>
              <p className={styles.Study_bullet}>[스터디]</p>
              <p className={styles.Study_title}>웹 스터디 모집</p>
              <p className={styles.Study_authorName}>정성원</p>
              <p className={styles.Study_personnel}>모집인원 : 7명</p>
            </div>
          </div>
        </li>
        
        <hr width="1500" className={styles.NoticeHR}></hr>

        <div className={styles.NoticeTitle}>스터디/프로젝트 목록</div>
        <hr width="1020" className={styles.StudyHR}></hr>

        <li>
        <div className={styles.Study_Card}>
            <img
              alt="articleImage"
              className={styles.Study_Image}
              src="#"
            />
            <div className={styles.Study_content}>
            <p className={styles.Study_bullet}>[스터디]</p>
              <p className={styles.Study_title}>웹 스터디 모집</p>
              <p className={styles.Study_authorName}>정성원</p>
              <p className={styles.Study_personnel}>모집인원 : 7명</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default StudyList;