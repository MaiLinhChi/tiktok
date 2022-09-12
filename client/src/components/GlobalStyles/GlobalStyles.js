import PropTypes from 'prop-types';

import './GlobalStyles.scss';

const GlobalStyles = ({ children }) => children;

GlobalStyles.prototype = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
