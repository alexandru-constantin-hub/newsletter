import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';

function App() {
  return (
    
   <div className="container">

    <BrowserRouter>
    
      <Switch>
          <Route exact path="/"><Form/></Route>
          <Route path="/success"><Success /></Route>
          <Route path="*"><Form /></Route>
      </Switch>

    </BrowserRouter>

    </div> 
   
  );
}

export default App;
