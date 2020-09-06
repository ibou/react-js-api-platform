import React from 'react';
import {commentListFetch, commentListUnload} from "../actions/actions";
import {connect} from "react-redux";
import {Spinner} from "./Spinner";
import {CommentList} from "./CommentList";

const mapStateToProps = state => ({
    ...state.commentList
});

const mapDispatchToProps = {
    commentListFetch,
    commentListUnload
};

class CommentListContainer extends React.Component {
    componentDidMount() {
        this.props.commentListFetch(this.props.blogPostId);
    }

    componentWillUnmount() {
        this.props.commentListUnload();
    }

    onLoadMoreClick() {
        const {blogPostId, currentPage, commentListFetch} = this.props;
        commentListFetch(blogPostId, currentPage);
    }

    render() {
        const {isFetching, commentList, currentPage} = this.props;

        if (isFetching && currentPage === 1) {
            return (<Spinner/>);
        }

        return (
            <div>
              <CommentList commentList={commentList}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);