import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { BsCheckCircleFill } from 'react-icons/bs';

import style from './SuggestedAccounts.module.scss';
import Image from '../Images/Images';
import PopperWrapper from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(style);

const AccountItem = ({ data }) => {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image src={data.avatar} alt={data.nickname} width="32" height="32" className={cx('avatar')} />
                    <div className={cx('info')}>
                        <h4>
                            <strong className={cx('user-name')}>{data.nickname}</strong>
                            {data.tick && <BsCheckCircleFill className={cx('icon')} />}
                        </h4>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

export default AccountItem;
