import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search'
import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi';



const App = () => {
  return (
  <Router>
    <div >
     <Link to='/'>
         <GiKnifeFork/>
      </Link>
     <Search/>
     <Category/>
      <Pages/>
    </div>

  </Router>
  )
}

export default App;