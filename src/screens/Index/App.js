// import React from 'react';
// import Navbar from './components/Navbar';
// import './App.css';
// import Home from './components/pages/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// //import { Routes ,Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path='/' element={<Home/>} />
//           <Route path='/services' element={<Services/>} />
//           <Route path='/products' element={<Products/>} />
//           <Route path='/sign-up' element={<SignUp/>} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Sevices from './components/Services';
import OurTeam from './components/OurTeam';
import ContactUs from './components/ContactUs';
//import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Sevices/>
      <OurTeam/>
      <ContactUs/>
      {/* <Footer/> */}
    </div>
  );
}
