import React from 'react';
import PropTypes from "prop-types";

/**
 * A cool list 𝍂 for some cool testing
 */

class List extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

List.propTypes = {
    name: PropTypes.string
};

export default List;