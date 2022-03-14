import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-menu">
        <li>
          <Link to="/">
            <a className="header-link" href="/">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link to="/liked">
            <a className="header-link" href="/liked">
              Liked Movies
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
