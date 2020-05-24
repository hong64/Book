import * as actionTypes from './actionType';
import {fromJS} from 'immutable';
import axios from 'axios';
const changeBookListState = (data)=>({
	type:actionTypes.ACTIONBOOKLIST,
	bookList:fromJS(data.bookList),
	totalPage:fromJS(data.totalPage),
	bookPage:fromJS(data.bookPage)
})
export const getBookList =(page)=>{
	return (dispatch)=>{
		console.log(page);
		axios.get("/api/book/bookList"+page+".json").then((res)=>{
			const result = res.data.data;
			console.log(result.bookPage);	 
			dispatch(changeBookListState(result));
		}).catch(()=>{
			console.log("456");
		})
	}
}
export const changeBookPage = (page)=>({
	type:actionTypes.ACTIONCHANGEBOOKPAGE,
	data:page
})

