import React from 'react';
import {blogPostFetch, blogPostUnload} from "../actions/actions";
import {connect} from "react-redux";
import {BlogPost} from "./BlogPost";
import CommentListContainer from "./CommentListContainer";
import {Spinner} from "./Spinner";

const mapStateToProps = state => ({
    ...state.blogPost
})

const mapDispatchToProps = {
    blogPostFetch,
    blogPostUnload
}


class BlogPostContainer extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.blogPostFetch(this.props.match.params.id), 1000);
    }

    componentWillUnmount() {
        this.props.blogPostUnload();
    }

    render() {
        const {isFetching, post} = this.props;
        if (isFetching ) {
            return (<Spinner />);
        }
        return (
            <div>
                <BlogPost post={post}/>
                {post && <CommentListContainer blogPostId={this.props.match.params.id}/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);