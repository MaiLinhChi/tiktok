import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Popper.module.scss';

const cx = classNames.bind(style);

const PopperWrapper = ({ children, className }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default PopperWrapper;
