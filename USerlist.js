import React from 'react';

const USerlist = ({data, del, fix}) => {
    return (
        <div>
            <ul>
                {
                    data.map(item=> <li key={item.id}>{item.name} /
                    {item.addr}<button onClick={()=>del(item.id)}>del</button><button onClick={()=>fix(item.id)}>change</button></li>)
                }
            </ul>
        </div>
    );
};

export default USerlist;