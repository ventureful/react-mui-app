import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Link } from "@mui/material";

function PaperData() {
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
        <form>
          <Box
            sx={{
              width: 800,
              height: 470,
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
              }}
            >
              <table style={{ width: "90%" }}>
                <tr>
                  <header>
                    <h1>Paper Detail</h1>
                  </header>
                </tr>
                <tr>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Title"
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
                <tr>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={8}
                    placeholder="Topic Paper"
                    style={{ width: 750 }}
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
                    <Link href="/authpaper">
                      <Button variant="contained" color="primary">
                        Back
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Link href="/404">
                      <Button variant="contained" color="primary">
                        confirm
                      </Button>
                    </Link>
                  </td>
                </tr>
              </table>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default PaperData;
