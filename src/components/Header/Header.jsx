import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="nav-name">
              <i className="fa-solid fa-code Logo-M"></i>
              <span className="Logo-M">Chinmay</span>
            </div>

            <div className="nav-content">
              <ul>
                <li>
                  <Link to={"/"}>
                    <span className="Media-M">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/projects"}>
                    <span className="Media-M">Projects</span>
                  </Link>
                </li>

                <li>
                  <form className="d-flex rounded-pill" role="search">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn"
                      style={{ margin: "-40px" }}
                      type="submit"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </li>

                <li className="Media-M">
                  <a
                    href="https://instagram.com/chinmaykhanapurkar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>{" "}
                    <span>Instagram</span>
                  </a>
                </li>

                <li className="Media-M">
                  <a
                    href="https://www.linkedin.com/in/chinmay-khanapurkar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>{" "}
                    <span>LinkedIn</span>
                  </a>
                </li>

                <li className="Media-M">
                  <a
                    href="https://github.com/Chinmay1704/Full_Satck_Development"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> <span>Github</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
