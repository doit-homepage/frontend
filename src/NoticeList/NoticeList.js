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
  componentWillMount(){
    this.getData();
  }
  // constructor(props){ //근데 글래스 필드 문법 때문에 굳이 안써도 되는거 아닌가?
  //   super(props);
  //   this.state = {dataList:[]};
  // }
  // componentDidMount(){
  //   this.getData();
  // }
  render(){
    const {dataList} = this.state;
    const setNoticeID = this.props.setNoticeID
    return (
      
      <div all>
        <TopBar/>
        <div className={"NoticeList"}>
        <div className={"NoticeTitle"}>공지사항</div>
        <hr width = "1020" className = {"NoticeHR"}></hr>
        <ul>
          {dataList.map(data => {
            <li>
            <div className={"Notice_Card"}>
              <img
                //alt="articleImage"
                className={"Notice_Image"}
                //src="#"
              />
              <div className={"Notice_content"}>
                <p className={"Notice_bullet"}>[{setNoticeID.data.header}]</p>
                <p className={"Notice_title"}>{setNoticeID.data.title}</p>
                <p className={"Notice_authorName"}>{setNoticeID.data.writer}</p>
                <p className={"Notice_date"}>{setNoticeID.data.date}</p>
                <p className={"Notice_likes"}>❤ {setNoticeID.data.like}</p>
              </div>
            </div>
          </li>  
          })}
          <li>
            <div className={"Notice_Card"}>
              <img
                //alt="articleImage"
                className={"Notice_Image"}
                //src="#"
              />
              <div className={"Notice_content"}>
                <p className={"Notice_bullet"}>[글머리]</p>
                <p className={"Notice_title"}>Do-iT 공지사항 제목</p>
                <p className={"Notice_authorName"}>정성원</p>
                <p className={"Notice_date"}>2020-03-07</p>
                <p className={"Notice_likes"}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={"Notice_Card"}>
              <img
                //alt="articleImage"
                className={"Notice_Image"}
                //src="#"
              />
              <div className={"Notice_content"}>
                <p className={"Notice_bullet"}>[글머리]</p>
                <p className={"Notice_title"}>Do-iT 공지사항 제목</p>
                <p className={"Notice_authorName"}>정성원</p>
                <p className={"Notice_date"}>2020-03-07</p>
                <p className={"Notice_likes"}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={"Notice_Card"}>
              <img
                //alt="articleImage"
                className={"Notice_Image"}
                //src="#"
              />
              <div className={"Notice_content"}>
                <p className={"Notice_bullet"}>[글머리]</p>
                <p className={"Notice_title"}>Do-iT 공지사항 제목</p>
                <p className={"Notice_authorName"}>정성원</p>
                <p className={"Notice_date"}>2020-03-07</p>
                <p className={"Notice_likes"}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={"Notice_Card"}>
              <img
                //alt="articleImage"
                className={"Notice_Image"}
                //src="#"
              />
              <div className={"Notice_content"}>
                <p className={"Notice_bullet"}>[글머리]</p>
                <p className={"Notice_title"}>Do-iT 공지사항 제목</p>
                <p className={"Notice_authorName"}>정성원</p>
                <p className={"Notice_date"}>2020-03-07</p>
                <p className={"Notice_likes"}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={"Notice_Card"}>
              <img
                //alt="articleImage"
                className={"Notice_Image"}
                //src="#"
              />
              <div className={"Notice_content"}>
                <p className={"Notice_bullet"}>[글머리]</p>
                <p className={"Notice_title"}>Do-iT 공지사항 제목</p>
                <p className={"Notice_authorName"}>정성원</p>
                <p className={"Notice_date"}>2020-03-07</p>
                <p className={"Notice_likes"}>❤ 13</p>
              </div>
            </div>
          </li>
          <li>
          <div className={"Notice_Card"}>
              <img
                //alt="articleImage"
                className={"Notice_Image"}
                //src="#"
              />
              <div className={"Notice_content"}>
                <p className={"Notice_bullet"}>[글머리]</p>
                <p className={"Notice_title"}>Do-iT 공지사항 제목</p>
                <p className={"Notice_authorName"}>정성원</p>
                <p className={"Notice_date"}>2020-03-07</p>
                <p className={"Notice_likes"}>❤ 13</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
    );
  }
}

export default NoticeList;