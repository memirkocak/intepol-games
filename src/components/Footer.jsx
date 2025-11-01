import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-left">
                <img src="/logo.png" alt="Intepol Logo" className="logo" />
            </div>
            <div className="footer-center">
                <p>OUR PROJECT</p>
                <NavLink to="/github" className="footer-github-link">GITHUB</NavLink>
            </div>
            <div className="footer-right">
                <p>SOCIAL MEDIA</p>
                <div className="row">
                    <img src="/twitter.png" alt="Twitter" className="twitter-icon" />
                    <img src="/instagram.png" alt="Instagram" className="instagram-icon" />
                    <img src="/tiktok.png" alt="tiktok" className="tiktok-icon" />
                </div>
            </div>
        </footer>
    )
}