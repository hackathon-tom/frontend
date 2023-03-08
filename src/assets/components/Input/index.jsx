import "./style.css"

const Input = ({
    label,
    placeholder,
    leftIcon,
    rightIcon,
    inputType
}) => {
    return (
        <div className="input-container">
            <div className="input-label">{label}</div>
            <div className="input-content">
                <div className="input-content-left">
                    <div className="input-icon input-icon-left">{leftIcon}</div>
                    <input className="input-input" type={inputType} placeholder={placeholder} />
                </div>
                <div className="input-icon input-icon-left">{rightIcon}</div>
            </div>
        </div>
    )
}

export default Input;