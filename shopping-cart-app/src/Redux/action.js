

export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const DELETE = (id) => {
    return {
        type: "DELETE_CART",
        payload: id
    }
}

export const REMOVE = (item) => {
    return {
        type: "REMOVE_CART",
        payload: item
    }
}