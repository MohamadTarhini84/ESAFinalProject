import "./signin.css";
import GigaImage from './GigaChad.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';


function Signin() {

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
                    <form method="post" action="formValidation.php">
                        <div className="login">
                            <h2>User Login</h2>
                        </div>
                        <div className="input_text">
                            <input type="text" placeholder="Username" />
                            <FontAwesomeIcon className="fa" icon={faUser}></FontAwesomeIcon>
                        </div>
                        <div className="input_text">
                            <input className="signin_pass" id="passInput" type="password" name="password" placeholder="Password" />
                            <FontAwesomeIcon className="fa" icon={faLock}></FontAwesomeIcon>
                        </div>
                        <div className="login_btn">
                            <button id="signup_button">LOG IN</button>
                        </div>
                        <div className="create margin">
                            <p>Don't have an account?</p>
                            <a href="./signup" className="create_acc">Create Account</a>
                        </div>
                    </form>
                </div>
            </div>
            <div id="profile-footer" style={{ margin: "5px", color: "var(--white)", textAlign: "center" }}>
                &copy; 2023. All rights reserved.
            </div>
        </div>
    )
}

export default Signin;
