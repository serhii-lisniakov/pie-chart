const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [
        {
            name: 'milk',
            value: 150,
            id: 1
        },
        {
            name: 'beer',
            value: 120.90,
            id: 2
        },
        {
            name: 'chips',
            value: 100,
            id: 3
        },
    ]
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
