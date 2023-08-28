import React from "react";
import { useState } from "react";

function Form() {
  const [record, setRecord] = useState([]);
  const [data, setData] = useState({
    fname: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const NewRecord = { ...data, id: new Date().getTime().toString() };
    console.log(record);
    setRecord([...record, NewRecord]);
    console.log(record);
    setData({
      fname: "",
      email: "",
      phone: "",
      password: "",
    });
  };
  return (
    <>
      <div className="relative flex flex-col">
        <form action="" onSubmit={handleSubmit}>
          <div className="relative flex justify-center">
            <div className="absolute top-20 border border-gray-900 rounded-[10px] ">
              <div className="w-72 h-[450px] p-2 rounded-lg bg-indigo-950">
                <div className=" flex flex-col h-full justify-center gap-4">
                  <div className=" rounded-md text-center mt-2     ">
                    <label
                      htmlFor="name"
                      className="text-white mb-2 font-semibold text-lg"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      value={data.fname}
                      onChange={handleChange}
                      name="fname"
                      id="username"
                      className="border border-gray-900 w-full rounded-md mt-2 p-1"
                    />
                  </div>
                  <div className=" text-center mt-4 rounded-md     ">
                    <label
                      htmlFor="name"
                      className="text-white mb-2 font-semibold text-lg"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={handleChange}
                      name="email"
                      id="email"
                      className="border border-gray-900 w-full rounded-md mt-2 p-1"
                    />
                  </div>
                  <div className=" text-center mt-4 rounded-md     ">
                    <label
                      htmlFor="name"
                      className="text-white mb-2 font-semibold text-lg"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      value={data.phone}
                      onChange={handleChange}
                      name="phone"
                      id="number"
                      className="border border-gray-900 w-full rounded-md mt-2 p-1"
                    />
                  </div>
                  <div className=" text-center mt-4 rounded-md     ">
                    <label
                      htmlFor="name"
                      className="text-white mb-2 font-semibold text-lg"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={data.password}
                      onChange={handleChange}
                      name="password"
                      id="password"
                      className="border border-gray-900 w-full rounded-md mt-2 p-1"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="transition ease-in-out delay-100 font-semibold text-white bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 border  rounded-md -mt-2  w-20 h-10"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="absolute -bottom-0 w-full text-center">
          {record
            .map((ele, index) => (
              <div
                key={index}
                className="text-white flex justify-center flex-row gap-6 rounded-lg p-2"
              >
                <p>{ele.fname}</p>
                <p>{ele.email}</p>
                <p>{ele.phone}</p>
                <p>{ele.password}</p>
              </div>
            ))
            .reverse()}{" "}
          {/* Reverse the mapping order */}
        </div>
      </div>
    </>
  );
}

export default Form;
