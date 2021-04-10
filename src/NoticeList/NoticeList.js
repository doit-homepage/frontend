import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import styles from './NoticeList.scss';

function NoticeList() {
  return (
    <div className={styles.NoticeList}>
      <TopBar/>
      <div className={styles.NoticeTitle}>공지사항</div>
      <hr width = "1020" className = {styles.NoticeHR}></hr>
      <ul>
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

export default NoticeList;