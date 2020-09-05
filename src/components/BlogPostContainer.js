import React from 'react';
import {blogPostFetch, blogPostUnload} from "../actions/actions";
import {connect} from "react-redux";
import {BlogPost} from "./BlogPost";

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

    componentWillMount() {
        //this.props.blogPostUnload();
    }

    render() {
        const {isFetching, post} = this.props;
        return (<BlogPost isFetching={isFetching} post={post}/>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);