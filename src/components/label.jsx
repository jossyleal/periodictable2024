import React from 'react';

const Label = ({ style, label }) => {
    const element = React.createElement(
        'div',
        { className: 'label', style }, // Added comma to separate props
        label
    );
    return element;
};

export default Label;
