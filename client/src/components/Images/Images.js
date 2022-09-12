import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import style from './Image.module.scss';
const Image = forwardRef(
    ({ src, alt, className, fallback: customFallback = images.noImage, width, height, ...props }, ref) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };
        return (
            <img
                className={classNames(style.wrapper, className)}
                ref={ref}
                width={width}
                height={height}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    customFallback: PropTypes.string,
};

export default Image;
