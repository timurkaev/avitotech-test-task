import React from "react";
import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { BrowserRouter } from "react-router-dom";

export const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header className={styles.header} />
        <div className={styles.body}>{children}</div>
      </BrowserRouter>
    </div>
  );
};
