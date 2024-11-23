import { useState } from "react";
import "./Login.css";
import Button from "../Button/Button";

function Login({ onLogIn, error, loading }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogIn(username, password); // pass username and password to the App
  };

  const handleSignUp = () => {
    alert("Sign-up functionality coming soon!"); // WRITE SIGN UP LOGIC LATER
  };

  const handleGuestPlay = () => {
    onLogIn("Guest", ""); // use 'Guest' as a predefined user
  };

  return (
    <div>
      <main>
        <div id="logWindow" className="loginWindow">
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />

            <Button
              text={loading ? "Logging in..." : "Log in"}
              type="submit"
              disabled={loading}
            />
          </form>

          <div className="noAccount">
            <p> Sign up here, to save your progress.</p>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" />

            <label htmlFor="newPassword">Password:</label>
            <input type="password" id="newPassword" name="newPassword" />
            <Button
              text="Sign up and play"
              onClick={handleSignUp}
              data-role="primary"
              type="button"
            />
          </div>

          <div className="guestAccount">
            <p>Or play a quick session as guest</p>
            <Button
              text="Play as guest"
              onClick={handleGuestPlay}
              data-role="primary"
              type="button"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
