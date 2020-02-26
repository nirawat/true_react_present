import { combineReducers } from 'redux';
import { menu } from './menu.reducer'


const reducers = combineReducers({
    menu:menu
});

export default reducers;