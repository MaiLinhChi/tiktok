import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';

const cx = classNames.bind(style);

const MenuItem = ({ icon, iconActive, title, to }) => {
    return (
        <NavLink
            to={to}
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                })
            }
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
};

MenuItem.propTypes = {
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
};

export default MenuItem;
