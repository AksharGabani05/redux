import { ADD, DIV, MULTIPLE, REMOVE, RESET } from "./actiontype"

export const add = (payload) => {
    return {
        type: ADD,
        payload:ADD,
    };
};

export const remove =()=>{
    return{
        type: REMOVE,
    };
};
export const multiple =()=>{
    return{
        type: MULTIPLE,
    };
};
export const div =()=>{
    return{
        type: DIV,
    };
};
export const reset =()=>{
    return{
        type: RESET,
    };
};