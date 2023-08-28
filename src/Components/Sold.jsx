import { Autocomplete, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import React from "react";
import Ship from "./Ship";
import Payment from "./Payment";

function Sold() {
  return (
    <>
    <div className="w-[100%] grid grid-cols-3">
      <div className="  h-46  rounded-md p-2 mt-2">
        <div className="ml-3">Sold To:ABR PROJECT PTY LTD</div>
        <hr />
        <div className="ml-6 flex mt-2">
          <Typography
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            Address:
          </Typography>
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options=""
            sx={{ width: 150 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </div>
        <div className="w-full h-24  bg-slate-200 rounded-md mt-1 ">
          <div className="grid grid-cols-3 text-sm">
            <div className="grid gap-1">
              <div>
                <LocationOnIcon fontSize="2" />
                Address1
              </div>
              <div>
                <LocationOnIcon fontSize="2" />
                Address2
              </div>
              <div>
                <ApartmentIcon fontSize="2" />
                City
              </div>
              <div>
                <AssignmentIndIcon fontSize="2" />
                Zip
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-rows-4 gap-1">
                <div>100 BANKCISA TCE</div>
                <div className="space"></div>
                <div>KENGISTON</div>
                <div>6151</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ship/>
      <Payment/>
      </div>
    </>
  );
}

export default Sold;
