import { type } from "@testing-library/user-event/dist/type";
import { add } from "./action";
import { ADD, REMOVE } from "./actiontype";

export const Reducer =(state = 0, action)=>{
    switch(action,type){
        case ADD:
            return state + 1;

        case REMOVE:
            return state - 1;

        default:
            return state;
    }
};