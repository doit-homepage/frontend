import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import styles from './NoticeList.scss';
import axios from 'axios';
import { render } from '@testing-library/react';

class NoticeList extends Component {

  state = {
    dataList: []
  }
  async getData(){
    await axios.get('/api/list/1').then((res) => {
      console.log(res);
      this.setState({dataList: res.data.info_list})
      console.log("성공했습니다!!");
    });
  }
  componentDidMount(){
    this.getData();
  }

  render(){
    const {dataList} = this.state;
    const setNoticeID = this.props.setNoticeID
    console.log(dataList)
    return (
      
      <div all>
        <TopBar/>
        <div className={"NoticeList"}>
        <div className={"NoticeTitle"}>공지사항</div>
        <hr width = "1020" className = {"NoticeHR"}></hr>
        <ul>
          { this.state.dataList.map((data) => {
            return (
            <li>
            <div className={"Notice_Card"}>
              <img
                //alt="articleImage"
                className={"Notice_Image"}
                //src="#"
              />
              <div className={"Notice_content"}>
                <p className={"Notice_bullet"}>[{data.header}]</p>
                <p className={"Notice_title"}>{data.title}</p>
                <p className={"Notice_authorName"}>{data.writer}</p>
                <p className={"Notice_date"}>{data.date}</p>
                <p className={"Notice_likes"}>❤ {data.like}</p>
              </div>
            </div>
          </li>  
          )})}
        </ul>
      </div>
      </div>
    );
  }
}

export default NoticeList;