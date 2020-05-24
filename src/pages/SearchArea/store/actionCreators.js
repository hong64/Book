import * as actionTypes from './actionType';
import {fromJS} from 'immutable';
export const changeSearchButtonAction = (data)=>({
	type:actionTypes.ACTIONSEARCHBUTTON,
	data:fromJS(data)
})
