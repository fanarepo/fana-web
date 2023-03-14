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

  const { logout } = useLogout()

  return (
    <div className="App">
      <BrowserRouter>
      <nav>
          <h1>Fana Router</h1>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/charity">Charity</Link></li>
          <li><Link to="/tutorial">Tutorial</Link></li>
          <li onClick={() => logout()} >Logout</li>

        </nav>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/charity' element={<Charity/>}/>
          <Route path='/tutorial' element={<Tutorial/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
