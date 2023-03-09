import "./style.css"

const Button = ({
    children,
    leftIcon,
    rightIcon,
    onClick
}) => {
    return (
        <div onClick={onClick} className="button">
            <div className="button-icon button-icon-left">{leftIcon}</div>
            <div className="button-text">{children}</div>
            <div className="button-icon button-icon-right">{rightIcon}</div>
        </div>
    )
}

export default Button;