import React from 'react';
import Login from './pages/login/Login';
import Header from './pages/header/header';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import SearchArea from './pages/SearchArea/SearchArea';
import Home from './pages/home/Home';
import store from './store';
import Category from './pages/Category/Category';
function App() {
  return (
  	<BrowserRouter>
    <div>
    	<Provider store={store}>
   			<Route path='/login' exact component={Login}></Route>
   			<Route path='/'  component={Header}></Route>
   			<Route path='/'  component={SearchArea}></Route>
   			<Route path='/' exact component={Home}></Route>
   			<Route path="/category/minbook"  component={Category}></Route>

   		</Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
