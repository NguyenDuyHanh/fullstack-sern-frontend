import classNames from "classnames/bind";
import { useState, useEffect } from "react";


import styles from './HomeHeader.module.scss';
import bookingcareLogo from '../../../assets/images/bookingcare-2020.svg';
import ButtonNav from "../ButtonNav";

const cx = classNames.bind(styles);


const HomeHeader = () => {
    return (
        <div className={`${cx("header-container")} d-flex align-items-center justify-content-center`}>
            <div className={`${cx("header-content")} d-flex align-items-center`}>
                <div className="d-flex align-items-center">
                    <button className={cx('menu-icon')}>
                        <svg width="100%" height="100%" viewBox="0 0 32 32" preserveAspectRatio="none" fill="#969495">
                            <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4m24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4m0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4">
                            </path>
                        </svg>
                    </button>
                    <div className={cx('header-logo')}>
                        <img src={bookingcareLogo} alt="Logo" />
                    </div>
                </div>

                <div className={`${cx('group-btn-and-search')} d-flex items-center align-items-center justify-content-between`}>
                    <ButtonNav isActive nameButton="Tất cả" />
                    <ButtonNav nameButton="Tại nhà" />
                    <ButtonNav nameButton="Tại viện" />
                    <ButtonNav nameButton="Sống khỏe" />
                </div>

                <div className={`${cx('cooperate-appointment-container')} d-flex ms-auto`}>
                    <div className={`${cx('cooperate')}`}>
                        <div className={`${cx('icon')}`}>
                            <i className="fa-solid fa-handshake"></i>
                        </div>
                        <div className={`${cx('text')}`}>Hợp tác</div>
                    </div>
                    <div className={`${cx('appointment')}`}>
                        <div className={`${cx('icon')}`}>
                            <i className="fa-solid fa-clock-rotate-left"></i>
                        </div>
                        <div className={`${cx('text')}`}>Lịch hẹn</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader