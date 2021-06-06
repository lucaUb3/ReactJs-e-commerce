//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from './components/PageComponents/ItemListContainer.js';

const App = props => {
return <div> 
<NavBar/>
<ItemListContainer titulo = 'proximamente'>

</ItemListContainer>



</div>}

export default App;
