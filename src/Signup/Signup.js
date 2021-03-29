import './Signup.css'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css')

const Signup = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="Signup">
            <center>
                <div className="Signup_input_div_total">
                    <h2 className="Signup_title">Do-iT!</h2>
                    <form className="Signup_input_form">
                        <div className = "Signup_input_div">
                            아이디 <button className = "Signup_button">중복확인</button><br/>
                            <input type='text' className="Signup_input_box" placeholder='아이디'></input><br/>
                        </div>
                        <div className = "Signup_input_div">
                            비밀번호<br />
                            <input type='password' className="Signup_input_box" placeholder='비밀번호'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            비밀번호 확인<br />
                            <input type='password' className="Signup_input_box" placeholder='비밀번호 확인'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            이름<br/>
                            <input type='text' className="Signup_input_box" placeholder='이름'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            성별<br />
                            <label className="Signup_radio">
                                <input type='radio' value="남" name="ss" /><span>남자</span>
                            </label>
                            <label className="Signup_radio">
                                <input type='radio' value="여" name="ss" /><span>여자</span>
                            </label>
                        </div>
                        <div className = "Signup_input_div">
                            학과<br />
                            <input type='text' className="Signup_input_box" placeholder='학과'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            학번 <button className = "Signup_button" >중복확인</button><br />
                            <input type='text' className="Signup_input_box" placeholder='학번'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            이메일 <button className = "Signup_button">인증코드 받기</button><br />
                            <input type='text' className="Signup_input_box" placeholder='이메일'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            이메일 인증 코드 <button className = "Signup_button">코드 확인</button><br />
                            <input type='text' className="Signup_input_box" placeholder='이메일 인증 코드'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            전화번호<br />
                            <input type='text' className="Signup_input_box" placeholder='전화번호'></input><br />
                        </div>
                        <div className = "Signup_input_div">
                            생년월일<br />
                            <ReactDatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            showYearDropdown
                            />
                        </div>
                        <input type='submit' value='로그인' className="Signup_input_submit"></input>
                    </form>
                </div>
            </center>
        </div>
    );
}

export default Signup;
