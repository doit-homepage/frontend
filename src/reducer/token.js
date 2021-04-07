import { CREATE_TOKEN } from '../actions/token'

const initialState = {
    token: "",
    loginState: false
}

export default function token(state = initialState, action){
    switch(action.type) {
        case CREATE_TOKEN:
            localStorage.setItem("x-access-token", action.token)
            localStorage.setItem("isLogin", true)
            return {
                token: action.token,
                loginState: action.loginState
            }
        default:
            return state
    }
}