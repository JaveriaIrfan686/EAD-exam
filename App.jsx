import React, { useState, useEffect } from "react";
import { Label } from "reactstrap";

function TimerApp() {
  const [seconds, setSeconds] = useState(10);
  const [checkActive, setActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (checkActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!checkActive && seconds !== 0) {
      clearInterval(interval);
    } else if ({seconds} == 0) {
        setActive(false)
        
    }
    return () => clearInterval(interval);
  }, [checkActive, seconds]);

  const start = () => {
    setActive(true);
    if ({seconds} == 0) {
      setActive(false)
      
    }
  };

  

  
  return (
    <div>
      <h1>Timer: {seconds}s</h1>
      
      <button onClick={start}>Start</button>
      
    </div>
  );
}

export default TimerApp;


// import React from 'react';
// import Home from './Home';
// import AboutUs from './Aboutus';
// import Explore from './Explore';
// import Details from './HDetails';
// import ID from './InsideDetails';
// // import filterproduct from './filterProducts';
// import mypromise from './PromiseExample'
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import MyProfile from './classDemo';
// import {A} from './passingDataBetweenComp'
// import {PropsDemo} from './PropsDemo';
// import Array from './Array';
// import Counter from './Counter';
// import ChildProp from './ChildPropdemo';
// // import SimpleForm from './SimpleForm';
// import MyForm from './SimpleForm';
// import UseEffectDemo from './UseEffectDemo';
// import {HOC, CountNew} from './HOCDemo';

// const App = () => {
//   return (
//     <div>
//       <HOC  cmp={CountNew}/>
//       <UseEffectDemo/>
//       {/* // <SimpleForm/> */}
//       <MyForm/>
//       <ChildProp value={"this is prop"}>
//          <div>
//            <p> this is child prop</p> 
//             do you understand?
//           </div>

//       </ChildProp> 
//       <PropsDemo text="from App.js" data={{name: 'javeria'}} age={{age:23}}  />
//       <PropsDemo text="from App.js" data={{name: 'javeria'}} age={{age:23}}  />
//       <PropsDemo text="from App.js" data={{name: 'javeria'}} age={{age:23}}  />
//       <PropsDemo text="from App.js" data={{name: 'javeria'}} age={{age:23}}  />
//       <mypromise/>
//       <MyProfile/>
//       <A/>
//       <Array/>
//       <Counter initial={0} min={10} max={20}/>
      
//       <Router>
//         <NavLink to="/home">Home</NavLink>
//         <br />
//         <NavLink to="/aboutus">About us</NavLink>
//         <br />
//         <NavLink to="/explore">Explore</NavLink>
        
//         <Routes>
//           <Route path="/home" element={<Home />}>
//             <Route path="details" element={<Details />} /> {/* Relative route path */}
//             <Route path="insideDetail" element={<ID />} /> {/* Relative route path */}
            
//           </Route>
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="filterproduct" element={<filterproduct/>}  />
//         </Routes>
//       </Router>

//       <Router>
//         <NavLink to="/aboutus">About us2</NavLink>
//         <NavLink to="/home">Home2</NavLink>

//         <Routes>
//           <Route path="/aboutus" element={<Home/>} />
//         </Routes>
//       </Router>
  
      
//     </div>
  
  
  
//   );

  
   


// };

// export default App;


