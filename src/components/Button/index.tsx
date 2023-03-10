import "./style.css";

interface ButtonProps {
  onClick: () => void;
  children: JSX.Element | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const Button = ({ onClick, children, leftIcon, rightIcon }: ButtonProps) => {
  return (
    <div className="button" onClick={onClick}>
      <div className="button-icon button-icon-left">{leftIcon}</div>
      <div className="button-text">{children}</div>
      <div className="button-icon button-icon-right">{rightIcon}</div>
    </div>
  );
};

export default Button;
