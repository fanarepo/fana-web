import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Charity from './pages/Charity';
import Tutorial from './components/Tutorial';
import Brands from './pages/Brands';


function App() {
  const { user, authIsReady } = useAuthContext()


  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={user ? <Home/> : <Navigate to="/tutorial" replace />}/>
          <Route path='/signup' element={user ? <Home/> : <Signup/>}/>
          <Route path='/login' element={user ? <Home/> : <Login/>}/>
          <Route path='/charity' element={<Charity/>}/>
          <Route path='/tutorial' element={<Tutorial/>}/>
          <Route path='/impact' element={<Login/>}/>
          <Route path='/wallet' element={<Login/>}/>
          <Route path='/brands' element={<Brands/>}/>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
