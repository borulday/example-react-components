import React from 'react';

import Card from "../components/Card/Card";

export default {
    component: Card,
    title: 'Card'
};

export const card = () => (
    <Card 
        title="Persona"
        description="A cool persona"
        image="https://cdn.zeplin.io/users/596c770d2b60b6a4161715f1/avatars/ad155c3e-dc12-450a-a355-e6b1cf1fc3cf.png"
        imagePosition="left"
        size="small"></Card>
);
