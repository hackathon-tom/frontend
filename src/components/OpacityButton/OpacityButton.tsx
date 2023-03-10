import "./style.css";

interface OpacityButtonProps {
  children: JSX.Element | string;
}

const OpacityButton = ({ children }: OpacityButtonProps) => {
  return <div className="opacity-button">{children}</div>;
};

export default OpacityButton;
