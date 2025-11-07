import "../App.css";
import "../styles/Game.css";

const suspect = {
    firstname: "Rosirene",
    lastname: "Viera",
    sex: "Female",
    country: "Brazil",
    height: 1.65,
    eyeColor: "Brown",
    languages: ["English"],
};

export default function Game() {
    return (
        <section className="game-page">
            <h1 className="game-title">What's her charge ?</h1>

            <div className="suspect-card">
                <div className="suspect-photo">
                    <div className="photo-placeholder">IMG</div>
                </div>

                <div className="suspect-info">
                    <div className="suspect-columns">
                        <div className="suspect-column">
                            <h2 className="suspect-subtitle">Relevant Information</h2>
                            <ul className="suspect-details">
                                <li>
                                    <span className="label">Lastname</span>
                                    <span className="value">{suspect.lastname.toUpperCase()}</span>
                                </li>
                                <li>
                                    <span className="label">Firstname</span>
                                    <span className="value">{suspect.firstname.toUpperCase()}</span>
                                </li>
                                <li>
                                    <span className="label">Sex</span>
                                    <span className="value">{suspect.sex}</span>
                                </li>
                                <li>
                                    <span className="label">Country</span>
                                    <span className="value">{suspect.country}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="suspect-column">
                            <h2 className="suspect-subtitle">Details</h2>
                            <ul className="suspect-details">
                                <li>
                                    <span className="label">Tall</span>
                                    <span className="value">{suspect.height}m</span>
                                </li>
                                <li>
                                    <span className="label">Eye</span>
                                    <span className="value">{suspect.eyeColor}</span>
                                </li>
                                <li>
                                    <span className="label">Languages</span>
                                    <span className="value">{suspect.languages}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="game-actions">
                <button className="choice-button murder">MURDER</button>
                <span className="choice-separator">OR</span>
                <button className="choice-button thief">THIEF</button>
            </div>

            <p className="contact-note">
                If you have any information please contact the real <a href="#">interpol</a>
            </p>
        </section>
    );
}