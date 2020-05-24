import React,{Component} from 'react';
import {SearchWrapper,Logo,SearchRight,SearchInput,SearchButton} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
class SearchArea extends Component{
	render(){
		return(
			<SearchWrapper>
				<Logo>
					<a className="LogoFont" href="/">書香网</a>
				</Logo>
				<SearchRight>
					<SearchInput placeholder="商品名称、出版社、作者、ISBN"/>
					<SearchButton className={this.props.mouseSearchButtonState===false?"color1":"color2"}
						onMouseEnter={this.props.handleMouseSearchButtonStateEnter}
						onMouseLeave={this.props.handleMouseSearchButtonStateLeave}
					>搜索</SearchButton>
				</SearchRight>
				
				
			</SearchWrapper>
		)
	}
}

const mapStateToProps = (state) => {
		return{
			mouseSearchButtonState:state.getIn(['search','mouseSearchButtonState'])
		}
}
const mapDispatchToProps = (dispatch) => {
		return{
			handleMouseSearchButtonStateEnter(){
				dispatch(actionCreators.changeSearchButtonAction(true));
			},
			handleMouseSearchButtonStateLeave(){
				dispatch(actionCreators.changeSearchButtonAction(false));
			}
			
		}
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchArea);
