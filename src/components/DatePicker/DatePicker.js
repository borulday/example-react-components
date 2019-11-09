import React from 'react';
import PropTypes from "prop-types";

/**
 * Date picker component explanations
 */

class DatePicker extends React.Component {
    render() {
        const {
            title,
            description,
            startDate,
            endDate,
            format,
            onClick
        } = this.props;

        return (
            <div className="date-picker">
                {title}
                <br/>
                {description}
            </div>
        );
    }
}

DatePicker.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    format: PropTypes.string,
    onClick: PropTypes.func
};

export default DatePicker;