import classNames from 'classnames/bind';
import { BsCheckCircleFill } from 'react-icons/bs';

import style from './AccountPreview.module.scss';
import Image from '~/components/Images/Images';
import Button from '~/components/Button';

const cx = classNames.bind(style);

const AccountPreview = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image src={data.avatar} alt={data.nickname} width="44" height="44" className={cx('avatar')} />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('content')}>
                <span className={cx('user-name')}>
                    <strong>{data.nickname}</strong>
                    <BsCheckCircleFill className={cx('icon')} />
                </span>
                <br />
                <span className={cx('name')}>{data.name}</span>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followings_count} </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{data.likes_count} </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
};

export default AccountPreview;
