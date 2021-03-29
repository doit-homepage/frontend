import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import './Login.css'
import axios from 'axios'
function Login() {
    var state = {}
    var ChangeHandle = (e) => {
        state[e.target.name] = e.target.value
    }
    var submit_check = (event) => {
        event.preventDefault();
        return true;
    }
    var submit_action = (event) => {
        axios.post('/user/login',state).then((res) => {
            if(res.data.success == true){
                window.location.href = '/'
            } else {
                alert("비밀번호 패스워드 확인")
            }
        })
    }
    return (
        <div className="Login">
            <center>
                <div className="Login_input_div">
                    <h2 className="Login_title">Do-iT!</h2>
                    <form onSubmit={submit_check}>
                        <input type='text' className="Login_input_box" placeholder='아이디' name="id" onChange={ChangeHandle}></input><br/>
                        <input type='password' className="Login_input_box" placeholder='비밀번호' name="pw" onChange={ChangeHandle}></input><br/>
                        <input type='submit' value = '로그인' className="Login_input_submit" onClick={submit_action}></input>
                    </form>
                    <Link to='/signup'>
                        <button className="Login_button_signup">회원가입</button>
                    </Link>
                </div>
            </center>
        </div>
    );
}

export default Login;
