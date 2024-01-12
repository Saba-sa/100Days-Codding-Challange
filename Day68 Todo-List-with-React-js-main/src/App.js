import React from 'react';
import Action from './components/Action.js';
import Display from './components/Display';
import {Context} from './hooks/Context.js';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {  
      return (
        <div>
     <Context>
        <BrowserRouter>
          <Routes>
            <Route path='/action' element={<Action/>}></Route>
            <Route path='/' element={<Display/>}></Route>
          </Routes>
        </BrowserRouter>
    </Context>
     </div>
  )
}

export default App


