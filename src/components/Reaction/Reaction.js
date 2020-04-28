import React from 'react';
import PropTypes from "prop-types";

/**
 * Just share your reaction with an emoji.
 */

class Reaction extends React.Component {
    render() {
        const { 
            reaction,
            active
        } = this.props;

        return (
            <div className={`reaction ${active ? "active": ""}`}>
                {reaction}
            </div>
        );
    }
}

export default Reaction;

Reaction.propTypes = {
    reaction: PropTypes.oneOf(["😕", "😶", "😮", "😍", "💃"]),
    active: PropTypes.bool
};
