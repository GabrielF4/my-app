import "./button.css";

function Button({ children, onClick, type = "button", variant = "btn" }) {
    return (
        <button type={type} onClick={onClick} className={variant}>
            {children}
        </button>
    );
}

export default Button;
