import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { BoyProduct } from './Components/BoyProduct/BoyProduct';
import { GirlsProduct } from './Components/GirlsProduct/GirlsProduct'
import BabayProduct from './Components/BabayProduct/BabayProduct';
import PageNotFound from './Components/NotFound/PageNotFound';

import { BrowserRouter as Router,

  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './Components/Payment/Payment';
import MyOrders from './Components/MyOrders/MyOrders';
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import Firebase from './Components/Footer/Firebase/Firebase';
import Login from './Components/Login/Login';

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
           <About></About>
           </Route>

           <Route path='/contact'>
           <Contact></Contact>
           </Route>

           <Route path='/boy'>
           <BoyProduct></BoyProduct>
           </Route>


           <Route path='/girls'>
           <GirlsProduct></GirlsProduct>
           </Route>

           <Route path='/babay'>
           <BabayProduct></BabayProduct>
           </Route>

           <Route path='/payment'>
           <Payment></Payment>
           </Route>

           <Route path='/myorders'>
           <MyOrders></MyOrders>
           </Route>

           <Route path='/review'>
           <Review></Review>
           </Route>

           <Route path='/register'>
           <Register></Register>
           </Route>

           <Route path='/login'>
           <Login></Login>
           </Route>


           <Route path='/firebase'>
          <Firebase></Firebase>
           </Route>

           <Route exact path='*'>
          <PageNotFound></PageNotFound>
           </Route>


         </Switch>
         {/* <Footer></Footer> */}
       </Router>
    </div>
  );
}

export default App;
