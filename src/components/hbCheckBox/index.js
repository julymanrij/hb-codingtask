import './styles.css';

const HbCheckBox = (props) => {
  return (
    <div className="hbCheckBox">
      <label htmlFor={props.name}>{props.label}</label>
      <input name={props.name} type="checkbox" onChange={props.onChange}/>
    </div>
  );
};

export default HbCheckBox;
