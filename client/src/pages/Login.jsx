import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { FaEyeSlash,FaFacebookF, FaEye } from "react-icons/fa"
import googleLogo from '../assets/googleLogo.png'
import { Link } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password} = data
            try {
                const {data} = await axios.post('/login', {
                    email, 
                    password
                });
                if(data.error) {
                    toast.error(data.error)
                } else {
                    setData({});
                    navigate('/dashboard')
                }
            } catch (error) {
                console.log(error)
            }
    }

    const forms = document.querySelector(".forms");
    const pwShowHide = document.querySelectorAll(".eye-icon");

    pwShowHide.forEach(eyeIcon => {
        let isPasswordVisible = false;
        const pwFields = Array.from(eyeIcon.parentElement.parentElement.querySelectorAll(".password"));

        eyeIcon.addEventListener("click", () => {
            isPasswordVisible = !isPasswordVisible;
            
            pwFields.forEach(password => {
                password.type = isPasswordVisible ? "text" : "password";
            });

            if (isPasswordVisible) {
                eyeIcon.classList.replace("FaEyeSlash", "FaEye");
            } else {
                eyeIcon.classList.replace("FaEye", "FaEyeSlash");
            }
        });
    });


    return (

        <body>
            
            <section className="container forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Login</header>

                        <form onSubmit={loginUser}>   
                        {/* loginEmail */}
                            <div className="field input-field">
                                <input type="email" placeholder="Email"  className="input" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                            </div>
                        {/* loginPassword */}
                            <div className="field input-field">
                                <input type="password" placeholder="Password"  className="password"value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                                <FaEyeSlash className="eye-icon"/>
                                
                            </div>

                            <div className="form-link">
                                <a href="#" className="forgot-pass">Forgot password?</a>
                            </div>
                        {/* loginButton */}
                            <div className="field button-field">
                                <button type="submit">Login</button>
                            </div>
                        </form>

                        <div className="form-link">
                                <span>Dont have an account? <Link to="/register">Register</Link></span>
                            </div>
                    </div>

                    <div className="line"></div>

                    <div className="media-options">
                        <a href="#" className="field facebook">
                        <FaFacebookF className="facebook-icon"/>
                        <span>Login with Facebook</span>
                        </a>
                    </div>

                    <div className="media-options">
                        <a href="#" className="field google">
                        <img src={googleLogo} alt="Logo" className="google-img"/>
                        <span>Login with Google</span>
                        </a>
                    </div>

                </div>
            </section>






        </body>
    )
}
