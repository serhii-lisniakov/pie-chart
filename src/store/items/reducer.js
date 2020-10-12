const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [
        {
            name: 'milk',
            value: 150,
            id: Date.now()
        },
        {
            name: 'beer',
            value: 120.90,
            id: Date.now()
        },
        {
            name: 'chips',
            value: 100,
            id: Date.now()
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
