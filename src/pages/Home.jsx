import { useState } from "react";
import "../App.css";
import Input from "../components/Input";
import "../styles/Home.css";
import "../styles/Input.css";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "confirm-password") {
            setConfirmPassword(value);
        }
    };

    return (
        <section className="home-container">
            <h1 className="home-title">What's your charge ?</h1>
            <div className="home-content">
                <div className="home-left">
                    <img className="profile-image" src="/profile.png" alt="profile" />
                </div>
                <div className="home-right">
                    <form>
                        <h2>Register ?</h2>
                        <Input id="email" placeholder="Enter your email (??)" type="text" value={email} onChange={handleInputChange} required={true} name="email" label="Email *" />
                        <Input id="password" placeholder="****" type="password" value={password} onChange={handleInputChange} required={true} name="password" label="Password *" />
                        <Input id="conform-password" placeholder="****" type="password" value={confirmPassword} onChange={handleInputChange} required={true} name="confirm-password" label="Confirm Password *" />
                        <div className="checkbox-container">
                            <label htmlFor="terms">Terms and Conditions*</label>
                            <input className="checkbox-input" type="checkbox" id="terms" name="terms" />
                        </div>
                        <button className="play-button" type="submit">PLAY</button>
                    </form>
                </div>
            </div>
        </section>
    )
}