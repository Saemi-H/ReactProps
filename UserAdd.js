import React, { useEffect, useRef, useState } from 'react';

const UserAdd = ({onAdd}) => {
    const focusName=useRef()
    const initialUser={id:null, name: '', addr:''}
    
    const [user, setUser] = useState(initialUser)
    const {name, addr} = user
    
    const onSubmit=(e)=>{
        e.preventDefault()
        onAdd(user)
        setUser(initialUser)
        focusName.current.focus()
    }
    const onChange=(e)=>{
        const {value, name}=e.target
        setUser({
            ...user,
            [name]:value
        })

        console.log(name, value)
    }
    useEffect(()=>{
        focusName.current.focus()
    },[])

   
   
    return (
        <div style={{marginTop: 20}}>
            <form action="post" onSubmit={onSubmit}>
                <input type="text" name="name" value={name} onChange={onChange} ref={focusName}/>
                <input type="text" name="addr" value={addr} onChange={onChange}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default UserAdd;