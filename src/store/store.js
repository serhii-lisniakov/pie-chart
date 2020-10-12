import { createStore } from 'redux';
import { combineReducers } from "redux";
import { itemsReducer } from './items/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    items: itemsReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools()
)