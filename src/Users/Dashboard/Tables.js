import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function Tables(id, title, date) {
  return { id, title, date };
}

const rows = [
  Tables(
    1,
    "The 2021-13th International Conference on Knowledge and smart Technology",
    "2020-12-10 > 2020-12-25"
  ),
  Tables(
    2,

    "The 2021-13th International Conference on Knowledge and smart Technology",
    "2020-12-10 > 2020-12-25"
  ),
];

export default function AcccessibleTable() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Link to="/dashboard/create">
            <Button variant="contained">Create Conference</Button>
          </Link>
        </Toolbar>
        <br />
        <div style={{ overflow: "auto" }}>
          <table align="center">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "65rem" }} aria-label="caption table">
                <caption>What?</caption>
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Detail</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.title}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained">Detail</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </table>
        </div>
      </Container>
    </React.Fragment>
  );
}
