import React from 'react';
import PropTypes from "prop-types";
import classname from "../../utils/classname";

import './Link.css';

/**
 * A cool link 🔗 for some cool testing
 * 
 * @param {Object} props 
 */
function Link(props) {
    const {
        className,
        children,
        target,
        href,
        rel
    } = props;

    const classnames = classname("App-link", className);

    return (
        <a
            class={classnames}
            href={href}
            target={target}
            rel={rel}>
            {children}
        </a>
    );
}

Link.propTypes = {
    /** External class name to be added to the root element, which is a `<button>`. */
    className: PropTypes.string,
    /** Link's child nodes. */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element
    ]),
    target: PropTypes.string,
    href: PropTypes.string,
    rel: PropTypes.string
};

export default Link;