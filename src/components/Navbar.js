// components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
          <Link to="/" className="logo">
            Malooma
          </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setSidebarOpen(true)}>
          &#9776;
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          &times;
        </button>
        <ul>
          <li>
            <Link to="/" onClick={() => setSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/articles" onClick={() => setSidebarOpen(false)}>
              Articles
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={() => setSidebarOpen(false)}>
              News
            </Link>
          </li>
          <li>
            <Link to="/people" onClick={() => setSidebarOpen(false)}>
              People
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
