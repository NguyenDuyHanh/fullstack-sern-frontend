import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import userService from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            const userData = await userService.handleLoginAPI(this.state.username, this.state.password);
            if (userData && userData.errCode === 0) {
                this.props.userLoginSuccess(userData.user);
                console.log(userData.user);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                this.setState({
                    errMessage: error.response.data.message
                })
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className="login-background">
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='headerTitle text-center'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label className='label-input'>Username</label>
                            <input
                                type='text'
                                name='username'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(e) => this.handleOnChangeInput(e)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label className='label-input'>Password</label>
                            <div className='password-input-wrapper'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    name='password'
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(e) => this.handleOnChangeInput(e)}
                                />
                                <span
                                    onClick={() => this.handleShowHidePassword()}
                                >
                                    <i className={this.state.isShowPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                </span>
                            </div>
                        </div>
                        {this.state.errMessage && (
                            <div className="text-danger mt-2">
                                {this.state.errMessage}
                            </div>
                        )}
                        <div className='login-btn col-12'>
                            <button
                                className='btn-login'
                                onClick={() => this.handleLogin()}
                            >
                                Log in
                            </button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password</span>
                        </div>
                        <div className='alternativeLogin'>
                            <label>Or sign in with:</label>
                            <div className='icon-social-group'>
                                <i className="fab fa-google social-icon google-icon"></i>
                                <i className="fab fa-facebook-f social-icon facebook-icon"></i>
                                <i className="fab fa-twitter social-icon twitter-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
