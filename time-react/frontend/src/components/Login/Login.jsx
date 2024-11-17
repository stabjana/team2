import './Login.css'
import Button from '../Button/Button';

function Login({ onLogIn }) {
    return (
        <div>
            <main>
                <div id="logWindow" className="loginWindow">
                    <div className="withAccount">
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username"/>

                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password"/>
                        <Button
                            text='Log in'
                            onClick={onLogIn}
                            data-role="primary"
                            type="button"
                        />
                        <br />
                        <a href="#">Forgot your password?</a>
                    </div>

                    <div className="noAccount">
                        <p> Sign up here, to save your progress.</p>
                        <label htmlFor="newUsername">Username:</label>
                        <input type="text" id="newUsername" name="newUsername"/>

                        <label htmlFor="newPassword">Password:</label>
                        <input type="password" id="newPassword" name="newPassword"/>
                        <Button
                            text='Sign up and play'
                            onClick={onLogIn}
                            data-role="primary"
                            type="button"
                        />
                    </div>

                    <div className="guestAccount">
                        <p>Or play a quick session as guest</p>
                        <Button
                            text='Play as guest'
                            onClick={onLogIn}
                            data-role="primary"
                            type="button"
                        />
                    </div>
                    
                </div>
            </main>
        </div>
    );
};

export default Login;