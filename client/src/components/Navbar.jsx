import { Link } from "react-router-dom"

export { default as Article } from './article/Article';
export { default as Brand } from './brand/Brand';
export { default as CTA } from './cta/CTA';
export { default as Feature } from './feature/Feature';
export { default as Navbar } from './navbar/Navbar';


export default function Navbar() {
    return (
        <nav>
            <Link to ='/'>Home</Link>
            <Link to ='/register'>Register</Link>
            <Link to ='/login'>Login</Link>
        </nav>
    )
}
