import React from "react";
import styles from "./Nav.module.css";
import logo from "./ourlogo (2).png";
import { Link, Outlet } from "react-router-dom";

const Nav: React.FC<{}> = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["logo-container"]}>
          <span>
            <Link to="/">
              <img src={logo} alt="ourlogo.png" width={75} height={75} />{" "}
            </Link>
          </span>
        </div>

        <div>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/crew">
            Crewmembers
          </Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
