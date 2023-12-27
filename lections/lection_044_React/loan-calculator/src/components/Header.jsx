import logo from "../assets/logo.png";
import { memo } from 'react'

function Header({ title, clickOnLogo }) {
  console.log("---Header---");

  return (
    <header className="header text-center">
      <img src={logo} alt="Logo" onClick={clickOnLogo} />
      <h1 className="title">{title}</h1>
    </header>
  );
}

export default memo(Header);

// Header({ a: 1, b: 2, c: 3})
