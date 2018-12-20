import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";

const Nav = props => (
  <div className="nav">
    <a href="https://www.footprintproject.org/">
      <img
        id="footprint-logo"
        src="https://static1.squarespace.com/static/5b62523bc258b48b233cabe6/t/5c1839650e2e72ede043e555/1545094880372/?format=1500w"
        alt="logo"
      />
    </a>
    <div className="nav-right">
      <Link className="nav-link" to="/dashboard">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? "Dashboard" : "Login / Register"}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <LogOutButton className="nav-link" />
        </>
      )}
      {!props.user.id && (
        <Link className="nav-link" to="/add_site">
          Try It!
        </Link>
      )}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Nav);
