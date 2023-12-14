function Input({ type, name, className, value, label, ...props }) {
  let combindeClassName = "form__field";


  if (className) {
    combindeClassName += " " + className;
  }
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        className={combindeClassName}
        value={value}
        {...props}
      />
      <label className="form__label">{label}</label>
    </div>
  );
}

export default Input;
