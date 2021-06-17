
import '../index.css';
import { Content, Header } from '../components/Styles';
import Slider from '../components/Slider';
import Navbars from '../components/Navbars';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { Fragment } from 'react'; 
import SignInOutContainer from '../containers/index';
import ScrollTop from '../components/ScrollTop';
import ScrollButton from '../components/ScrollButton'; 
import Image from '../components/Image';
import FinalBoard from '../components/FinalBoard';
import Nav1 from '../components/Nav1';



function Home() {
  return (
    <div className="App">
      <BrowserRouter>
           {/* <Navbars/> */}
           {/* <Nav1/> */}
            </BrowserRouter>
  
    <Slider/>
    {/* <FinalBoard/> */}
    <Fragment> 
      <ScrollButton /> 
      
      <Content /> 
      <Image/>
      {/* <SignInOutContainer/>   */}
      
      
      <ScrollTop/>
    </Fragment> 
    
    </div>
  );
}

export default Home;
