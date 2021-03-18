import React, { useState } from 'react';

const Userchange = ({correction}) => {
    const {id, name, addr} = correction
    const fixInfo={id, name, addr}
    const [query, setQuery] = useState(fixInfo)
    console.log(query)
    const updateQuery=(e)=>{
        const {name, value} = e.target 
         setQuery({[name]:value})
    }
   
    const sub=(e)=>{
        e.preventDefault()
    }
    return (
        <form onSubmit={sub}>
            <input type="text" name="name" value={name} onChange={updateQuery}/>
            <input type="text" name="addr" value={addr} onChange={updateQuery}/>
            <button type='submit'>done</button>
        </form>
    );
};

export default Userchange;