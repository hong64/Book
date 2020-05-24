import {fromJS} from 'immutable';
import * as actionTypes from './actionType';
const defaultState=fromJS({
	itemState:[false,false,false,false,false,false,false,false,
						false,false,false,false],
	categoryItemText:[false,false,false,false,false,false,false,false,
						false,false,false,false,false,false,false,false,
						false,false,false,false,false,false,false,false,
						false,false,false,false,false,false,false,false],
	itemDetailState:false,
	categoryDetailState:[],
	detailCategoryMouseState:false,
	recommendState:[],
	homeNavState:[true,false,false,false,false,false,false],
	rankListState:[]
});
export default (state=defaultState,action)=>{
	if(action.type === actionTypes.ACTIONITEMSTATE){
		var newState = state.toJS();
		var n = newState.itemState;
		n[action.index] = action.data;
		newState.itemDetailState = action.itemDetailState;
		return fromJS(newState);
	}
	if(action.type === actionTypes.ACTIONCATEGORYITEMSTATE){
		var newState = state.toJS();
		var n = newState.categoryItemText;
		n[action.itemIndex] = action.data;
		return fromJS(newState);
	}
	if(action.type === actionTypes.ACTIONDETAILCATEGORY){
		console.log(action.data);
		return state.set('categoryDetailState',action.categoryList);
	}
	if(action.type === actionTypes.ACTIONDETAILCATEGORYMOUSESTATE){
		return state.set('detailCategoryMouseState',action.data);
	}
	if(action.type === actionTypes.ACTIONGETRECOMMENDLIST){
		return state.set('recommendState',action.recommendList);
	}
	if(action.type === actionTypes.ACTIONHOMENAVSTATE){
		var newState = state.toJS();
		var n = newState.homeNavState;
		n[action.index] = action.data;
		return fromJS(newState);
	}
	if(action.type === actionTypes.ACTIONGETRANKLIST){
		return state.set('rankListState',action.rankList);
	}
	return state;
}
