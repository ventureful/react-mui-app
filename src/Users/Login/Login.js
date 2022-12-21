import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "@mui/material";

function Login() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 600,
        }}
      >
        <Box
          sx={{
            width: 500,
            height: 400,
            // backgroundColor: "primary.dark",
            border: 1,
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 400,
            }}
          >
            <form>
              <table>
                <tr>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <header>
                      <h1>Login</h1>
                    </header>
                  </div>
                </tr>
                <tr>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </tr>
                <br />
                <tr>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                  />
                </tr>
                <br />
                <tr
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="/dashboard">
                    <Button variant="contained" color="primary">
                      Login
                    </Button>
                  </Link>
                </tr>
              </table>
            </form>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Login;
