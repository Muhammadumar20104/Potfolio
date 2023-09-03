import { TextField } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div className="w-[100%] h-[100%] p-10 bg-slate-100">
      {/* <div> */}
      <div className="w-[100%] h-[100%]">
        <div className="text-5xl text-center font-roboto font-bold">Contact</div>
        <div className="flex justify-center">
          <div className="text-lg font-roboto text-center text-gray-500 w-[60%] mt-8">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </div>
        </div>
        <div className="lg:w-full  h-[100%] flex  justify-center lg:p-36 md:p-10 xs:p-5">
          <div className="flex flex-col gap-10 w-fit p-10 bg-white rounded-lg">
            <div>
              <div className="font-roboto text-slate-500 font-bold">Name</div>
              <div>
                <TextField
                  fullWidth
                  placeholder="Enter The Name"
                  id="fullWidth"
                  size="large"
                  sx={{ bgcolor: "#F0F0F0", width:{lg:"700px",md:"500px",sm:"400px"} }}
                />
              </div>
            </div>
            <div>
              <div className="font-roboto text-slate-500 font-bold">Email</div>
              <div>
                <TextField
                  fullWidth
                  placeholder="Enter The Email"
                  id="fullWidth"
                  sx={{ bgcolor: "#F0F0F0", width:{lg:"700px",md:"500px",sm:"400px"} }}
                />
              </div>
            </div>
            <div>
              <div className="font-roboto text-slate-500 font-bold">Message</div>
              <div>
                <TextField
                  id="outlined-multiline-static"
                //   label="Multiline"
                  multiline
                  rows={4}
                  placeholder="Enter The Message"
                //   defaultValue="Default Value"
                  variant="outlined"
                  sx={{width:{lg:"700px",md:"500px",sm:"400px",xs:"225px"},bgcolor:"#F0F0F0"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Contact;
