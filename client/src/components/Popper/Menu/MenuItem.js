import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
};

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
