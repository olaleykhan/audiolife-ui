import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { connect } from "react-redux";

import Btn from "../../components/ui/btn/Btn";
import "./Header.scss";

// import "./Header.scss";

const Header = ({ currentUser }) => {
  console.log(auth);
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
          {currentUser ? (
            <Btn onClick={() => auth.signOut()}> Sign Out</Btn>
          ) : (
            <Link to="sign-in"> Sign in</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userReducer.currentUser,
});

export default connect(mapStateToProps)(Header);
