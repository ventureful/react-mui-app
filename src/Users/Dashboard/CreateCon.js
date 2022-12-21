import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Box from "@mui/material/Box";

function CreateCon() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 700,
        }}
      >
        <Box
          sx={{
            width: 550,
            height: 550,
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
              height: 500,
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
                    label="Title Conference"
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
                  <td>
                    Start Day
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
                            <MenuItem onClick={popupState.close}>
                              Member
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              No Member
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </td>
                  <td>
                    Start Month
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
                            <MenuItem onClick={popupState.close}>
                              Member
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              No Member
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </td>
                  <td>
                    Start Year
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
                            <MenuItem onClick={popupState.close}>
                              Member
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              No Member
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </td>
                </tr>
                <br />
                <tr
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <td>
                    End Day
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
                            <MenuItem onClick={popupState.close}>
                              Member
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              No Member
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </td>
                  <td>
                    End Month
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
                            <MenuItem onClick={popupState.close}>
                              Member
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              No Member
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </td>
                  <td>
                    End Year
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
                            <MenuItem onClick={popupState.close}>
                              Member
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              No Member
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </td>
                </tr>
                <br />
                <br />
                <tr
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained" color="primary">
                    confirm
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

export default CreateCon;
