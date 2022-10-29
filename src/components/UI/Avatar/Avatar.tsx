import React from "react";
import { UserIcon } from "../../News/icons/UserIcon";
import styles from "./Avatar.module.css";

export const Avatar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.avatar}>
      <UserIcon />
    </div>
  );
};
