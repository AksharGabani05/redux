import { type } from "@testing-library/user-event/dist/type";
import { ADD, DIV, MULTIPLE, REMOVE, RESET } from "./actiontype";

export const Reducer =(state = 0, action)=>{
    switch(action,type){
        case ADD:
            return state + 1;

        case REMOVE:
            return state - 1;

        case MULTIPLE:
            return state * 1;

        case DIV:
            return state / 1;

        case RESET:
            return state = 0;

        default:
            return state;
    }
};