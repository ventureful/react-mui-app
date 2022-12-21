import React from "react";
import NavBar from "./Users/Dashboard/NavBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Box from "@mui/material/Box";

function Create() {
  return (
    <div>
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
            //   backgroundColor: "primary.dark",
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
                  <header>
                    <h1>Create Conference</h1>
                  </header>
                </tr>
                <tr>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                  />
                </tr>
                <br />
                <tr>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email"
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
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <Button
                          variant="contained"
                          color="primary"
                          {...bindTrigger(popupState)}
                        >
                          - Select option -
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>Member</MenuItem>
                          <MenuItem onClick={popupState.close}>
                            No Member
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </tr>
                <br />
                <tr
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained" color="primary">
                    Next
                  </Button>
                </tr>
              </table>
            </form>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Create;
