
import './App.css';
import {Routes , Route} from "react-router-dom"
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>

   <Route exact path='/' Component={Home} >
   </Route>

<Route exact path='/blog' Component={Blog}> </Route>

   </Routes>
   
   </>
  );
}

export default App;
