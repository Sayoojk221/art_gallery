import React from "react";
import { clsx } from "clsx";
import { Button as BaseButton, StyledEngineProvider } from "@mui/material";

//assets
import styles from "./button.module.scss";

const Button = ({ variant = "outline", className, children, ...props }) => {
  return (
    <StyledEngineProvider injectFirst>
      <BaseButton
        variant={variant}
        className={clsx(styles.button_wrapper, className)}
        {...props}
      >
        {children}
      </BaseButton>
    </StyledEngineProvider>
  );
};

export default Button;
