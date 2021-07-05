import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Profile from './pages/profile'
import Bookingform from './pages/bookingform';
import Admin from './pages/admin';
import Addcarform from './pages/addcarform';
import SignIn from './pages/signin';
import { FooterContainer } from "./components/footer/footer";


function App() {
 


  return (
    
    <Router>
     <div className='Background'>
     <Route path='/' exact component={Index} />
    
      <Navbar />
          <Switch>
           
            <Route path='/home' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />     
            <Route path='/profile' component={Profile} />
            <Route path='/bookingform' component={Bookingform} />
            <Route path='/admin' component={Admin} />
            <Route path='/addcar' component={Addcarform} />
            
            <Route path='/signin' component={SignIn} />
          </Switch>
   
  
      <FooterContainer />
     
      </div>
    </Router>
  );
}

export default App;