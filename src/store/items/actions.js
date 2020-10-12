export const addItemAction = (item) => ({
    type: 'ADD_ITEM',
    payload: item
})

export const deleteItemAction = (itemId) => ({
    type: 'DELETE_ITEM',
    payload: itemId
})