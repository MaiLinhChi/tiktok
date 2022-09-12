import { BsChevronLeft } from 'react-icons/bs';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';

const cx = classNames.bind(style);

const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('btn-back')} onClick={onBack}>
                <BsChevronLeft />
            </button>
            <h4 className={cx('title')}>{title}</h4>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
