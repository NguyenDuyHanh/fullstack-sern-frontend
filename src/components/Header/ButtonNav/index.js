import classNames from 'classnames/bind'

import  styles from './ButtonNav.module.scss'

const cx = classNames.bind(styles);

const ButtonNav = ({nameButton, isActive}) => {
  return (
    <div className={cx('button-nav-container')}>
        <div className={`${cx('button-nav-content', {active: isActive})}`}>
            <span>{nameButton}</span>
        </div>
    </div>
  )
}

export default ButtonNav