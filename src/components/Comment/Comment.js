import React from 'react';
import PropTypes from "prop-types";

/**
 * Comment
 * 
 * Add some joyful comments and maybe reactions! 
 * 
 * Reactions list: 😕😶😮😍💃
 */

class Comment extends React.Component {
    render() {
        const {
            username,
            profileImage,
            comment,
            reactionsList,
            date,
            onClick
        } = this.props;

        return (
            <div className="comment" onClick={onClick}>
                {username}<br/>
                {comment}<br/>
                <img src={profileImage} alt="" /><br/>
                {date}<br/>
                {reactionsList}<br/>
            </div>
        );
    }
}

Comment.propTypes = {
    username: PropTypes.string,
    profileImage: PropTypes.string,
    comment: PropTypes.string,
    reactionsList: PropTypes.oneOf(["😕", "😶", "😮", "😍", "💃"]),
    date: PropTypes.string,
    onClick: PropTypes.func
};

export default Comment;
