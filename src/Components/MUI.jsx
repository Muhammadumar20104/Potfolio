import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Autocomplete,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  colors,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styled from "styled-components";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(<DeleteIcon />, 159, 6.0, 24, 4.0),
  createData(<DeleteIcon />, 237, 9.0, 37, 4.3),
];
function MUI() {
  const tableStyle = {
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: " 2px", // Yahan aap gap ki width set kar sakte hain
  };
  // const StyleBox=styled(Box)({
  //   display:"flex",
  //   direction:"row",
  //   justifyContent:"space-between"
  // })
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p={1}
      >
        <Typography>Quick Order</Typography>
        <Box display="flex" gap={1}>
          <Typography
            display="grid"
            flexDirection="column"
            alignContent={"center"}
          >
            Open Order:8 Total Invoice Amount : 848.10 Credit Limit
          </Typography>
          <Button variant="contained" size="small">
            Customer History
          </Button>
          <Button variant="contained" size="small">
            Proceed To Check Out
          </Button>
        </Box>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p={1}
      >
        <Box>
          <Typography>Customer</Typography>
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Box>
        <Box>
          <Typography>Search Part</Typography>
          <TextField
            placeholder="Search Part"
            // id="outlined-size-small"
            // defaultValue="Small"
            size="small"
          />
        </Box>
        <Box>
          <Typography>Delivery Notes</Typography>
          <TextField
            placeholder="Delivery Notes"
            // id="outlined-size-small"
            // defaultValue="Small"
            size="small"
          />
        </Box>
        <Box>
          <Typography>PO Num</Typography>
          <TextField
            placeholder="Enter The PO Num"
            // id="outlined-size-small"
            // defaultValue="Small"
            size="small"
          />
        </Box>
        <Box>
          <Typography>Need By</Typography>
          <TextField
            placeholder="Need By"
            // id="outlined-size-small"
            // defaultValue="Small"
            size="small"
          />
        </Box>
        <Box style={{ width: 200 }}>
          <Typography>Auto Invoice</Typography>
          <Checkbox defaultChecked />
        </Box>
      </Box>
      <Divider />
      <Box>
        <TableContainer>
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            aria-label="a dense table"
            style={tableStyle}
          >
            <TableHead
              style={{ height: "10px", color: "darkred", marginTop: 10 }}
            >
              <TableRow style={{ backgroundColor: "darkgray", height: "100%" }}>
                <TableCell>Action</TableCell>
                {/* <Divider orientation="vertical" style={dividerStyle} /> */}
                <TableCell>Part</TableCell>
                {/* <Divider orientation="vertical" style={dividerStyle} /> */}
                <TableCell style={{ width: 400 }}>Description</TableCell>
                {/* <Divider orientation="vertical" style={dividerStyle} /> */}
                <TableCell>Bin</TableCell>
                {/* <Divider orientation="vertical" style={dividerStyle} /> */}
                <TableCell>Unit Price</TableCell>
                {/* <Divider orientation="vertical" style={dividerStyle} /> */}
                <TableCell>Qty</TableCell>
                {/* <Divider orientation="vertical" style={dividerStyle} /> */}
                <TableCell>Discount Percent</TableCell>
                {/* <Divider orientation="vertical" style={dividerStyle} /> */}
                <TableCell>Tax</TableCell>
                {/* <Divider orientation="vertical" style={dividerStyle} /> */}
                <TableCell>Sub Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <DeleteIcon />
                  </TableCell>
                  <TableCell>100115</TableCell>
                  <TableCell>PVC M6</TableCell>
                  <TableCell>OSB</TableCell>
                  <TableCell>1.110</TableCell>
                  <TableCell>
                    <input
                      type="number"
                      className="border border-gray-950 rounded-lg w-20"
                    />
                  </TableCell>
                  <TableCell>
                    <input
                      type="number"
                      className="border border-gray-950 rounded-lg w-20"
                    />
                  </TableCell>
                  <TableCell>0.001</TableCell>
                  <TableCell>1.223</TableCell>
                </TableRow>
              ))}
              <TableRow style={{ backgroundColor: "darkgray", height: "100%" }}>
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>0.001</TableCell>
                <TableCell>2.3334</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
export default MUI;
