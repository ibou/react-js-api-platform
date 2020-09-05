import React, {Fragment} from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "./BlogPostListContainer";
import BlogPostContainer from "./BlogPostContainer";
import Header from "./Header";

class App extends React.Component {

    render() {

        return (
            <Fragment>
                <BrowserRouter>
                    <Header isAuthenticated={false} userData={null} />
                    <Switch>
                        <Route path="/login" exact={true} component={LoginForm}/>
                        <Route path="/blog-post/:id" component={BlogPostContainer}/>
                        <Route path="/" component={BlogPostListContainer}/>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
