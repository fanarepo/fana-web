import './Login.css'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { auth, provider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'
import fanaLogo from '../assets/fanaLogo.png'
import google from '../assets/google.png'
import { Link } from 'react-router-dom'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, setError, login } = useLogin()
  const { dispatch } = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  const googleSignup = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
    .then((res) => {
      dispatch({ type: 'LOGIN', payload: res.user })
  })
  .catch((err) => {
    setError(err.message)
  })
  }
  
  return (
    <div className='login'>
      <img src={fanaLogo}  className='logo'/>
      <form onSubmit={handleSubmit} className='login-form'>
        <label>
          
          <input
            required
            type="email"
            placeholder='E-Mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          
          <input
            required
            placeholder='Password'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <div className='login-btn'>Login</div>
        {error && <p>{error}</p>}
      </form>

      <p>---------or sign in with:---------</p>
      <img src={google} onClick={googleSignup}/>
      
      <p>don't have an account? <Link to="/signup" className='link'>Signup</Link></p>
      
    </div>
  )
}
