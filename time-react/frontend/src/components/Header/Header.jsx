import './Header.css'
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header>
            <div id="logo">
                <img src={logo} alt="TimeLink-game logo"/>
            </div>
            <h1>TimeLink</h1>
        </header>
    );
}

export default Header;