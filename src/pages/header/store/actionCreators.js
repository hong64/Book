import * as actionTypes from './actionType';
import {fromJS} from 'immutable';
export const changeSellerMouseState = (data)=>({
	type:actionTypes.ACTIONSELLERMOUSESTATE,
	data:fromJS(data)
})
export const changePersonMouseState = (data)=>({
	type:actionTypes.ACTIONPERSONMOUSESTATE,
	data:fromJS(data)
})
export const changeShopingMouseState = (data)=>({
	type:actionTypes.ACTIONSHOPINGMOUSESTATE,
	data:fromJS(data)
})
export const changeLoginMouseState = (data)=>({
	type:actionTypes.ACTIONLOGINMOUSESTATE,
	data:fromJS(data)
})
export const changeOrderMouseState = (data)=>({
	type:actionTypes.ACTIONORDERMOUSESTATE,
	data:fromJS(data)
})