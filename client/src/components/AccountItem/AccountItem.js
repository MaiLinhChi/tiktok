import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsCheckCircleFill } from 'react-icons/bs';

import style from './AccountItem.module.scss';
import Image from '../Images';

const cx = classNames.bind(style);

const AccountItem = ({ data }) => {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <BsCheckCircleFill className={cx('check')} />}
                </h4>
                <p>{data.nickname}</p>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
