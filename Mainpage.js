import React, { useRef, useState } from 'react';
import UserAdd from './UserAdd';
import Userchange from './Userchange';
import USerlist from './USerlist';

const Mainpage = () => {
    const no=useRef(0)
    const [data, setData] = useState([]);
    const [correction, setCorrection] = useState('')
    const onAdd=(user)=>{
        const {name, addr} = user
        setData([
            ...data,{
                id:no.current++,
                name,
                addr
            }
            ])
        //console.log(data)
    }
    const del=id=>{
        setData(data.filter(item=> item.id !== id))
    }
    const fix=(id)=>{
        setCorrection(data.find(item=> item.id===id))
    }
    //console.log(correction)


    return (
        <div>
            <UserAdd onAdd={onAdd}/>
            <USerlist data={data} del={del} fix={fix}/>
            <Userchange correction={correction} onAdd={onAdd}/>
        </div>
    );
};

export default Mainpage;