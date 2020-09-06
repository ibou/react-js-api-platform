import {requests} from "../agent";
import {
    BLOG_POST_LIST_ERROR,
    BLOG_POST_LIST_REQUEST,
    BLOG_POST_LIST_SET_PAGE,
    BLOG_POST_LIST_RECEIVED,
    BLOG_POST_REQUEST,
    BLOG_POST_ERROR,
    BLOG_POST_RECEIVED,
    BLOG_POST_UNLOAD,
    COMMENT_ADDED,
    COMMENT_LIST_ERROR,
    COMMENT_LIST_RECEIVED,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_UNLOAD, IMAGE_DELETE_REQUEST, IMAGE_DELETED,
} from "./constants";


export const blogPostListRequest = () => ({
    type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListError = (error) => ({
    type: BLOG_POST_LIST_ERROR,
    error
});

export const blogPostListReceived = (data) => ({
    type: BLOG_POST_LIST_RECEIVED,
    data
});

export const blogPostListSetPage = (page) => ({
    type: BLOG_POST_LIST_SET_PAGE,
    page
});

export const blogPostListFetch = (page = 1) => {
    return (dispatch) => {
        dispatch(blogPostListRequest());
        return requests.get(`/blog_posts?_page=${page}`)
            .then(response => {
                return dispatch(blogPostListReceived(response))
            })
            .catch(error => dispatch(blogPostListError(error)));
    }
};


export const blogPostRequest = () => ({
    type: BLOG_POST_REQUEST,
});

export const blogPostError = (error) => ({
    type: BLOG_POST_ERROR,
    error
});

export const blogPostReceived = (data) => ({
    type: BLOG_POST_RECEIVED,
    data
});

export const blogPostUnload = () => ({
    type: BLOG_POST_UNLOAD,
});

export const blogPostFetch = (id) => {
    return (dispatch) => {
        dispatch(blogPostRequest());
        return requests.get(`/blog_posts/${id}`)
            .then(response => dispatch(blogPostReceived(response)))
            .catch(error => dispatch(blogPostError(error)));
    }
};

export const commentListRequest = () => ({
    type: COMMENT_LIST_REQUEST,
});

export const commentListError = (error) => ({
    type: COMMENT_LIST_ERROR,
    error
});

export const commentListReceived = (data) => ({
    type: COMMENT_LIST_RECEIVED,
    data
});

export const commentListUnload = () => ({
    type: COMMENT_LIST_UNLOAD,
});

export const commentListFetch = (id, page = 1) => {
    return (dispatch) => {
        dispatch(commentListRequest());
        return requests.get(`/blog_posts/${id}/comments?_page=${page}`)
            .then(response => dispatch(commentListReceived(response)))
            .catch(error => dispatch(commentListError(error)));
    }
};

export const commentAdded = (comment) => ({
    type: COMMENT_ADDED,
    comment
});

export  const userLoginAttempt = (username, password)=>{
    return (dispatch) =>{
        return requests.post('/login_check', {username, password})
            .then(
                response => console.log(".........",response)
            ).catch(error=>{
                console.log('Login Failed. ', error)
            });
    }
};

/*
export const commentAdd = (comment, blogPostId) => {
    return (dispatch) => {
        return requests.post(
            '/comments',
            {
                content: comment,
                blogPost: `/api/blog_posts/${blogPostId}`
            }
        ).then(
            response => dispatch(commentAdded(response))
        ).catch((error) => {
            if (401 === error.response.status) {
                return dispatch(userLogout());
            }
            throw new SubmissionError(parseApiErrors(error));
        })
    }
};
 */


