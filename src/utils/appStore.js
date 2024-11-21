import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GptReducer from "./GPTSlice";
import configReducer from "./configSlice";
const appStore = configureStore(
    {
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        GPT : GptReducer,
        config : configReducer
    }
}
)

export default appStore