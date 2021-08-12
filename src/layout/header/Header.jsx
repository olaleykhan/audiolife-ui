import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

// import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div>
          <Link to="/">
            <h1>The logo</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/"> HOME</Link>
          </li>
          <li>
            <Link to="/"> HEADPHONES</Link>
          </li>
          <li>
            <Link to="/"> SPEAKERS</Link>
          </li>
          <li>
            <Link to="/"> EARPHONES</Link>
          </li>
        </ul>
        {/* cart will be replaced later with an icon when  I decide what library to use */}
        <div>
          {" "}
          <Link to="sign-in"> Sign in</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
