import React,{Component} from 'react';
import {HomeWrapper,HomeNav,HomeLunBo,Category,Recommend,HomeRight,RecommendTitle,
	RecommendItem,BookItem,HomeLeft,BookRank,DetailCategory} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import Swiper from 'swiper/js/swiper.js';
import  'swiper/css/swiper.css';
import {fromJS} from 'immutable'
class Home extends Component{
	judgeMouseLeave(index){
		if(this.props.itemDetailState===true || this.props.detailCategoryMouseState===true){
			return "detail isDisplay"
		}else{
			return "detail notDisplay"
		}
	}
	getDetailPart(sub){
		const part = [];
		sub.map((item,index)=>{
			part.push(<div  key={index} className="detailCategoryItem">
						<a className="detailCategoryItemFont">{item}</a>
						<span> | </span>
					</div>)
		})
		return part;

	}
	getDeatilCategoryTitle(){

		const list = [];
		this.props.categoryDetailState.map((item,index)=>{
			list.push(
						<div key={index} className="module">
							<div className="title">>&nbsp;&nbsp;<a className="titleFont">{item.get('title')}</a></div>
							<div className="detailCategory">
								{this.getDetailPart(item.get('subCategory'))}
							</div>
						</div>
				)

		});
		return list;				
	}
	getRecommendItemList(){
		const list = [];
		this.props.recommendState.map((item,index)=>{
			list.push(
							<BookItem key={index} className="bookitem"> 
								<div className="imgWrapper" title={item.get('title_desc')}
								>
									<img className="bookimg" 
										src={item.get('src')}
									/>
								</div>
								<div className="bookname" title={item.get('title_writer')}><a className="bookfont" href={item.get('href')}>{item.get('bookName')}</a></div>
								<div className="bookwriter"><div className="bookfont">{item.get('bookwriter')}</div></div>
								<div className="bookprice"><span className="price">{item.get('price')}</span>起</div>
							</BookItem>

			)
		});
		return list;
	}
	getRankList(){
		const list = [];
		this.props.rankListState.map((item,index)=>{
			list.push(
				<div className="rankitem">
							<img className="rankImg" 
								src={item.get('src')}
							/>
							<div className="rankwrapper">
									<span className="rankNum">{item.get('rank')}.</span>
									<a className="rankItemName" href={item.get('href')}>{item.get('bookName')}</a>
							</div>
				</div>
			)
		});
		return list;
	}
	render(){
		return(
			<HomeWrapper>
				<HomeNav>
					<a href="/" className={this.props.homeNavState.get(0) === false?"homenav":"homenav homenav_addcolor"}
						onMouseEnter = {()=>{this.props.handleMouseEnterNavItem(0)}}
						onMouseLeave = {()=>{this.props.handleMouseLeaveNavItem(0)}}
					>
						<div>首页</div>
					</a>
					<a href="/" className={this.props.homeNavState.get(1) === false?"homenav":"homenav homenav_addcolor"}
						onMouseEnter = {()=>{this.props.handleMouseEnterNavItem(1)}}
						onMouseLeave = {()=>{this.props.handleMouseLeaveNavItem(1)}}
					>
						<div>书店区</div>
					</a>
					<a href="/" className={this.props.homeNavState.get(2) === false?"homenav":"homenav homenav_addcolor"}
						onMouseEnter = {()=>{this.props.handleMouseEnterNavItem(2)}}
						onMouseLeave = {()=>{this.props.handleMouseLeaveNavItem(2)}}
					>
						<div>书摊区</div>
					</a>
					<a href="/" className={this.props.homeNavState.get(3) === false?"homenav":"homenav homenav_addcolor"}
						onMouseEnter = {()=>{this.props.handleMouseEnterNavItem(3)}}
						onMouseLeave = {()=>{this.props.handleMouseLeaveNavItem(3)}}
					>
						<div>新书</div>
					</a>
					<a href="/" className={this.props.homeNavState.get(4) === false?"homenav":"homenav homenav_addcolor"}
						onMouseEnter = {()=>{this.props.handleMouseEnterNavItem(4)}}
						onMouseLeave = {()=>{this.props.handleMouseLeaveNavItem(4)}}
					>
						<div>资讯</div>
					</a>
					<a href="/" className={this.props.homeNavState.get(5) === false?"homenav":"homenav homenav_addcolor"}
						onMouseEnter = {()=>{this.props.handleMouseEnterNavItem(5)}}
						onMouseLeave = {()=>{this.props.handleMouseLeaveNavItem(5)}}
					>
						<div>社区</div>
					</a>
					<a href="/" className={this.props.homeNavState.get(6) === false?"homenav":"homenav homenav_addcolor"}
						onMouseEnter = {()=>{this.props.handleMouseEnterNavItem(6)}}
						onMouseLeave = {()=>{this.props.handleMouseLeaveNavItem(6)}}
					>
						<div>二手书专卖</div>
					</a>
				</HomeNav>
				<HomeLeft>
				<Category>
					<div className="categoryFirst">
						<div className="categoryTitle">图书</div>
					</div>
					<div className={this.props.itemState.get(0)===false?"item":"isBorder"}
						 onMouseEnter={()=>this.props.handleMouseEnterItem(0)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(0)}

					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(0)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(0)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(0)}}
							>线装古籍</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/category/minbook" className={this.props.categoryItemText.get(1)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(1)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(1)}}
							>民国旧书</a>
						</div>
						
					</div>
					<div className={this.props.itemState.get(1)===false?"item":"isBorder"}
						 onMouseEnter={()=>this.props.handleMouseEnterItem(1)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(1)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(2)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(2)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(2)}}
							>期刊</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(3)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(3)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(3)}}
							>报纸</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(4)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(4)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(4)}}
							>英文原版</a>

						</div>
					</div>
					<div className={this.props.itemState.get(2)===false?"item":"isBorder"}
						 onMouseEnter={()=>this.props.handleMouseEnterItem(2)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(2)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(5)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(5)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(5)}}
							>国学古籍</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(6)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(6)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(6)}}
							>收藏鉴赏</a>
						</div>
					</div>
					<div className={this.props.itemState.get(3)===false?"item":"isBorder"}
							onMouseEnter={()=>this.props.handleMouseEnterItem(3)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(3)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(7)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(7)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(7)}}
							>小说</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(8)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(8)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(8)}}
							>文学</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(9)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(9)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(9)}}
							>语言文字</a>

						</div>
					</div>
					<div className={this.props.itemState.get(4)===false?"item":"isBorder"}
							 onMouseEnter={()=>this.props.handleMouseEnterItem(4)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(4)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(10)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(10)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(10)}}
							>历史</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(11)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(11)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(11)}}
							>地理</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(12)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(12)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(12)}} 
							>艺术</a>
						</div>
					</div>
					<div className={this.props.itemState.get(5)===false?"item":"isBorder"}
					     onMouseEnter={()=>this.props.handleMouseEnterItem(5)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(5)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(13)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(13)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(13)}}
							>政治</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(14)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(14)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(14)}}
							>法律</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(15)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(15)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(15)}}
							>军事</a>
						</div>
					</div>
					<div className={this.props.itemState.get(6)===false?"item":"isBorder"}
						 onMouseEnter={()=>this.props.handleMouseEnterItem(6)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(6)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(16)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(16)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(16)}}
							>哲学</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(17)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(17)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(17)}}
							>心理</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(18)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(18)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(18)}}
							>宗教</a>
						</div>
					</div>
					<div className={this.props.itemState.get(7)===false?"item":"isBorder"}
							 onMouseEnter={()=>this.props.handleMouseEnterItem(7)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(7)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(19)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(19)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(19)}}
							>经济</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(20)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(20)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(20)}}
							>社科</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(21)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(21)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(21)}}
							>综合</a>
						</div>
					</div>
					<div className={this.props.itemState.get(8)===false?"item":"isBorder"}
						 onMouseEnter={()=>this.props.handleMouseEnterItem(8)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(8)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(22)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(22)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(22)}}
							>童书</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(23)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(23)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(23)}}
							>生活</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(24)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(24)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(24)}}
							>体育</a>
						</div>
					</div>
					<div className={this.props.itemState.get(9)===false?"item":"isBorder"}
						 onMouseEnter={()=>this.props.handleMouseEnterItem(9)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(9)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(25)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(25)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(25)}}
							>工业技术</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(26)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(26)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(26)}}
							>互联网</a>
						</div>
					</div>
					<div className={this.props.itemState.get(10)===false?"item":"isBorder"}
						 onMouseEnter={()=>this.props.handleMouseEnterItem(10)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(10)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(27)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(27)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(27)}}
							>自然科学</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(28)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(28)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(28)}}
							>医药卫生</a>
						</div>

					</div>
					<div className={this.props.itemState.get(11)===false?"item":"isBorder"}
						 onMouseEnter={()=>this.props.handleMouseEnterItem(11)}
							onMouseLeave={()=>this.props.handleMouseLeaveItem(11)}
					>
						<div className="item-text">
							<a href="/" className={this.props.categoryItemText.get(29)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(29)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(29)}}
							>教材</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(30)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(30)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(30)}}
							>教辅</a>
							<span>&nbsp;/&nbsp;</span>
							<a href="/" className={this.props.categoryItemText.get(31)===false?"":"underline"}
								onMouseEnter={()=>{this.props.handleMouseOnCategoryItemText(31)}}
								onMouseLeave={()=>{this.props.handleMouseLeaveCategoryItemText(31)}}
							>考试</a>
						</div>
					</div>

					<BookRank>
						<div className="rankTitle">
							<span className="rankTitleFont">书籍排行</span>
							<a className="moreRank">更多</a>
						</div>
						{this.getRankList()}
					</BookRank>
				</Category>
				</HomeLeft>
				<DetailCategory className={this.judgeMouseLeave()}
					onMouseEnter={this.props.handleMouseEnterDetailCategory}
					onMouseLeave={this.props.handleMouseLeaveDetailCategory}
				>
					<div className="detailCategoryWrapper">
						{this.getDeatilCategoryTitle()}
					</div>
				</DetailCategory>
				<HomeRight>
					<HomeLunBo  src="https://img0.kfzimg.com/operation/ad/7c/ad7c0217428bea6af6e3c72bf7a3dbb1.jpg"/>
					<Recommend>
						<RecommendTitle>
							<div>
								<span className="recommendFont">好书推荐</span>
								<span>&nbsp;/&nbsp;</span>
								<a className="moreRecommend" href="/">更多</a>
							</div>
						</RecommendTitle>
						<div className="fenge"><hr/></div>
						<RecommendItem >
							{this.getRecommendItemList()}
						</RecommendItem>
					</Recommend>
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount(){
		this.props.handleGetRecommendList();
		this.props.handleGetRankState();
	}
	

}


const mapStateToProps = (state) => {
		return{
			itemState:state.getIn(['home','itemState']),
			categoryItemText:state.getIn(['home','categoryItemText']),
			itemDetailState:state.getIn(['home','itemDetailState']),
			categoryDetailState:state.getIn(['home','categoryDetailState']),
			detailCategoryMouseState:state.getIn(['home','detailCategoryMouseState']),
			recommendState:state.getIn(['home','recommendState']),
			homeNavState:state.getIn(['home','homeNavState']),
			rankListState:state.getIn(['home','rankListState'])

		}
}
const mapDispatchToProps = (dispatch) => {
		return{
			handleMouseEnterItem(index){
				dispatch(actionCreators.changeItemState(index,true));
				dispatch(actionCreators.getDeatilCategory(index));
			},
			handleMouseLeaveItem(index){
				dispatch(actionCreators.changeItemState(index,false));
			},
			handleMouseOnCategoryItemText(index){
				dispatch(actionCreators.changeCategoryItemState(index,true));
			},
			handleMouseLeaveCategoryItemText(index){
				dispatch(actionCreators.changeCategoryItemState(index,false));
			},
			handleMouseEnterDetailCategory(){
				dispatch(actionCreators.changeDetailCategoryMouseState(true));
			},
			handleMouseLeaveDetailCategory(){
				dispatch(actionCreators.changeDetailCategoryMouseState(false));
			},
			handleGetRecommendList(){
				dispatch(actionCreators.getRecommendList());
			},
			handleMouseEnterNavItem(index){
				dispatch(actionCreators.changeHomeNavState(index,true));
			},
			handleMouseLeaveNavItem(index){
				dispatch(actionCreators.changeHomeNavState(index,false));
			},
			handleGetRankState(){
				dispatch(actionCreators.getRankList());
			}
			
		}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
