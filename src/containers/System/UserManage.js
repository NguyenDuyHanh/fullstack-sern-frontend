import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserManage.scss';
import userService from '../../services/userService';
import ModalUser from './ModalUser';
import { toast, Bounce } from "react-toastify";

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false
        }
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    async getAllUsers() {
        const response = await userService.getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
        console.log(this.state.arrUsers)
    }



    handAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleModalUser = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    createNewUser = async (data) => {
        try {
            const response = await userService.createNewUserSevice(data);
            if (response && response.errCode !== 0) {
                toast(response.message, {
                    type: "error",
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                this.setState({
                    isOpenModalUser: false
                })
                await this.getAllUsers();
                toast.success(response.message, {
                    type: "success"
                });
            }
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        const arrUsers = this.state.arrUsers;
        return (
            <div className='users-container'>
                <div className="title text-center">Manage users</div>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleModalUser}
                    createNewUser={this.createNewUser}
                />
                <div className='mt-3 ms-3 btn-add-new-user'>
                    <button
                        className='btn btn-primary ps-3 pe-3'
                        onClick={() => this.handAddNewUser()}
                    >
                        <i className="fas fa-user-plus me-1"></i>
                        Add new user
                    </button>
                </div>
                <div className='users-table mt-3 mx-3'>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>Phone number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrUsers && arrUsers.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.email}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address}</td>
                                        <td>{user.phonenumber}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning me-2 ps-2 pe-2"><i className="fa-solid fa-pen-to-square text-light"></i></button>
                                            <button type="button" className="btn btn-danger ps-2 pe-2"><i className="fa-solid fa-trash-arrow-up"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
