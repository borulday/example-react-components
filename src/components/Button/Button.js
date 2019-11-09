import React from 'react';
import PropTypes from "prop-types";
import classname from "../../utils/classname";

import './Button.css';

/**
 * A cool button 🔘 for some cool testing
 * 
 * @param {Object} props 
 */

function Button(props) {
    const {
        className,
        children,
        type,
        disabled,
        icon,
        onClick
    } = props;

    const classnames = classname("button", className, type);

    return (
        <button
            class={classnames}
            type={type}
            disabled={disabled}
            icon={icon}
            onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    /** External class name to be added to the root element, which is a `<button>`. */
    className: PropTypes.string,
    /** Predefined button types */
    type: PropTypes.oneOf(['primary', 'secondary', 'warning', 'error']),
    /** Whether the button disabled. */
    disabled: PropTypes.bool,
    /** Create a button with icon */
    icon: PropTypes.string,
    /** Button's child nodes. */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element
    ]),
    /** Called on user's click. */
    onClick: PropTypes.func,
    /** Whether to apply Zeplin primary button theme or not. */
    primary: PropTypes.bool,
    /** Whether to apply Zeplin secondary button theme or not. */
    secondary: PropTypes.bool
};

export default Button;