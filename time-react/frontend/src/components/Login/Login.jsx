import '../styles/loginPage.css'

function LoginPage() {
    return (
        <div>
            <main>
                <div id="logWindow" class="loginWindow">
                    <div class="withAccount">
                        <label for="username">Username: </label>
                        <input type="text" id="username" name="username"/>

                        <label for="password">Password: </label>
                        <input type="password" id="password" name="password"/>
                        <button>Log in/ Log out</button>
                        <a href="#">Forgot your password?</a>
                    </div>

                    <div class="noAccount">
                        <p> Sign up here, to save your progress.</p>
                        <label for="newUsername">Username:</label>
                        <input type="text" id="newUsername" name="newUsername"/>

                        <label for="newPassword">Password:</label>
                        <input type="password" id="newPassword" name="newPassword"/>
                        <button>Sign up</button>
                    </div>

                    <div class="guestAccount">
                        <p>Or play a quick session as guest</p>
                        <button>Play as guest</button>
                    </div>
                    
                </div>
            </main>
        </div>
    );
};

export default LoginPage;