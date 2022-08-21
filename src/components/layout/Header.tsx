import React, { FC } from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { HeaderProps } from "../../types/header";

const Header: FC<HeaderProps> = ({ navbarPages }) => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {navbarPages?.map((page, index) => {
                return (
                  <Link
                    key={index}
                    className={classnames("nav-link", {
                      active: page.link === pathname,
                    })}
                    to={page.link}
                  >
                    {page?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
