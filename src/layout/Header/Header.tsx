import React from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import { Link } from "react-router-dom";

export const Header: React.FC<HeaderProps> = ({ ...props }): JSX.Element => {
  return (
    <header {...props}>
      <div className={styles.navbar}>
        <Link to="/">
          <h1 className={styles.title}>The Hacker News</h1>
        </Link>
      </div>
    </header>
  );
};
