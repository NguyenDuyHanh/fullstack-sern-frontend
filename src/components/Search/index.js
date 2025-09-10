import classNames from "classnames/bind"
import { useState, useEffect } from "react";

import styles from './Search.module.scss'

const cx = classNames.bind(styles);

const Search = ({ large }) => {
    const placeholders = [
        'Tìm chuyên khoa',
        'Tìm bệnh viện',
        'Tìm phòng khám',
        'Tìm bác sĩ',
        'Tìm gói khám tổng quát',
        'Tìm gói xét nghiệm',
        'Tìm gói phẫu thuật',
        'Tìm lý do khám'
    ]

    const [placeholder, setPlaceholder] = useState('Tìm');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                return (prev + 1) % placeholders.length;
            })
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        setPlaceholder(placeholders[index])
    }, [index])

    return (
        <div className={`${cx('search-container', { large_search: large })} d-flex`}>
            {!large && (
                <div className={`${cx('search-icon',)}`}>
                    <svg
                        width="16"
                        height="16"
                        fill="black"
                        className="search_svg__bi search_svg__bi-search"
                        preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
                        </path>
                    </svg>
                </div>
            )}
            <div className={cx('search-input')}>
                {placeholder}
            </div>
            {large && (
                <div className={`${cx('search-icon',)} ms-auto`}>
                    <svg
                        width="16"
                        height="16"
                        fill="black"
                        className="search_svg__bi search_svg__bi-search"
                        preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
                        </path>
                    </svg>
                </div>
            )}
        </div>
    )
}

export default Search