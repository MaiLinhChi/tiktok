import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useDebounce = (value, delay) => {
    const [valueDebounce, setValueDebounce] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setValueDebounce(value), delay);

        return () => clearTimeout(handler);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return valueDebounce;
};

useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number,
};

export default useDebounce;
