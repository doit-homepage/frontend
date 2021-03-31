import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import style from './NoticeList.css';

const PostsData = [
  {
    "category": "공지사항",
    "title": "가나다라마바사",
    "text": "어쩌고 저쩌고",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "공지사항",
    "title": "가나다라마바사",
    "text": "어쩌고 저쩌고",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "공지사항",
    "title": "가나다라마바사",
    "text": "어쩌고 저쩌고",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "공지사항",
    "title": "가나다라마바사",
    "text": "어쩌고 저쩌고",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  }
]

class NoticeList extends React.Component {
    constructor(){
      super();

      this.state = {posts: {}}
    }
    componentWillUnmount(){
      this.setState({
        posts: PostsDate
      });
    }

    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }

  class Button extends React.Component { //더보기 버튼
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> 더보기▶
        </button>
      )
    }
  }

  class CardHeader extends React.Component { //카드 헤더 (이미지)
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }

  class CardBody extends React.Component { //카드 바디
    render() {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  
  
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  );
export default NoticeList;
