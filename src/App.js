// import React, { useState, useEffect} from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {

//   const [Click, setClick] = useState(0);
  
//   const handleClick=()=>setClick(Click+1);
// useEffect(()=>{console.log("USEEFFECT")})

  return (  
    // <>
    // <button onClick={handleClick}>Click me</button>
    // <div>{Click}</div>
    // </>
    
  <div>
     <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> 
   </div>
  )
}
;

export default App;
