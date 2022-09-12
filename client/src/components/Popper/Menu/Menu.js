import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';
import PopperWrapper from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(style);
const defaultFunc = () => {};

const Menu = ({ children, menu = [], hideOnClick = false, onChange = defaultFunc }) => {
    const [history, setHistory] = useState([{ data: menu }]);
    const current = history[history.length - 1];

    const renderMenuItem = current.data.map((item, index) => {
        const isHaveChildren = !!item.children;
        return (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (isHaveChildren) {
                        setHistory((prev) => [...prev, item.children]);
                    } else {
                        onChange(item);
                    }
                }}
            />
        );
    });

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-more')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('wrapper-item')}>{renderMenuItem}</div>
            </PopperWrapper>
        </div>
    );

    const handleToFirtPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            hideOnClick={hideOnClick}
            delay={[0, 800]}
            offset={[12, 8]}
            onHidden={handleToFirtPage}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    menu: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
