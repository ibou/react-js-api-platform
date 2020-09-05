import {combineReducers} from "redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";

const rootReducer = combineReducers({
    blogPostList,
    blogPost
});

export default rootReducer;