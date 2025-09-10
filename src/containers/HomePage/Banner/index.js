import classNames from "classnames/bind";

import styles from './Banner.module.scss';
import Search from '../../../components/Search';
import ChatWithAiSuggest from "../../../components/ChatWithAiSuggest";

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={`${cx('banner-container')} d-flex justify-content-center`}>
            <div className={`${cx('banner-content')} text-center`}>
                <h1 className={`${cx('banner-title')} text-white`}>Nền tảng đăt lịch khám, chăm sóc răng miệng và làm đẹp</h1>
                <Search large/>
                <ChatWithAiSuggest/>
            </div>
        </div>
    )
}

export default Banner