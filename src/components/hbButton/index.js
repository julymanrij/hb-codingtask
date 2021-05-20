import './styles.css';

const HbButton = (props) => {
  return (
    <div className="hbButton">
      <button type={props.type} className={props.class} onClick={props.onclick}>{props.text}</button>
    </div>
  );
};

export default HbButton;
