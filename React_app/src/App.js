import './App.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Home from './containers/Home.js';
import SignInOutContainer from './containers/index';
import Navbars from './components/Navbars';
import FinalBoard from './components/FinalBoard';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
           <switch>
             
           <Route exact path="/login" component={SignInOutContainer} />
           <Route exact path="/business" component={FinalBoard} />
        <Route exact path="/" component={Home} />

       </switch>
       
            </BrowserRouter>
  
   
    
    </div>
  );
}

export default App;
