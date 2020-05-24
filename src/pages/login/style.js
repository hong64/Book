 import styled from 'styled-components';
 import background from './statics/background4.jpg';
 export const LoginBackground = styled.div`
 	width:100%;
 	height:100%;
	background:url(${background});
	position:absolute;
	background-size:cover;
	z-index:4;
 `
 export const LoginWrapper = styled.div`
 	width:100%;
 	height:100%;
 `
 export const LoginItem = styled.div`
 	opacity:0.5;
 	border:1px solid red;
 	position:absolute;
 	width:400px;
 	height:300px;
 	margin-top:100px;
 	margin-left:700px;
 	background: #B0C4DE;
 	z-index:5;
 `
 export const LoginUser = styled.div`
 	position:relative;
 	line-height:50px;
 	.iconfont{
 		margin-left:75px;
 		float:left;
 	}
 	.userInput{
 		width:210px;
 		height:20px;
 	}
 `
 export const LoginPassword = styled.div`
 	line-height:50px;
 	.iconfont{
 		margin-left:75px;
 		float:left;
 	}
 	.passwordInput{
 		width:210px;
 		height:20px;
 	}
 `
 export const LoginTitle = styled.div`
 	margin:auto auto;
 	width:200px;
 	height:50px;
 	.desc{
 		padding-top:7px;
 		font-size:18px;
 		line-height:30px;
 	}
 `
 export const LoginButton = styled.div`
 	width:210px;
 	height:30px;
 	line-height:30px;
 	background: #4B0082;
 	margin:0 auto;
 	margin-top:30px;
 	.desc{
 		color:#FFF0F5;
 		text-align:center;
 	}
 	cursor:pointer;
 `
 export const LoginRememberPassword=styled.div`
 	margin-left:90px;
 	height:20px;
 `