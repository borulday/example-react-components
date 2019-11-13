import React from 'react';
import PropTypes from "prop-types";

/**
 * type something to search with Artificial Intelligence 😬
 * 
 * This is full of 🧠 or 🌧 ? 
 * 
 */

class Search extends React.Component {
    render() {
        const {
            icon,
            placeholder,
            onClick
        } = this.props;

        return (
            <div className="search" onClick={onClick}>
                {placeholder}
                <img src={icon} />
            </div>
        );
    }
}

Search.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    onClick: PropTypes.func
};

export default Search;