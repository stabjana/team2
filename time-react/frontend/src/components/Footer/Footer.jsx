import './Footer.css'
import currentYear from '../../../src/utilits/currentYear'


function Footer(){
    return(
        <footer>
            <p>
            &copy; <span id="currentYear">{currentYear()}</span> timeShifters team (aka Belaeat Hossain, Saara Rikama, Stefanie Jana, Vladimir Beliakov)
            </p>
        </footer>
    );
}

export default Footer;