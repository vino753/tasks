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
            <Route exact path='/Table' component={Table1}/>
            
          </Switch>
        </BrowserRouter>   
        
       
    </div>
  );
} 

export default App;


