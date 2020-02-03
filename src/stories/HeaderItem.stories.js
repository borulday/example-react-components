import React from 'react';
import { action } from '@storybook/addon-actions';

import HeaderItem from "../components/HeaderItem/HeaderItem";

export default {
    component: HeaderItem,
    title: 'HeaderItem'
};

export const headerItem = () => (
    <HeaderItem title="Story 1" onClick={action('clicked')} />
);
