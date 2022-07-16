import React, {useState} from "react"
import "./index.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Footer from './Footer';

function Login ({ setLoginUser}) {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            alert('Login Successful');
            setUser(res.data.user)
            history.push("/mainservice")
        }).catch((err) => {
            alert('Invalid Credentials');
        })
    }

    return (
        <>
        <div className="login-container">
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
            </div>
            
            </div>
            <Footer />
        </>
        
    )
    
}

export default Login