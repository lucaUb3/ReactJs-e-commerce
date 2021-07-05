//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from './screens/ItemListContainer/ItemListContainer';
import ItemListContainerCategory from './screens/ItemListContainer/ItemListContainerCategory';
import {Counter} from './components/Counter/ItemCounter.js';
import {ItemCount} from './components/Counter/ItemCounter';
import {ItemDetailContainer} from './screens/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartProvider} from './components/CartContext/CartContext.js';
import {Cart} from './/screens/Cart/Cart.js';


const App = props => {
return <div>
<CartProvider>
<BrowserRouter> 
<NavBar/>
<Switch>
<Route exact path= "/">
<ItemListContainer/>
</Route>
<Route exact path= "/category/:Categoryid">
<ItemListContainerCategory/>
</Route>
<Route exact path= "/Item/:itemid">
<ItemDetailContainer/>
</Route>
<Route exact path= "/cart">
<Cart/>
</Route>
</Switch>
</BrowserRouter> 
</CartProvider>
</div>}

export default App;
