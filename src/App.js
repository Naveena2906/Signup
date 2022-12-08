
import './App.css';
import RegisterForm from './components/form';
import Appz from './class';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './home'
 import Face from './facebook';

function App() {
  return (
    <div className="App">
      
    <RegisterForm/>
  <Appz/>
  <Home/>
    <BrowserRouter>
  <Routes>
    <Route path='/f' element={<Face/>}/>
  </Routes>
  </BrowserRouter>   
  
      </div>
  );
}

export default App;
