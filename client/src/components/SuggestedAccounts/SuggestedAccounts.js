import classNames from 'classnames/bind';
import Seperate from '../Seperate';
import AccountItem from './AccountItem';

import style from './SuggestedAccounts.module.scss';

const cx = classNames.bind(style);

const SuggestedAccounts = ({ label, title, data }) => {
    return (
        <Seperate>
            <p className={cx('label')}>{label}</p>
            {data.map((user) => (
                <AccountItem key={user.id} data={user} />
            ))}
            <p className={cx('btn-more')}>{title}</p>
        </Seperate>
    );
};

export default SuggestedAccounts;
