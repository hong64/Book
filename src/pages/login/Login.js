import React,{Component,Fragment} from 'react'
import {LoginBackground,LoginWrapper,LoginItem,LoginTitle,LoginUser,LoginPassword,LoginButton,
	LoginRememberPassword
} from './style';
import './statics/iconfont.css';
class Login extends Component{
	render(){
		return(
			<Fragment>
				<LoginWrapper>
					<LoginBackground/>
					<LoginItem>
						<LoginTitle>
							<div className="desc">欢迎使用书香网管理系统</div>
						</LoginTitle>
						<LoginUser>
							<div className="iconfont">&#xe60a;</div>
							<input className="userInput" placeholder="用户"/>
						</LoginUser>
						<LoginPassword>
							<div className="iconfont">&#xe6b2;</div>
							<input className="passwordInput" placeholder="密码"/>
						</LoginPassword>
						<LoginRememberPassword>
							<input id="remember" type="checkbox"/><label for="remember">记住密码</label>
						</LoginRememberPassword>
						<LoginButton>
							<div className="desc">登录</div>
						</LoginButton>
					</LoginItem>
				</LoginWrapper>
			</Fragment>
		)
	}
}
export default Login;