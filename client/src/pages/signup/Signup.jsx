import "./signup.css";
import GigaImage from './GigaChad.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


function Signup() {
    return (
        <div className="container">
            <img id="logo-signin" src={GigaImage} alt="Giga Chad" />
            <div className="card">
                <div className="left-side">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="right-side">
                    <form method="post">
                        <div className="login">
                            <h2>Create Account</h2>
                        </div>
                        <div className="input_text">
                            <input type="text" placeholder="Username" />
                            <FontAwesomeIcon className="fa" icon={faUser}></FontAwesomeIcon>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className="input_text" style={{ marginRight: "5px" }}>
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div className="input_text">
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="input_text">
                            <input type="email" placeholder="Email" />
                            <FontAwesomeIcon className="fa" icon={faEnvelope}></FontAwesomeIcon>
                        </div>
                        <div className="input_text">
                            <input type="password" className="signup_pass" id="passInput" placeholder="Password" />
                            <FontAwesomeIcon className="fa" icon={faLock}></FontAwesomeIcon>
                        </div>
                        <div className="login_btn">
                            <button id="signup_button">SIGN UP</button>
                        </div>
                        <div className="create">
                            <p>
                                Already have an account?{" "}
                                <a href="/signin" className="login_acc"> Sign in</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div id="profile-footer">
                <div style={{ margin: "5px", color: "var(var(--white))" }}>
                    &copy; 2023. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Signup;
