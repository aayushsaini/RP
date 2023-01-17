import { useState } from "react";

import Logo from "../../assets/Logo.png";
import "./header.css";

const Title = () => {
  return <img src={Logo} className="logo" />;
};

const Menu = () => {
  return (
    <ul className="navbarMenu">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="searchPanel">
      <input
        type="text"
        placeholder="Next delicious thing is here..."
        className="searchBar"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button>Search</button>
    </div>
  );
};

function Header() {
  return (
    <div className="header">
      <Title />
      {/* <SearchBar /> */}
      <Menu />
    </div>
  );
}

export default Header;
