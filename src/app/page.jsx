"use client";

import React from "react";
import {
  AppBar,
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  StyledEngineProvider,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

//components
import Button from "@/components/Button";

//assets
import styles from "../styles/onboarding.module.scss";
import Image from "next/image";


function OnBoarding() {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={styles.onboard_wrapper}>
        <AppBar position="static" color="transparent">
          <Container className={styles.nav_bar}>
            <Toolbar disableGutters>
              <AdbIcon className={styles.company_logo} />
              <Typography
                variant="h6"
                component="a"
                href="/"
                className={styles.company_name}
              >
                Art Gallery
              </Typography>
            </Toolbar>
            <Box>
              <Button className={styles.sign_in} variant="outline">
                Sign In
              </Button>
              <Button>Sign Up</Button>
            </Box>
          </Container>
        </AppBar>
        <Image src={"/images/onboard_five.jpg"} width={500} height={400} />
        <Box className={styles.form_wrapper}>
          <Typography className={styles.form_title}>
            Explore thousands of creative arts collection
          </Typography>
          <Box
            component="form"
            onSubmit={() => {}}
            noValidate
            className={styles.form}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography className={styles.label}>Password must be at least 8 characters long</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={styles.submit_btn}
            >
              Explore Arts
            </Button>
          </Box>
        </Box>
        <Image src={"/images/onboard_three.jpg"} width={500} height={400} />

      </Box>
    </StyledEngineProvider>
  );
}

export default OnBoarding;
