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

function TablePaper(id, paperid, title, topic, status) {
  return { id, paperid, title, topic, status };
}

const rows = [
  TablePaper(
    1,
    "1570678168",
    "Test paper 1",
    "Test topic 1",
    // "An RSSI-based weighting with accelerometers for real-time indorr positioning",
    // "[Regular KST] : Intelligent Computer Networks and Systems.",
    "Confirm"
  ),
  TablePaper(
    2,
    "1570678168",
    "Test paper 2",
    "Test topic 2",
    // "An RSSI-based weighting with accelerometers for real-time indorr positioning",
    // "[Regular KST] : Intelligent Computer Networks and Systems.",
    "Confirm"
  ),
];

export default function AcccessibleTable() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" color="success">
            Create Paper
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="contained" color="secondary">
            Export Excel
          </Button>
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
                    <TableCell align="right">Paper ID</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Topic</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Detail</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.paperid}</TableCell>
                      <TableCell align="right">{row.title}</TableCell>
                      <TableCell align="right">{row.topic}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
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
