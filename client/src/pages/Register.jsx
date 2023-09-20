import { useState } from "react"
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import './Register.css'
import 'boxicons'
import { FaEyeSlash, FaEye, FaFacebookF, } from "react-icons/fa";
import googleLogo from '../assets/googleLogo.png'
import { Link } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password:'',
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const {name, email, password} = data
        try {
            const {data} = await axios.post('/register', {
                name, email, password
            })
            if(data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Login Successful, Welcome!')
                navigate('/login')
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
                <div className="form signup">
                    <div className="form-content">
                        <header>Sign-Up</header>

                        <form onSubmit={registerUser}>
                        {/* registerUsername */}
                        <div className="field input-field">
                        <input type='text' placeholder='Username' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                            </div>
                        {/* registerEmail */}
                            <div className="field input-field">
                            <input type='email' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                            </div>
                        {/* registerPassword */}
                            <div className="field input-field">
                            <input type='password' placeholder='Password' className="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                                <FaEyeSlash className="eye-icon"/>
                                
                            </div>

                        {/* registerButton */}
                            <div className="field button-field">
                                <button type="submit">Continue</button>
                            </div>
                        </form>

                        <div className="form-link">
                                <span>Already have an account? <Link to="/login">Login</Link></span>
                            </div>
                    </div>

                    <div className="line"></div>

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
