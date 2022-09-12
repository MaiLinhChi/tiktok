import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { BsThreeDotsVertical, BsPlusLg } from 'react-icons/bs';

import images from '~/assets/images';
import Button from '~/components/Button';
import {
    CoinIcon,
    GearIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    MessageIcon,
    QuestionIcon,
    SiginIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Images';
import Menu from '~/components/Popper/Menu';
import config from '~/config';
import Search from '../Search';
import style from './Header.module.scss';

const cx = classNames.bind(style);

const menuList = [
    {
        icon: <LanguageIcon width="2rem" height="2rem" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon width="2rem" height="2rem" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon width="2rem" height="2rem" />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const currentUser = true;

    const userMenu = [
        {
            icon: <UserIcon width="2rem" height="2rem" />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <CoinIcon width="2rem" height="2rem" />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <GearIcon width="2rem" height="2rem" />,
            title: 'Settings',
            to: '/settings',
        },
        ...menuList,
        {
            icon: <SiginIcon width="2rem" height="2rem" />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="Logo Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button outlineGray leftIcon={<BsPlusLg />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                                <button className={cx('btn-action')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('btn-action')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu menu={userMenu ? userMenu : menuList} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://yt3.ggpht.com/yti/APfAmoFo5egZpOQeuWH3YxinqPS37f4aEPF51xnpL9l2xw=s88-c-k-c0x00ffffff-no-rj-mo"
                                alt="avatar user"
                                className={cx('avatar')}
                            />
                        ) : (
                            <button className={cx('btn-more')}>
                                <BsThreeDotsVertical />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;
