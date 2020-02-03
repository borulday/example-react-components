import React from 'react';
import { action } from '@storybook/addon-actions';

import DatePicker from "../components/DatePicker/DatePicker";

export default {
    component: DatePicker,
    title: 'DatePicker'
};

export const datepicker = () => (
    <DatePicker 
        title="Date"
        description="Pick a date"
        onClick={action('clicked')}></DatePicker>
);
