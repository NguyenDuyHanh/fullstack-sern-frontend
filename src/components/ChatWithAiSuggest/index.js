import classNames from "classnames/bind";

import styles from './ChatWithAiSuggest.module.scss';

const cx = classNames.bind(styles);

const ChatWithAiSuggest = () => {
    return (
        <div className={`${cx('chat-ai-suggest-container')} container`}>
            <div className="row">
                <div className={`${cx('')} col-12 col-md-4`}>
                    <div className={`${cx('chat-ai-suggest-item')} bg-white p-3 shadow-sm d-flex text-start`}>
                        <img
                            src="https://cdn.bookingcare.vn/fo/w1920/2025/09/09/142548-phauthuatthammy.png"
                            alt="Phẫu thuật thẩm mỹ"
                            className="img-fluid"
                        />
                        <div className={`${cx('chat-container')} ms-4`}>
                            <div className={`${cx('chat-title')}`}>
                                Trợ lý AI phẫu thuật thẩm mỹ
                            </div>
                            <div className={`${cx('chat-describe')}`}>
                                Cung cấp thông tin nhanh, chính xác về phẫu thuật thẩm mỹ và địa chỉ uy tín
                            </div>
                      </div>
                    </div>
                </div>

                <div className={`${cx('')} col-12 col-md-4`}>
                    <div className={`${cx('chat-ai-suggest-item')} bg-white p-3 shadow-sm d-flex text-start`}>
                        <img
                            src="https://cdn.bookingcare.vn/fo/w1920/2025/09/09/142548-dalieutrimun.png"
                            alt="Thẩm mỹ trị mụn"
                            className="img-fluid"
                        />
                        <div className={`${cx('chat-container')} ms-4`}>
                            <div className={`${cx('chat-title')}`}>
                                Trợ lý AI Thẩm mỹ trị mụn
                            </div>
                            <div className={`${cx('chat-describe')}`}>
                                Giúp bạn dễ dàng tìm thông tin, chọn dịch vụ và cơ sở chăm sóc da phù hợp
                            </div>
                      </div>
                    </div>
                </div>

                <div className={`${cx('')} col-12 col-md-4`}>
                    <div className={`${cx('chat-ai-suggest-item')} bg-white p-3 shadow-sm d-flex text-start`}>
                        <img
                            src="https://cdn.bookingcare.vn/fo/w1920/2025/09/09/142548-trolyainiengrang.png"
                            alt="Niềng răng"
                            className="img-fluid"
                        />
                        <div className={`${cx('chat-container')} ms-4`}>
                            <div className={`${cx('chat-title')}`}>
                                Trợ lý AI Niềng răng
                            </div>
                            <div className={`${cx('chat-describe')}`}>
                                Hỗ trợ tìm hiểu quy trình, chi phí niềng răng và lựa chọn nha khoa đáng tin cậy
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChatWithAiSuggest