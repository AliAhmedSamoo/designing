import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignIn from './pages/signin'
import SignUp from './pages/signup';
import { FooterContainer } from "./components/footer/footer";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


function App() {
 


  return (
    
    <Router>
     <div className='Background'>
      <Navbar />
      <TransitionGroup>
        <CSSTransition timeout={250} className="fade" >
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/contact-us' component={Contact} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <FooterContainer />
      </div>
    </Router>
  );
}

export default App;