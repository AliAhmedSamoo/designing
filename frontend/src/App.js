import React, {useState} from 'react';
import './App.css';
import { BackTop } from 'antd';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Profile from './pages/profile';
import History from './pages/history';
import Bookingform from './pages/bookingform';
import Admin from './pages/admin';
import Addcarform from './pages/addcarform';
import SignIn from './pages/signin';
import { FooterContainer } from "./components/footer/footer";
import ScrollToTop from './components/ScrollToTop'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';



const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#F48B18',
  textAlign: 'center',
  fontSize: 14,
  background: `#013463`
  //   color: #F48B18;
};

function App() {

  const [email, setemail] = useState(localStorage.getItem('email'));


  return (
    
    <Router><ScrollToTop />
     <div className='Background'>

    
     

          <Switch>
          
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/services' component={Services} />     
            <Route path='/profile' component={Profile} />
            <Route path='/history' component={History} />
           
            <Route path='/bookingform' component={Bookingform} />

            <Route path='/admin' component={Admin} />
            <Route path='/addcar' component={Addcarform} />
            
            <Route path='/signin' component={SignIn} />
          </Switch>

          <BackTop>
      <div style={style}><PublishOutlinedIcon fontSize='large'/></div>
    </BackTop>
      <FooterContainer />
     
      </div>
    </Router>
  );
}

export default App;