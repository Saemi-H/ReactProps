import React, { useState } from 'react';
import UserAdd from './UserAdd';
import USerlist from './USerlist';

const Mainpage = () => {
    const [data, setData] = useState([]);
    const onAdd=(user)=>{
        setData(user)
        //console.log(data)
    }

    return (
        <div>
            <UserAdd setData={setData} onAdd={onAdd}/>
            <USerlist data={data}/>
        </div>
    );
};

export default Mainpage;