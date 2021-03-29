import './Signup.css'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import axios from 'axios';
require('react-datepicker/dist/react-datepicker.css')

var url = "http://localhost:3000/"
const Signup = () => {
    const [startDate, setStartDate] = useState(new Date());
    var state={
        id: '',
        pw: '',
        pw_check:''
    }
    var submit_check = (event) => {
        event.preventDefault();
        return true;
    }
    var submit_action = (event) => {
        axios.post('/api/user',state).then((res) => {
            if(res.data.success == true){
                window.location.href = '/login'
            } else {
                alert(res)
            }
        })
    }
    var id_check = () => {
        axios.post('/api/user/checkId',{id: state['id']}).then((res)=>{
            if(res.data.success == true){
                alert('사용가능한 아이디입니다')
            }
            else{
                alert('중복된 아이디 입니다.')
            }
        })
    }
    var ChangeHandle = (e) => {
        state[e.target.name] = e.target.value
    }
    
    var onChangePassword = (e) => {
        console.log(state["pw"] + state['pw_check'])
        ChangeHandle(e)
        if(state["pw"] != state['pw_check']){
            document.getElementById("Signup_noPassword").style.display = "block";
        } else {
            document.getElementById("Signup_noPassword").style.display = "none";
        }
    }
    return (
        <div className="Signup">
            <center>
                <div className="Signup_input_div_total">
                    <h2 className="Signup_title">Do-iT!</h2>
                    <form className="Signup_input_form" action = {url +'user'} method='POST' onSubmit={submit_check}>
                        <div className = "Signup_input_div">
                            아이디 <button className = "Signup_button" onClick={id_check}>중복확인</button><br/>
                            <input type='text' className="Signup_input_box" placeholder='아이디' name = "id" onChange = {ChangeHandle}></input><br/>
                        </div>
                        <div className = "Signup_input_div">
                            비밀번호<br />
                            <input type='password' className="Signup_input_box" placeholder='비밀번호' name = "pw" onChange = {onChangePassword}></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            비밀번호 확인<br />
                            <input type='password' className="Signup_input_box" placeholder='비밀번호 확인' name="pw_check" onChange = {onChangePassword}></input><br />
                            <span id="Signup_noPassword">비밀번호가 일치하지 않습니다</span>
                        </div>
                        <div className = "Signup_input_div">
                            이름<br/>
                            <input type='text' className="Signup_input_box" placeholder='이름' name = "name" onChange = {ChangeHandle}></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            성별<br />
                            <label className="Signup_radio">
                                <input type='radio' value="1" name="gender" onChange = {ChangeHandle}/><span>남자</span>
                            </label>
                            <label className="Signup_radio">
                                <input type='radio' value="0" name="gender" onChange = {ChangeHandle}/><span>여자</span>
                            </label>
                        </div>
                        <div className = "Signup_input_div">
                            학과<br />
                            <input type='text' className="Signup_input_box" placeholder='학과' name = "major" onChange = {ChangeHandle}></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            학번 <button className = "Signup_button" >중복확인</button><br />
                            <input type='text' className="Signup_input_box" placeholder='학번' name = "student_num" onChange = {ChangeHandle}></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            이메일 <button className = "Signup_button">인증코드 받기</button><br />
                            <input type='text' className="Signup_input_box" placeholder='이메일' name = "email" onChange = {ChangeHandle}></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            이메일 인증 코드 <button className = "Signup_button">코드 확인</button><br />
                            <input type='text' className="Signup_input_box" placeholder='이메일 인증 코드'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            전화번호<br />
                            <input type='text' className="Signup_input_box" placeholder='전화번호' name = "phone_num" onChange = {ChangeHandle}></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            생년월일<br />
                            <ReactDatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            showYearDropdown
                            name = "birth"
                            />
                        </div>
                        <input type='submit' value='회원가입' className="Signup_input_submit" onClick={submit_action}></input>
                    </form>
                </div>
            </center>
        </div>
    );
}

export default Signup;
