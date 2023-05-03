/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ChefCard = ({singleData}) => {
    const {name} = singleData
    return (
        <div>
            {name}
        </div>
    );
};

export default ChefCard;