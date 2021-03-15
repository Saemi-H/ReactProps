import React from 'react';

const USerlist = ({data}) => {
    return (
        <div>
            {data.name} / {data.addr}
        </div>
    );
};

export default USerlist;