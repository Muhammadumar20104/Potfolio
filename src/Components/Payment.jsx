import React from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

function Payment() {
  return (
    <div>
      <div>
        <div className="  ml-1 h-46   rounded-md p-3">
          <div className="ml-3 flex">
            Payment
            
          </div>
          <hr />
          <div className=" flex mt-2 gap-1"></div>
          <div className="w-full h-24   rounded-md mt-1 ">
            <div className="grid grid-cols-3 text-sm gap-3">
              <div className="grid gap-1 justify-end">
                <div>Card#:</div>
                <div>Exp:</div>
                <div>CVV:</div>
                <div>Pay Now:</div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-rows-4 gap-1">
                  <div>
                    <input
                      type="text"
                      className="h-4 w-full border border-gray-400  rounded-md"
                    />
                  </div>
                  <div className="space">
                    <input
                      type="text"
                      className="h-4 w-full border border-gray-400  rounded-md"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="h-4 w-full border border-gray-400  rounded-md"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="h-4 w-full border border-gray-400  rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
