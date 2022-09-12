import classNames from 'classnames/bind';

import style from './Seperate.module.scss';

const cx = classNames.bind(style);

const Seperate = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

export default Seperate;
