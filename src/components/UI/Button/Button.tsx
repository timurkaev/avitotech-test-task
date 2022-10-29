import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = "medium",
  color = "primary",
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: color === "primary",
        [styles.ghost]: color === "ghost",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
