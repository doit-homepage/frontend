import './Signup.css'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import axios from 'axios';
require('react-datepicker/dist/react-datepicker.css')

var url = "http://localhost:3000/"
const Signup = () => {
    const [startDate, setStartDate] = useState(new Date());
    var state = {
        id: '',
        pw: '',
        pw_check: '',
        student_num: '',
        id_check: false,
        num_check: false,
        email: '',
        authNum: '',
        email_check: '',
        auth: false
    }
    var submit_check = (event) => {
        event.preventDefault();
        return true;
        return false;
    }
    var submit_action = (event) => {
        if (state['pw'] == state['pw_check'] && state['num_check'] == true && state['id_check'] == true) {
            axios.post('/api/user', state).then((res) => {
                if (res.data.success == true) {
                    window.location.href = '/login'
                } else {
                    alert(res)
                }
            })
        }
    }
    var id_check = () => {
        axios.post('/api/user/checkId', { id: state['id'] }).then((res) => {
            if (res.data.success == true) {
                state['id_check'] = true
                alert('사용가능한 아이디입니다')
            }
            else {
                state['id_check'] = false
                alert('중복된 아이디 입니다.')
            }
        })
    }
    var student_num_check = () => {
        axios.post('/api/user/checkNumber', { student_num: state['student_num'] }).then((res) => {
            if (res.data.success == true) {
                state['num_check'] = true
                alert('사용 가능한 학번입니다')
            } else {
                state['num_check'] = false
                alert('중복된 학번입니다.')
            }
        })
    }
    var ChangeHandle = (e) => {
        state[e.target.name] = e.target.value
    }
    var idChangeHandle = (e) => {
        state['id_check'] = false;
        ChangeHandle(e)
    }
    var numChangeHandle = (e) => {
        state['num_check'] = false
        ChangeHandle(e)
    }
    var onChangePassword = (e) => {
        console.log(state["pw"] + state['pw_check'])
        ChangeHandle(e)
        if (state["pw"] != state['pw_check']) {
            document.getElementById("Signup_noPassword").style.display = "block";
        } else {
            document.getElementById("Signup_noPassword").style.display = "none";
        }
    }
    var mailauth = (e) => {
        axios.post('/api/auth/mail',{mail: state['email']}).then((res) => {
            state['authNum'] = res.data
        })
    }
    var mailauthCheck = (e) => {
        if(state['authNum'] == state['email_check']){
            state['auth'] = true;
            alert("인증되었습니다.")
        }
        else{
            state['auth'] = false;
            alert("다시 확인해주세요")
        }
    }
    return (
        <div className="Signup">
            <center>
                <div className="Signup_input_div_total">
                    <h2 className="Signup_title">Do-iT!</h2>
                    <form className="Signup_input_form" action={url + 'user'} method='POST' onSubmit={submit_check}>
                        <div className="Signup_input_div">
                            아이디 <button className="Signup_button" onClick={id_check}>중복확인</button><br />
                            <input type='text' className="Signup_input_box" placeholder='아이디' name="id" onChange={idChangeHandle}></input><br />
                        </div>
                        <div className="Signup_input_div">
                            비밀번호<br />
                            <input type='password' className="Signup_input_box" placeholder='비밀번호' name="pw" onChange={onChangePassword}></input><br />
                        </div>
                        <div className="Signup_input_div">
                            비밀번호 확인<br />
                            <input type='password' className="Signup_input_box" placeholder='비밀번호 확인' name="pw_check" onChange={onChangePassword}></input><br />
                            <span id="Signup_noPassword">비밀번호가 일치하지 않습니다</span>
                        </div>
                        <div className="Signup_input_div">
                            이름<br />
                            <input type='text' className="Signup_input_box" placeholder='이름' name="name" onChange={ChangeHandle}></input><br />
                        </div>
                        <div className="Signup_input_div">
                            성별<br />
                            <label className="Signup_radio">
                                <input type='radio' value="1" name="gender" onChange={ChangeHandle} /><span>남자</span>
                            </label>
                            <label className="Signup_radio">
                                <input type='radio' value="0" name="gender" onChange={ChangeHandle} /><span>여자</span>
                            </label>
                        </div>
                        <div className="Signup_input_div">
                            학과<br />
                            <input type='text' className="Signup_input_box" placeholder='학과' name="major" onChange={ChangeHandle}></input><br />
                        </div>
                        <div className="Signup_input_div">
                            학번 <button className="Signup_button" onClick={student_num_check}>중복확인</button><br />
                            <input type='text' className="Signup_input_box" placeholder='학번' name="student_num" onChange={numChangeHandle}></input><br />
                        </div>
                        <div className="Signup_input_div">
                            이메일 <button className="Signup_button" onClick = {mailauth}>인증코드 받기</button><br />
                            <input type='text' className="Signup_input_box" placeholder='이메일' name="email" onChange={ChangeHandle}></input><br />
                        </div>
                        <div className="Signup_input_div">
                            이메일 인증 코드 <button className="Signup_button" onClick={mailauthCheck}>코드 확인</button><br />
                            <input type='text' className="Signup_input_box" placeholder='이메일 인증 코드' name="email_check" onChange={ChangeHandle}></input><br />
                        </div>
                        <div className="Signup_input_div">
                            전화번호<br />
                            <input type='text' className="Signup_input_box" placeholder='전화번호' name="phone_num" onChange={ChangeHandle}></input><br />
                        </div>
                        <div className="Signup_input_div">
                            생년월일<br />
                            <ReactDatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                showYearDropdown
                                name="birth"
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
