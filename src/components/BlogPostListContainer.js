import React, {Component} from "react";
import BlogPostList from "./BlogPostList";
import {connect} from "react-redux";
import {blogPostListFetch} from '../actions/actions';

class BlogPostListContainer extends Component {

    componentDidMount() {
        this.props.blogPostListFetch();
    }


    render() {
        const {posts, isFetching} = this.props;
        return (
            <>
                <BlogPostList posts={posts} isFetching={isFetching} />
            </>
        )

    }
}

const mapStateToProps = state => ({
    ...state.blogPostList,
    //posts: state.blogPostList.posts
})


const mapDispatchToProps = {
    blogPostListFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer)
