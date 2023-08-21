import {create} from "zustand";
import {IUser} from "../../modals/IUser";
import {immer} from "zustand/middleware/immer";


interface IuseStore{
    users:IUser[],
    idLoading:boolean,
    error:string;
    addUser:()=>void
}

export const usersStore = create<IuseStore>()(immer((set)=>({
    users:[],
    idLoading:false,
    error:'',
    addUser:async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await response.json() as IUser[]
        set({users:json})
    }
})))