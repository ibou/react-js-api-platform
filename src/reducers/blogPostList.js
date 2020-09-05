import {
    BLOG_POST_LIST_REQUEST,
    BLOG_POST_LIST_RECEIVED,
    BLOG_POST_LIST_ERROR,
} from "../actions/constants";

const initialState = {
    posts: null,
    isFetching: false
};

const blogPostList = (state = initialState, action) => {
    switch (action.type) {
        case BLOG_POST_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case BLOG_POST_LIST_RECEIVED:
            return {
                ...state,
                posts: action.data['hydra:member'],
                isFetching: false
            };
        case BLOG_POST_LIST_ERROR:
            return {
                ...state,
                posts: null,
                isFetching: false
            };
        default:
            return state;
    }
};

export default blogPostList;