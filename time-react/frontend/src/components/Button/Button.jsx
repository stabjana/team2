import './Button.css'

const Button = ({onClick, text, type, role}) => {
    const buttonClass = role === 'secondary' ? 'secondaryButton' : 'primaryButton';

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClass}
            data-role={role}
        >
            {text} 
        </button>
    );
};

export default Button;