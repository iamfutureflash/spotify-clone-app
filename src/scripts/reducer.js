export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token:"BQDf1nIaUcE_OK2X1JqL7UTCeJ8sXkReJNYLKW6Ce_1gyCiCMt5gUYgqa12AhJOxUoyr4KuyfwCqX3j-jxuMX53L8vEfZR-3lK-NyWh_T28JSuLEObwjZMBfsA5IYPKrvQ1NVsE-pc8rbZhhgtrwPI44-8SOycm3YzhrB4I8BcD4XihnF8Io02Jzf007ad-_",
    // Object { type: "SET_TOKEN", token: "BQDf1nIaUcE_OK2X1JqL7UTCeJ8sXkReJNYLKW6Ce_1gyCiCMt5gUYgqa12AhJOxUoyr4KuyfwCqX3j-jxuMX53L8vEfZR-3lK-NyWh_T28JSuLEObwjZMBfsA5IYPKrvQ1NVsE-pc8rbZhhgtrwPI44-8SOycm3YzhrB4I8BcD4XihnF8Io02Jzf007ad-_" }
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}
export default reducer;