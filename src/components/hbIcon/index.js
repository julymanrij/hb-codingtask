import './styles.css';

const HbIcon = (props) => {
  return (
    <div className="hbIcon">
      <span className={`icon-${props.name}`} style={{color: props.color, fontSize: `${props.size}px`}}></span>
    </div>
  );
};

export default HbIcon;
