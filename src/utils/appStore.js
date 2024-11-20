import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GptReducer from "./GPTSlice";
const appStore = configureStore(
    {
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        GPT : GptReducer
    }
}
)

export default appStore