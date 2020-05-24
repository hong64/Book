import {fromJS} from 'immutable';
import * as actionTypes from './actionType';
const defaultState=fromJS({
	bookListState:[],
	bookPage:1,
	totalPage:1
});
export default (state=defaultState,action)=>{
	if(action.type === actionTypes.ACTIONBOOKLIST){
		console.log("111111111111111");
		return state.set('bookListState',action.bookList).set('totalPage',action.totalPage).set('bookPage',action.bookPage);
	}
	if(action.type === actionTypes.ACTIONCHANGEBOOKPAGE){
		return state.set('bookPage',action.data);
	}
	return state;
}
