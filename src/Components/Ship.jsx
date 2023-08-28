import React from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

function Ship() {
  return (
    <>
      <div>
        <div className="  ml-1 h-46   rounded-md p-3">
          <div className="ml-3 flex">
            Ship to :
            <div className=" h-fit w-fit rounded-lg bg-slate-400">
              Same as said to{" "}
            </div>
          </div>
          <hr />
          <div className=" flex mt-2 gap-1">
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
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options=""
              sx={{ width: 150 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <Typography
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              OTS:
            </Typography>
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
                  <div>
                    <input
                      type="text"
                      className="h-4 w-56 border border-gray-400  rounded-md"
                    />
                  </div>
                  <div className="space">
                    <input
                      type="text"
                      className="h-4 w-56 border border-gray-400  rounded-md"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="h-4 w-56 border border-gray-400  rounded-md"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="h-4 w-56 border border-gray-400  rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ship;
