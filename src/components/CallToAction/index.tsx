import "./style.css";

import { FaMapMarkerAlt } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="cta-container">
      <FaMapMarkerAlt size={20} color="white" />
      <div className="cta-text">Find Your Way</div>
    </div>
  );
};

export default CallToAction;
