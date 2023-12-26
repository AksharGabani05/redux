// import { type } from "@testing-library/user-event/dist/type";
import { ADD, ADD_TODO, DIV, MULTIPLE, REMOVE, REMOVE_TODO, RESET, TOGGLE_TODO  } from "./actiontype";


let initalstate = {
    todo: [],
};

export const reducer = (state = initalstate, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, payload],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todo: state.todo.filter((todo) => todo.id != payload),
            };
            case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
          default:
            return state;

    }
}