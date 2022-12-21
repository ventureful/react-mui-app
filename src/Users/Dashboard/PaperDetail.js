import React from "react";
import Box from "@mui/material/Box";

function PaperDetail() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <header>
          <h1>Paper Detail</h1>
        </header>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            border: 1,
            borderRadius: "16px",
            backgroundColor: "info.dark",
          }}
        >
          Paper id,paper title, author
        </Box>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "secondary.dark",
            border: 1,
            borderRadius: "16px",
          }}
        >
          Payments
        </Box>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "warning.dark",
            border: 1,
            borderRadius: "16px",
          }}
        >
          paper status
        </Box>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "success.dark",
            border: 1,
            borderRadius: "16px",
          }}
        >
          button update,cancel,certificate
        </Box>
      </div>
    </div>
  );
}

export default PaperDetail;
