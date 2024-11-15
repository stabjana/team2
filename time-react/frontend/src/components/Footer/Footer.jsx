import './Footer.css'
import currentYear from ('../../utilits/currentYear')


function Footer(){
    return(
        <>
            <p>
                &copy; <span id="currentYear">{currentYear}</span> timeShifters team (aka Belaeat Hossain, Saara Rikama, Stefanie Jana, Vladimir Beliakov)
            </p>
        </>
    )
}

export default Footer;