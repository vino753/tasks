import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Table1 from './Table'
import SimpleTabs from './Authentication'

function App() {
  return (
    
    <div className="App">
    
     <SimpleTabs/>
      <BrowserRouter>
          <Switch>
            
            
          </Switch>
        </BrowserRouter>   
        
       
    </div>
  );
} 

export default App;


