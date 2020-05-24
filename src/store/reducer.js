import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../pages/header/store';
import {reducer as searchReducer} from '../pages/SearchArea/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as bookReducer} from '../pages/Category/store';
const reducer = combineReducers({
	header:headerReducer,
	search:searchReducer,
	home:homeReducer,
	book:bookReducer
})
export default reducer;