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

export default Header;
