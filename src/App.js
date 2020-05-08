import React , {component} from 'react';

import './App.css';
import Demo from './Demo';

import Home from './Home';
import Project from './project'
import {BrowserRouter ,Route , Switch} from 'react-router-dom';

function App() {
  
  return (<BrowserRouter>
  <div>
        <Demo/>
        
     

        
        <Switch>
          
          <Route exact path='/portfolio' exact component={Home}></Route>
          <Route exact path='/portfolio/project' component={Project}></Route>
      
        </Switch>
</div>
    </BrowserRouter>
    

  );

}

export default App;
