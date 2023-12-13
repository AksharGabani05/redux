import { ADD, REMOVE } from "./actiontype"

export const add = () => {
    return {
        type: ADD,
    };
};
export const remove =()=>{
    return{
        type: REMOVE,
    };
};