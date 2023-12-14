import logo from "../assets/logo.png";

function Header({ title }) {
  return (
    <header className="header text-center">
      <img src={logo} alt="Logo" />
      <h1 className="title">{title}</h1>
    </header>
  );
}

export default Header;

// Header({ a: 1, b: 2, c: 3})
