import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-background">
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='headerTitle text-center'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label className='label-input'>Username</label>
                            <input type='text' className='form-control' placeholder='Enter your username' />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label className='label-input'>Password</label>
                            <input type='password' className='form-control' placeholder='Enter your password' />
                        </div>
                        <div className='login-btn col-12'>
                            <button>Log in</button>
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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
