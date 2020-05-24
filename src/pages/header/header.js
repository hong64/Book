import React,{Component} from 'react';
import {HeaderWrapper,LogoFont,HeaderItem,HeaderRight,LoginAndRegist,
ShopingCar,MyOrder,PersonCenter,SellerCenter} from './style';
import './statics/iconfont.css';
import './statics/loginIcon/iconfont.css';
import {actionCreators} from  './store';
import {connect} from 'react-redux';
class Header extends Component{
	render(){
		return(
			<HeaderWrapper>
				<HeaderItem>
					<LogoFont>网罗天下图书 传承中华文明</LogoFont>
					<HeaderRight>
						<SellerCenter className={this.props.sellerMouseState===false?'fontColor1':'fontColor2 underline'} 
							onMouseEnter={this.props.handleSellerMouseEnter}
							onMouseLeave={this.props.handleSellerMouseLeave}
						>卖家中心
							<div className={this.props.sellerMouseState===false?'sellerBox hiddenBox':'sellerBox'} >
								<div className="title">店铺</div>
								<div className="openbookstore">免费摆书摊</div>
								<div className="openstore">开店</div>

							</div>
						</SellerCenter>
						<PersonCenter className={this.props.personMouseState===false?'fontColor1':'fontColor2 underline'} 
							onMouseEnter={this.props.handlePersonMouseEnter}
							onMouseLeave={this.props.handlePersonMouseLeave}
						>个人中心
						</PersonCenter>
						<MyOrder className={this.props.orderMouseState===false?'fontColor1':'fontColor2 underline'} 
							onMouseEnter={this.props.handleOrderMouseEnter}
							onMouseLeave={this.props.handleOrderMouseLeave}
						>我的订单
						</MyOrder>
						<ShopingCar className={this.props.shopingMouseState===false?'fontColor1':'fontColor2 underline'} 
							onMouseEnter={this.props.handleShopingMouseEnter}
							onMouseLeave={this.props.handleShopingMouseLeave}
						>
							<div className="iconfont" >&#xe600;</div>
							购物车
						</ShopingCar>
						<LoginAndRegist className={this.props.loginMouseState===false?'fontColor1':'fontColor2 underline'} 
							onMouseEnter={this.props.handleLoginMouseEnter}
							onMouseLeave={this.props.handleLoginMouseLeave}
						>登录/注册
							<div className={this.props.loginMouseState===false?'LoginBox hiddenBox':'LoginBox'} >
								<div className="Login">登录</div>
								<div className="Regist">注册</div>
								<div className="other">
									<div className="icon_title">其它方式</div>
									<div>
										<div className="iconfont icon_weibo">&#xe61f;</div>
										<div className="iconfont icon_qq">&#xe6ca;</div>
										<div className="iconfont icon_weixin">&#xe61a;</div>
									</div>
								</div>
							</div>
						</LoginAndRegist>
					</HeaderRight>
				</HeaderItem>
				
			</HeaderWrapper>
		)
	}

}
const mapStateToProps = (state) => {
		return{
			sellerMouseState:state.getIn(['header','sellerMouseState']),
			personMouseState:state.getIn(['header','personMouseState']),
			orderMouseState:state.getIn(['header','orderMouseState']),
			shopingMouseState:state.getIn(['header','shopingMouseState']),
			loginMouseState:state.getIn(['header','loginMouseState'])
		}
}
const mapDispatchToProps = (dispatch) => {
		return{
			handleSellerMouseEnter(){
				dispatch(actionCreators.changeSellerMouseState(true));
			},
			handleSellerMouseLeave(){
				dispatch(actionCreators.changeSellerMouseState(false));
			},
			handlePersonMouseEnter(){
				dispatch(actionCreators.changePersonMouseState(true));
			},
			handlePersonMouseLeave(){
				dispatch(actionCreators.changePersonMouseState(false));
			},
			handleOrderMouseEnter(){
				dispatch(actionCreators.changeOrderMouseState(true));
			},
			handleOrderMouseLeave(){
				dispatch(actionCreators.changeOrderMouseState(false));
			},
			handleShopingMouseEnter(){
				dispatch(actionCreators.changeShopingMouseState(true));
			},
			handleShopingMouseLeave(){
				dispatch(actionCreators.changeShopingMouseState(false));
			},
			handleLoginMouseEnter(){
				dispatch(actionCreators.changeLoginMouseState(true));
			},
			handleLoginMouseLeave(){
				dispatch(actionCreators.changeLoginMouseState(false));
			}
			
		}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);