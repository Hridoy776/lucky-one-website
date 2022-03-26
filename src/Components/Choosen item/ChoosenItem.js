import React from 'react';

const ChoosenItem = (props) => {
    const {name}=props.selectedItem;
    return (
        <div>
           <h3>lucky one: {name}</h3> 
        </div>
    );
};

export default ChoosenItem;