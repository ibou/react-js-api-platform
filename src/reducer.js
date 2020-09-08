import {combineReducers} from "redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";
import registration from "./reducers/registration";
import blogPostForm from "./reducers/blogPostForm";
import auth from "./reducers/auth";
import {reducer as formReducer} from "redux-form";
import {routerReducer} from "react-router-redux";

const rootReducer = combineReducers({
    blogPostList,
    blogPost,
    commentList,
    auth,
    registration,
    blogPostForm,
    form: formReducer,
    router: routerReducer

});

export default rootReducer;