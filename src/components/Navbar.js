import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link
                    className={
                      this.props.category === "general"
                        ? "nav-link active underline"
                        : "nav-link"
                    }
                    to="/general"
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.props.category === "business"
                        ? "nav-link active underline"
                        : "nav-link"
                    }
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.props.category === "entertainment"
                        ? "nav-link active underline"
                        : "nav-link"
                    }
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link
                    className={
                      this.props.category === "health"
                        ? "nav-link active underline"
                        : "nav-link"
                    }
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.props.category === "science"
                        ? "nav-link active underline"
                        : "nav-link"
                    }
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.props.category === "sports"
                        ? "nav-link active underline"
                        : "nav-link"
                    }
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.props.category === "technology"
                        ? "nav-link active underline"
                        : "nav-link"
                    }
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
