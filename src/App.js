//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from './components/PageComponents/ItemListContainer.js';
import ItemListContainerCategory from './components/PageComponents/ItemListContainerCategory.js';
import {Counter} from './components/Counter/ItemCounter.js';
import {ItemCount} from './components/Counter/ItemCounter';
import {ItemDetailContainer} from './components/PageComponents/ItemDetailContainer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = props => {
return <div>
<BrowserRouter> 
<NavBar/>
<Switch>
<Route exact path= "/">
<ItemListContainer/>
</Route>
<Route exact path= "/category/:Categoryid">
<ItemListContainerCategory/>
</Route>
<Route exact path= "/ItemDetail">
<ItemDetailContainer/>
</Route>
</Switch>
</BrowserRouter> 
</div>}

export default App;
