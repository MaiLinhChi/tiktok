import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

const cx = classNames.bind(style);

const Button = ({
    to,
    href,
    primary = false,
    outlinePrimary = false,
    outlineGray = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    let Type = 'button';
    const classes = cx('wrapper', {
        text,
        outlinePrimary,
        outlineGray,
        rounded,
        primary,
        disabled,
        small,
        large,
        [className]: className,
    });
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        Type = Link;
        props.to = to;
    } else if (href) {
        Type = 'a';
        props.href = href;
    }
    return (
        <Type className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Type>
    );
};

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    outlinePrimary: PropTypes.bool,
    outlineGray: PropTypes.bool,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
