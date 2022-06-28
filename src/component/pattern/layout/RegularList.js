import React from 'react';

const RegularList = ({
    items, resourceName, itemComponent: ItemComponent,
                     }) => {
    return (
        <>
            {items.map((item, i) => (
                // <ItemComponent key={i} person={item} />
                <ItemComponent key={i} {...{ [resourceName]: item }} />
            ))}
        </>
    );
};

export default RegularList;