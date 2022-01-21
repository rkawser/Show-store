import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
  
       <Router>
         <Header></Header>
         <Switch>

         <Route exact path='/'>
           <Home></Home>
           </Route>

           <Route path='/home'>
           <Home></Home>
           </Route>

           <Route path='/about'>
           <Home></Home>
           </Route>

           <Route path='/contact'>
           <Home></Home>
           </Route>

         </Switch>
       </Router>
    </div>
  );
}

export default App;
