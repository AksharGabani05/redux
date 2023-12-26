import { ADD, ADD_TODO, DIV, MULTIPLE, REMOVE, REMOVE_TODO, RESET, TOGGLE_TODO } from "./actiontype"

export const add = (data) => {
    return {
        type: ADD,
        payload: data,
    };
};

export const remove = (data) => {
    return {
        type: REMOVE,
        payload: data
    };
};
export const multiple = (data) => {
    return {
        type: MULTIPLE,
        payload: data

    };
};
export const div = (data) => {
    return {
        type: DIV,
        payload: data
    };
};
export const reset = (data) => {
    return {
        type: RESET,
        payload: data
    };
};

export const addtodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    }
}
export const removetodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id,
    }
}
export const toggletodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id,
    }
}