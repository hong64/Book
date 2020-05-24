import {fromJS} from 'immutable';
import * as actionTypes from './actionType';
const defaultState=fromJS({
	mouseSearchButtonState:false
});
export default (state=defaultState,action)=>{
	if(action.type === actionTypes.ACTIONSEARCHBUTTON){
		return state.set('mouseSearchButtonState',action.data);
	}
	return state;
}
