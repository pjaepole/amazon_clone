import {Link, useNavigate } from 'react-router-dom'
import './Login.css'
import amazonlogo from '../amazon_PNG12.png'
import {useState} from 'react'
import { auth,signInWithEmailAndPassword} from '../firebase'

function Login(){
    const navigate=useNavigate()
    const initialformvalues={
        email:'',
        password:''
    }
    const [formvalues, setFormvalues]=useState(initialformvalues)

    const formchangeHandler=(e)=>{
        setFormvalues({
            ...formvalues,
            [e.target.name]:e.target.value
        })
    }
    const loginHandler=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,formvalues.email,formvalues.password)
            .then((auth)=>{
                console.log(auth.user.email)
                localStorage.setItem('amazclonelogin',auth.user.email)
                navigate('/')})
            .catch((e)=>(alert(e.message)))
    }
    
    return (
        <div className='login'>
            
            <Link to='/'>
                <img className='login_logo' alt='amazon logo' src={amazonlogo}></img>
            </Link>
            <div className='login_form_container'>
                <h1>Sign in</h1>
                <form className='login_form'>
                    <h5>E-mail</h5>
                    <input name='email' value={formvalues.email} onChange={formchangeHandler}></input>
                    <h5>Password</h5>
                    <input name='password' value={formvalues.password} onChange={formchangeHandler}></input>
                    <button onClick={loginHandler} className='login_loginbutton'>Log in</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <a>Need help?</a>
                </form>
                {/* <p>New to Amazon?</p>
                <Link to='/register'>
                    <button className='login_registerbutton'>Create your Amazon account</button>
                </Link> */}
            </div>
            <div className='login_newtoamazon_container'>
                <p>??????????????????????????? New to Amazon? ???????????????????????????</p>
                <Link to='/register'>
                    <button className='login_registerbutton'>Create your Amazon account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login