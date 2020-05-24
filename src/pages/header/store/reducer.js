import {fromJS} from 'immutable';
import * as actionTypes from './actionType';
const defaultState=fromJS({
	sellerMouseState:false,
	personMouseState:false,
	orderMouseState:false,
	loginMouseState:false,
	shopingMouseState:false
});
export default (state=defaultState,action)=>{
	if(action.type === actionTypes.ACTIONSELLERMOUSESTATE){
		return state.set('sellerMouseState',action.data);
	}
	if(action.type === actionTypes.ACTIONPERSONMOUSESTATE){
		return state.set('personMouseState',action.data);
	}
	if(action.type === actionTypes.ACTIONORDERMOUSESTATE){
		return state.set('orderMouseState',action.data);
	}
	if(action.type === actionTypes.ACTIONLOGINMOUSESTATE){
		return state.set('loginMouseState',action.data);
	}
	if(action.type === actionTypes.ACTIONSHOPINGMOUSESTATE){
		return state.set('shopingMouseState',action.data);
	}
	return state;
}
