import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News&nbsp;&nbsp;&nbsp;
            {/* <Link href="/dashboard"> */}
            <Button color="inherit">Manager Conference</Button>
            {/* </Link> */}
            {/* <Link href="/dashboard/create"> */}
            <Button color="inherit">Create Conference</Button>
            {/* </Link> */}
          </Typography>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Admin</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
