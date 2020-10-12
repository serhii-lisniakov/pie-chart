const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== +action.payload)
        default: return state.items
    }
}
