import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar.js';
import style from './MainPage.css';

class MainPage extends Component{
    render(){
      var n=1; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
      var ObjectArray = new Array ();
      ObjectArray[1] = "./do-it 사진.jpg";
      ObjectArray[2] = "./do-it 사진2.jpg";
      ObjectArray[3] = "./do-it 사진3.png";
      function changeImage(){
        document.getElementById("MainPage_image").src=ObjectArray[n++];
        
        if(n>ObjectArray.length-1){
          n=1;
        }
      }
    return (
      <div className="MainPage">
        <div>
          <img onLoad = {((event) => setInterval(changeImage, 3000))}  id = "MainPage_image" src = "./do-it 사진.jpg"></img>
          <script>
            
          </script>        
        </div>
      </div>
      
    );
    }
  }
  
export default MainPage;
  