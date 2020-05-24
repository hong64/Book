import * as actionTypes from './actionType';
import {fromJS,List} from 'immutable';
import axios from 'axios'
const changeDetailCategoryState = (data)=>({
	type:actionTypes.ACTIONDETAILCATEGORY,
	categoryList:fromJS(data.categoryList)
})
const changeRecommendBookState = (data)=>({
	type:actionTypes.ACTIONGETRECOMMENDLIST,
	recommendList:fromJS(data.recommendList)
})
const changeRankListState = (data)=>({
	type:actionTypes.ACTIONGETRANKLIST,
	rankList:fromJS(data.rankList)
})
export const changeItemState = (index,data)=>({
	type:actionTypes.ACTIONITEMSTATE,
	data:fromJS(data),
	index:index,
	itemDetailState:data
})
export const changeCategoryItemState = (index,data)=>({
	type:actionTypes.ACTIONCATEGORYITEMSTATE,
	data:fromJS(data),
	itemIndex:index
})
export const getDeatilCategory = (index)=>{
	return (dispatch)=>{
		axios.get('/api/category/'+index+".json").then((res)=>{
			const result = res.data.data;	 
			dispatch(changeDetailCategoryState(result));
		}).catch(()=>{
			console.log("456");
		})
	}
}
export const changeDetailCategoryMouseState = (data)=>({
	type:actionTypes.ACTIONDETAILCATEGORYMOUSESTATE,
	data:fromJS(data)
})

export const getRecommendList = ()=>{
	return (dispatch)=>{
		axios.get('/api/recommend/recommendBook.json').then((res)=>{
			const result = res.data.data;	 
			dispatch(changeRecommendBookState(result));
		}).catch(()=>{
			console.log("456");
		})
	}
}
export const changeHomeNavState = (index,data)=>({
	type:actionTypes.ACTIONHOMENAVSTATE,
	data:fromJS(data),
	index:index
})
export const getRankList = ()=>{
	return (dispatch)=>{
		axios.get('/api/rank/rankList.json').then((res)=>{
			const result = res.data.data;	 
			dispatch(changeRankListState(result));
		}).catch(()=>{
			console.log("456");
		})
	}
}