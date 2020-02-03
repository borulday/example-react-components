import React from 'react';
import { action } from '@storybook/addon-actions';

import Comment from "../components/Comment/Comment";

export default {
    component: Comment,
    title: 'Comment'
};

export const comment = () => (
    <Comment 
        username="Gökæy"
        profileImage="https://cdn.zeplin.io/users/596c770d2b60b6a4161715f1/avatars/ad155c3e-dc12-450a-a355-e6b1cf1fc3cf.png"
        comment="Sup dude 😎"
        reactionsList='["😕", "😶", "😮", "😍", "💃"]'
        date="2 days ago"
        onClick={action('clicked')}></Comment>
);
