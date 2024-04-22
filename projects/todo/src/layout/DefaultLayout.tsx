import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import HomeView from "../views/HomeView";
import { logout } from "../helpers/authHelper";

export default function DefaultLayout() {
  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense" color="red">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Digital solution
          </Typography>
          <Box>
            <Button variant="contained" size="small" onClick={() => logout()}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box pt={4}>
        <HomeView />
      </Box>
    </>
  );
}
