import React from 'react';

import Header from "../components/Header/Header";
import HeaderItem from "../components/HeaderItem/HeaderItem";

export default {
    component: Header,
    title: 'Header'
};

export const header = () => (
  <Header>
    <HeaderItem title="Story 1" />
    <HeaderItem title="Story 2" />
  </Header>
);
