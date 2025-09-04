import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import './ModalUser.scss';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '',
                image: '',
                roleId: '',
                positionId: ''
            },
            formErrors: {},
            isSubmit: false
        }
    }

    componentDidMount() {
    }

    handleChangeInput(e) {
        const { name, value } = e.target;
        this.setState({
            formValues: {
                ...this.state.formValues,
                [name]: value
            },
        })
    }

    handleAddNewUser = async (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.formValues);
        this.setState({
            formErrors: errors,
            isSubmit: true
        })
        if(Object.keys(errors).length === 0) {
            await this.props.createNewUser(this.state.formValues);
        }
    }

    resetForm() {
        this.setState({
            formValues: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '',
                image: '',
                roleId: '',
                positionId: ''
            },
            formErrors: {},
            isSubmit: false
        });
    }

    validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format!'
        }
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 7) {
            errors.password = 'Password must be 8 characters'
        }
        if (!values.firstName) {
            errors.firstName = 'First name is required';
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Phone number is required';
        }
        if (!values.address) {
            errors.address = 'Phone number is required';
        }
        if (!values.gender) {
            errors.gender = 'Gender is required';
        }
        if (!values.image) {
            errors.image = 'Image is required';
        }
        if (!values.roleId) {
            errors.roleId = 'RoleId is required';
        }
        if (!values.positionId) {
            errors.positionId = 'PositionId is required';
        }
        return errors;
    }

    render() {
        const { formValues, formErrors } = this.state;
        return (
            <>
                <Modal
                    className={'modal-user-container'}
                    isOpen={this.props.isOpen}
                    toggle={this.props.toggleFromParent}
                    size="lg"
                    centered
                    onClosed={() => this.resetForm()}
                >
                    <ModalHeader
                        toggle={this.props.toggleFromParent}
                    >
                        Create new user
                    </ModalHeader>
                    <ModalBody>
                        <form className="p-3 border rounded">
                            <div className="mb-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formValues.email}
                                    onChange={(e) => this.handleChangeInput(e)}
                                    required
                                />
                                {this.state.isSubmit && formErrors.email && (
                                    <span className='text-danger'>{formErrors.email}</span>
                                )}
                            </div>

                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formValues.password}
                                    onChange={(e) => this.handleChangeInput(e)}
                                    required
                                />
                                {this.state.isSubmit && formErrors.password && (
                                    <span className='text-danger'>{formErrors.password}</span>
                                )}
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        value={formValues.firstName}
                                        onChange={(e) => this.handleChangeInput(e)}
                                    />
                                    {this.state.isSubmit && formErrors.firstName && (
                                        <span className='text-danger'>{formErrors.firstName}</span>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        value={formValues.lastName}
                                        onChange={(e) => this.handleChangeInput(e)}
                                    />
                                    {this.state.isSubmit && formErrors.lastName && (
                                        <span className='text-danger'>{formErrors.lastName}</span>
                                    )}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    value={formValues.address}
                                    onChange={(e) => this.handleChangeInput(e)}
                                />
                                {this.state.isSubmit && formErrors.address && (
                                    <span className='text-danger'>{formErrors.address}</span>
                                )}
                            </div>

                            <div className="mb-3">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    className="form-control"
                                    value={formValues.phoneNumber}
                                    onChange={(e) => this.handleChangeInput(e)}
                                />
                                {this.state.isSubmit && formErrors.phoneNumber && (
                                    <span className='text-danger'>{formErrors.phoneNumber}</span>
                                )}
                            </div>

                            <div className="mb-3">
                                <label>Gender</label>
                                <select
                                    name="gender"
                                    className="form-select"
                                    value={formValues.gender}
                                    onChange={(e) => this.handleChangeInput(e)}
                                >
                                    <option>Choose gender...</option>
                                    <option value="0">Nam</option>
                                    <option value="1">Nữ</option>
                                </select>
                                {this.state.isSubmit && formErrors.gender && (
                                    <span className='text-danger'>{formErrors.gender}</span>
                                )}
                            </div>

                            <div className="mb-3">
                                <label>Ảnh (URL)</label>
                                <input
                                    type="text"
                                    name="image"
                                    className="form-control"
                                    value={formValues.image}
                                    onChange={(e) => this.handleChangeInput(e)}
                                />
                                {this.state.isSubmit && formErrors.image && (
                                    <span className='text-danger'>{formErrors.image}</span>
                                )}
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Role</label>
                                    <select
                                        type="text"
                                        name="roleId"
                                        className="form-select"
                                        id="roleId"
                                        value={formValues.roleId}
                                        onChange={(e) => this.handleChangeInput(e)}
                                    >
                                        <option>Choose role...</option>
                                        <option value="R1">Admin</option>
                                        <option value="R2">Doctor</option>
                                        <option value="R3">Patient</option>
                                    </select>
                                    {this.state.isSubmit && formErrors.roleId && (
                                        <span className='text-danger'>{formErrors.roleId}</span>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Position</label>

                                    <select
                                        type="text"
                                        name="positionId"
                                        className="form-select"
                                        id="positionSelect"
                                        value={formValues.positionId}
                                        onChange={(e) => this.handleChangeInput(e)}
                                    >
                                        <option>Choose position...</option>
                                        <option value="P0">None</option>
                                        <option value="P1">Master</option>
                                        <option value="P3">Doctor</option>
                                        <option value="P4">Associate Professor</option>
                                        <option value="P5">Professor</option>
                                    </select>
                                    {this.state.isSubmit && formErrors.positionId && (
                                        <span className='text-danger'>{formErrors.positionId}</span>
                                    )}
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            className='px-4'
                            color="primary"
                            onClick={(e) => this.handleAddNewUser(e)}>
                            Save
                        </Button>{' '}
                        <Button
                            className='px-3'
                            color="secondary"
                            onClick={this.props.toggleFromParent}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
