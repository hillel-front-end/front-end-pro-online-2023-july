function Card(props) {
  let combindeClassName = "card card-shadow";

  if (props.className) {
    combindeClassName += " " + props.className;
  }
  return <div className={combindeClassName}>{props.children}</div>;
}

export default Card;
