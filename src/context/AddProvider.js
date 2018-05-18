import React from 'react';
//context 이용시 어려 provider를 합치는 component

const AppProvider = ({ contexts, children }) => contexts.reduce(
    (prev, context) => React.createElement(context, {
        children: prev
    }),
    children
);

export default AppProvider;
