import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { BsFillXCircleFill, BsPlusCircleDotted } from 'react-icons/bs';

import PopperWrapper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import style from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/search';

const cx = classNames.bind(style);

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isFocusInput, setIsForcusInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const valueDebounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (valueDebounce === '') {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setIsLoading(true);
            const data = await searchServices.search(valueDebounce);
            setSearchResult(data);
            setIsLoading(false);
        };
        fetchApi();
    }, [valueDebounce]);

    const handleFocusInput = () => {
        setIsForcusInput(false);
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={isFocusInput && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((data) => (
                                <AccountItem key={data.id} data={data} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleFocusInput}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={(e) => {
                            if (e.target.value[0] !== ' ') {
                                setSearchValue(e.target.value);
                            }
                        }}
                        onFocus={() => setIsForcusInput(true)}
                    />

                    {!!searchValue && !isLoading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <BsFillXCircleFill />
                        </button>
                    )}
                    {isLoading && <BsPlusCircleDotted className={cx('loading')} />}
                    <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon width="2.4rem" height="2.4rem" />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
