import React from 'react';
import { action } from '@storybook/addon-actions';

import Search from "../components/Search/Search";

export default {
    component: Search,
    title: 'Search'
};

export const search = () => (
    <Search 
        icon=""
        placeholder="Search something"
        onClick={action('clicked')} />
);
