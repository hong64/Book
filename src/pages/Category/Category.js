import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {CategoryMid,CategoryWrapper,CategoryTitle,CategoryNav,CategoryBookItem,CategoryBookWrapper,BookDesc
	,BookPriceDesc,FenYeItem} from './style';
import './statics/iconfont.css';
class Category extends Component{
	getBookList(){
		const list = [];
		this.props.bookListState.map((item,index)=>{
			list.push(
						<CategoryBookWrapper key={index}>
							<CategoryBookItem>
								<img className="bookImg" src={item.get('src')}/> 
								<BookDesc>
									<div className="title descItem"><a href="/"> {item.get('bookName')} </a></div>
									<div className="writer descItem">作者：<a> {item.get('BookWriter')} </a></div>
									<div className="publisher descItem">出版社： <span> {item.get('publisher')} </span></div>
									<div className="date descItem">出版日期：<span> {item.get('date')} </span></div>
									<div className="evaluate">
										<a className="shop" href="/">{item.get('shopName')}</a>
										<i className="iconfont yellow">&#xe60c;</i>
										<i className="iconfont yellow">&#xe60c;</i>
										<i className="iconfont yellow">&#xe60c;</i>
										<i className="iconfont yellow">&#xe60c;</i>
										<i className="iconfont yellow">&#xe60c;</i>
										<span className="evaluatePersonNum">({item.get('evaluatePersonNum')}评价)</span>
									</div>
								</BookDesc>
								<BookPriceDesc>
									<div className="priceItem right">￥<span className="price">{item.get('price')}</span></div>
									<div className="kuaidiItem right">快递包裹：￥<span className="kuaidiPrice">{item.get('kuaidiPrice')}</span></div>
									<div className="fahuoDate right">{item.get('fahuoDate')}</div>
									<div className="operation right"><a href="/" className="addShopCar">添加到购物车</a></div>
									<div className="operation right"><a href="/" className="buy">立即购买</a></div>
									
								</BookPriceDesc>
							</CategoryBookItem>

						</CategoryBookWrapper>
			)
		})
		return list;
	}
	getFenYePage(){
		const list= [];
		for(var i = 1;i<this.props.totalPage;i++){
			list.push(<a key={i} className={this.props.bookPage===i?"page active":"page"}  onClick={this.props.handleChangeBookPage.bind(this,i)}>{i}</a>);
		}
		return list;
	}
	render(){
		return(
			<div>
				<CategoryWrapper>
					<CategoryMid>
						<CategoryTitle>
							<div className="title">
								图书标签:小说
							</div>
						</CategoryTitle>
						<CategoryNav>
							<a className="navItem" href="/">按收藏人数排序</a> 
							<span className="navItem">&nbsp;/&nbsp;</span>
							<a className="navItem" href="/">按出版日期排序</a>
							<span className="navItem">&nbsp;/&nbsp;</span>
							<a className="navItem" href="/">按价格排序</a>
							<span className="navItem">&nbsp;/&nbsp;</span>		
							<span className="navItem" href="/">综合排序</span>
						</CategoryNav>
						{this.getBookList()}
						<CategoryBookWrapper>
							<CategoryBookItem>
								<img className="bookImg" src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/3e93/3e93c22b5fb154b87aaf8698e4240fea_0_2_140_140.jpg"/> 
								<BookDesc>
									<div className="title descItem"><a href="/"> 活着 </a></div>
									<div className="writer descItem">作者：<a> [日] 东野圭吾 </a></div>
									<div className="publisher descItem">出版社： <span> 南海出版公司 </span></div>
									<div className="date descItem">出版日期：<span> 2013-1-1 </span></div>
									<div className="evaluate">
										<a className="shop" href="/">龙吟阁</a>
										<i className="iconfont yellow">&#xe60c;</i>
										<i className="iconfont yellow">&#xe60c;</i>
										<i className="iconfont yellow">&#xe60c;</i>
										<i className="iconfont yellow">&#xe60c;</i>
										<i className="iconfont yellow">&#xe60c;</i>
										<span className="evaluatePersonNum">(1890评价)</span>
									</div>
								</BookDesc>
								<BookPriceDesc>
									<div className="priceItem right">￥<span className="price">100.0</span></div>
									<div className="kuaidiItem right">快递包裹：￥<span className="kuaidiPrice">89.0</span></div>
									<div className="fahuoDate right">七天发货</div>
									<div className="operation right"><a href="/" className="addShopCar">添加到购物车</a></div>
									<div className="operation right"><a href="/" className="buy">立即购买</a></div>									
								</BookPriceDesc>
							</CategoryBookItem>
							<FenYeItem>
								<div className="fenye">
									{this.getFenYePage()}
									<a className="page">8</a>
								</div>
							</FenYeItem>
						</CategoryBookWrapper>
						
					</CategoryMid>
					
				</CategoryWrapper>
			</div>
		)
	}
	componentDidMount(){
		this.props.handleGetBookList(this.props.bookPage);
	}
}
const mapStateToProps = (state) => {
	return{
		bookListState:state.getIn(['book','bookListState']),
		bookPage:state.getIn(['book','bookPage']),
		totalPage:state.getIn(['book','totalPage'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		handleGetBookList(page){
			dispatch(actionCreators.getBookList(page));

		},
		handleChangeBookPage(page){
			dispatch(actionCreators.getBookList(page));
			dispatch(actionCreators.changeBookPage(page));
			window.scrollTo(100,100);
		}
	}

}
export default connect(mapStateToProps,mapDispatchToProps)(Category);