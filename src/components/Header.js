import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-menu">
        <li>
          <Link to="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <Link to="/liked">
            <a href="/liked">Liked Movies</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

/*

      <Nav>
        <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
        <NavLink activeClassName='is-active' to='/about'>About</NavLink>
      </Nav>

      <Match pattern='/' exactly component={Home} />
      <Match pattern='/about' exactly component={About} />
      <Miss component={NoMatch} />

*/

export default Header;
