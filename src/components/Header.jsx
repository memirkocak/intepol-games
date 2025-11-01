import "../styles/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">
                <div className="header-top"></div>
                <div className="header-banner">
                    <div className="logo-container">
                        <img src="/logo.png" alt="Intepol Logo" className="logo" />
                    </div>
                    <div className="banner-content">
                        <div className="banner-left">
                            <h1 className="interpol-title">INTEPOL</h1>
                            <div className="arrow-text-row">
                                <div className="arrow-icon">
                                </div>
                                <img src="/Vector.png" alt="arrow" className="arrow-icon" />
                                <p className="subtitle">Find out and guess arrests warrants</p>
                            </div>
                        </div>
                        <div className="header-right">
                            <NavLink to="/login" className="login-text">LOGIN</NavLink>
                        </div>
                    </div>
                </div>
                <div className="header-bottom"></div>
            </div>
        </header>
    )
}
