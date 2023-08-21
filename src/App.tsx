import React, {useEffect} from 'react';
import {usersStore} from "./store/zustand/store";

function App() {
    const users = usersStore((state)=> state.users)
    const addUser = usersStore((state) => state.addUser)

    const onClick =()=>{
        addUser()
    }
  return (
    <div>
        {users.map((user)=>(
            <div key={user.id}>id: {user.id} name: {user.name} email: {user.email}</div>
        ))}
        <button onClick={onClick}>create</button>
    </div>
  );
}

export default App;
