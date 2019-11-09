import React from 'react';
import PropTypes from "prop-types";

class HeaderItem extends React.Component {
    render() {
        const {
            title,
            onClick
        } = this.props;

        return (
            <div className="header-item">
                {title}
            </div>
        );
    }
}

HeaderItem.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
};

export default HeaderItem;