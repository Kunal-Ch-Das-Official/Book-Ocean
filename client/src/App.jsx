import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/common/header/Navbar.jsx';
import PageFooter from './components/common/footer/PageFooter.jsx';


function App() {

  return (
<>
<Navbar/>
<div className='min-h-screen'>
<Outlet/> 
</div>

<PageFooter/>
</>
  )
}

export default App;
