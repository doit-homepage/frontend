export const CREATE_TOKEN = "CREATE_TOKEN"

export const createTokenAction = (token, loginState) => ({
    type: "CREATE_TOKEN",
    token,
    loginState
})