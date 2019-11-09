import React from 'react';
import PropTypes from "prop-types";
import classname from "../../utils/classname";

/**
 * Start component for reviews
 */

class Star extends React.Component {
    render() {
        const {
            className,
            width,
            onClick
        } = this.props;

        const classnames = classname("star", className);

        return (
            <div className={classnames} width={width} onClick={onClick}></div>
        );
    }
}

Star.propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    onClick: PropTypes.func
};

export default Star;