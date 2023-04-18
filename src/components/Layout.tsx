import { Grid } from "@mui/material";
import React from "react";
import { DepositBonus } from "./DepositBonus";

export const Layout = () => {
  return (
    <Grid
      container
      height="100vh"
      alignContent="center"
      justifyContent="center"
    >
      <DepositBonus />
    </Grid>
  );
};
