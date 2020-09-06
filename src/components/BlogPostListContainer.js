import React, {Component} from "react";
import BlogPostList from "./BlogPostList";
import {connect} from "react-redux";
import {blogPostListFetch} from '../actions/actions';
import {Spinner} from "./Spinner";

const mapStateToProps = state => ({
    ...state.blogPostList,
    //posts: state.blogPostList.posts
})

const mapDispatchToProps = {
    blogPostListFetch
}

class BlogPostListContainer extends Component {

    componentDidMount() {
        this.props.blogPostListFetch();
    }


    render() {
        const {posts, isFetching} = this.props;

        if(isFetching){
            return (<Spinner />);
        }
        return (
            <>
                <BlogPostList posts={posts} />
            </>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer)
