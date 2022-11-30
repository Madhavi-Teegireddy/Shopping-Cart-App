

const initialState = {
    carts : [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if(ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            }else {
                const temp = {...action.payload, qnty: 1}
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
            
        case "DELETE_CART":
            const data = state.carts.filter((ele) => ele.id !== action.payload) 
            return {
                ...state,
                carts:data
            }   
        default:
            return state    
    }
}