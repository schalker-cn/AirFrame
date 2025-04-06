import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ThemeConsumer } from '../../../components/Theme';

const logos = {
    'white': require('./../../../images/logoPlaceholder.jpg'),
    'primary': require('./../../../images/logoPlaceholder.jpg'),
    'success': require('./../../../images/logoPlaceholder.jpg'),
    'warning': require('./../../../images/logoPlaceholder.jpg'),
    'danger': require('./../../../images/logoPlaceholder.jpg'),
    'info': require('./../../../images/logoPlaceholder.jpg'),
    'indigo': require('./../../../images/logoPlaceholder.jpg'),
    'purple': require('./../../../images/logoPlaceholder.jpg'),
    'pink': require('./../../../images/logoPlaceholder.jpg'),
    'yellow': require('./../../../images/logoPlaceholder.jpg')
}

const getLogoUrl = (style, color) => {
    return logos[color];
}

// Check for background
const getLogoUrlBackground = (style, color) => {
    if (style === 'color') {
        return logos['blue'];
    } else {
        return getLogoUrl(style, color);
    }
}

const LogoThemed = ({ checkBackground, className, ...otherProps }) => (
    <ThemeConsumer>
    {
        ({ style, color }) => (
            <img
                src={
                    checkBackground ?
                        getLogoUrlBackground(style, color) :
                        getLogoUrl(style, color)
                }
                className={ classNames('d-block', className) }
                alt="Airframe Logo"
                { ...otherProps }
            />
        )
    }
    </ThemeConsumer>
);
LogoThemed.propTypes = {
    checkBackground: PropTypes.bool,
    className: PropTypes.string,
};

export { LogoThemed };
