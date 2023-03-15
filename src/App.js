import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useLogout } from './hooks/useLogout';

//pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Charity from './pages/Charity';
import Tutorial from './components/Tutorial';



function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/charity' element={<Charity/>}/>
          <Route path='/tutorial' element={<Tutorial/>}/>
          <Route path='/impact' element={<Login/>}/>
          <Route path='/wallet' element={<Login/>}/>
          <Route path='/brands' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
