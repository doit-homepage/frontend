import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import './Login.css'
function Login() {
    return (
        <div className="Login">
            <center>
                <div className="Login_input_div">
                    <h2 className="Login_title">Do-iT!</h2>
                    <form>
                        <input type='text' className="Login_input_box" placeholder='아이디'></input><br/>
                        <input type='password' className="Login_input_box" placeholder='비밀번호'></input><br/>
                        <input type='submit' value = '로그인' className="Login_input_submit"></input>
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
