import "./styles.css";
import HbIcon from "../hbIcon";
const HbInput = (props) => {
  return (
    <div className="hbInput">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        className={props.class}
        required={props.required}
        onChange={props.onChange}
      />
      {props.showIcon && <HbIcon name={props.nameIcon} color={props.colorIcon} size={props.sizeIcon}></HbIcon>}
    </div>
  );
};

export default HbInput;
