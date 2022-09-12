import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UsersActiveIcon, UsersIcon } from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/user';

const cx = classNames.bind(style);

const Sidebar = () => {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await userService.getSuggested();
            setSuggestedUser(res);
        };
        getData();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem icon={<HomeIcon />} iconActive={<HomeActiveIcon />} title="For You" to={config.routes.home} />
                <MenuItem
                    icon={<UsersIcon />}
                    iconActive={<UsersActiveIcon />}
                    title="Following"
                    to={config.routes.following}
                />
                <MenuItem icon={<LiveIcon />} iconActive={<LiveActiveIcon />} title="LIVE" to={config.routes.live} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" title="See all" data={suggestedUser} />
        </aside>
    );
};

export default Sidebar;
