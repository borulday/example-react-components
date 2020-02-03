import React from 'react';
import PropTypes from "prop-types";

/**
 * Review ...etc
 */

class Card extends React.Component {
    render() {
        const {
            title,
            description,
            titleOnImage,
            desciptionOnImage,
            image,
            imagePosition,
            size
        } = this.props;

        return (
            <div className="card" imagePosition size>
                <p>{title}</p>
                <p>{description}</p>
                <p><img src={image} alt="{title}" /></p>
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    titleOnImage: PropTypes.string,
    desciptionOnImage: PropTypes.string,
    image: PropTypes.string,
    imagePosition: PropTypes.oneOf(['right', 'top', 'left', 'bottom']),
    size: PropTypes.oneOf(['small', 'regular', 'big'])
};

export default Card;
