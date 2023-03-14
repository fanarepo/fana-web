import './Signup.css'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { auth, provider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'
import fanaLogo from '../assets/fanaLogo.png'
import google from '../assets/google.png'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {error, setError, signup } = useSignup()
  const { dispatch } = useAuthContext()
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
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
    <div className='signup'>
      <img src={fanaLogo}  className='logo'/>
      <form onSubmit={handleSubmit} className='signup-form'>
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
            type="password"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <div className='signup-btn'>Sign Up</div>
        {error && <p>{error}</p>}
      </form>
      <p>---------or sign in with:---------</p>
      <img src={google} onClick={googleSignup}/>
    </div>
  )
}
