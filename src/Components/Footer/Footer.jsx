import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-white bg-black">
                <aside>
                        <img className="w-40" src="https://i.ibb.co/JjYDvby/Untitled-design.png" alt="" />
                    <p className="" >Signature Drive Motors<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className="hover:underline" to={'/'} >Branding</Link>
                    <Link className="hover:underline" to={'/'} >Design</Link>
                    <Link className="hover:underline" to={'/'} >Marketing</Link>
                    <Link className="hover:underline" to={'/'} >Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="hover:underline" to={'/aboutUs'} >About us</Link>
                    <Link className="hover:underline" to={'/contactUs'} >Contact</Link>
                    <Link className="hover:underline" to={'/award'} >Awards</Link>
                    <Link className="hover:underline" to={'/news'} >News</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link className="hover:underline" to={'/'} >Terms of use</Link>
                    <Link className="hover:underline" to={'/'} >Privacy policy</Link>
                    <Link className="hover:underline" to={'/'} >Cookie policy</Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;