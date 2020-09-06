import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {renderField} from "../form";
import {userLoginAttempt} from "../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    userLoginAttempt
}


class LoginForm extends Component {

    onSubmit = (values)=>{
        return this.props.userLoginAttempt(
            values.username,
            values.password
            );
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div className={"text-center"}>
                <form className={"mt-4"} onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name={"username"} label={"Username"} type={"text"} component={renderField}/>
                    <Field name={"password"} label={"Password"} type={"password"} component={renderField}/>
                    <button type={"submit"} className={"btn btn-primary btn-big btn-block"}>Log in</button>
                </form>
            </div>
        );
    };
}

export default reduxForm({
    form: 'LoginForm'
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));