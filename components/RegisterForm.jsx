import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("createUser");
    if (data) {
      setUsers(JSON.parse(data));
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email === "" || input.password === "") {
      setError("enter email or password");
      return false;
    }
    const newUser = { ...input };
    const updateData = [...users, newUser];

    localStorage.setItem("createUser", JSON.stringify(updateData));
    setUsers(updateData);
    setInput({
      name: "",
      number: "",
      email: "",
      password: "",
      companyName: "",
      agency:""
    });
    setError("");
    navigate("/account");
  };
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[375px] h-screen flex flex-col justify-start items-start bg-[#F7F8F9] px-5  py-10 gap-2">
          <h1 className="text-[28px] text-[#1D2226] font-medium font-rubik mb-5">
            Create your <br />
            PopX account
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="relative">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Full Name<span className="text-red-600">*</span>
              </label>
              <input
                onChange={handleChange}
                value={input.name}
                name="name"
                type="text"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="relative mt-7">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Phone number<span className="text-red-600">*</span>
              </label>
              <input
                name="number"
                onChange={handleChange}
                value={input.number}
                type="tel"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="relative mt-7">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Email address<span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                onChange={handleChange}
                value={input.email}
                type="email"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="relative mt-7">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Password<span className="text-red-600">*</span>
              </label>
              <input
                name="password"
                onChange={handleChange}
                value={input.password}
                type="password"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="relative mt-7">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Company name
              </label>
              <input
                name="companyName"
                onChange={handleChange}
                value={input.companyName}
                type="text"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor=""
                className="font-semibold text-[#1D2226] text-[13px]"
              >
                Are you an Agency?<span className="text-red-600">*</span>
              </label>
              <br />
              <div className="mt-2">
                <input
                  type="radio"
                  name="agency"
                  id=""
                  value="Yes"
                  onChange={handleChange}
                  checked={input.agency === "Yes"}
                  className="scale-150 accent-[#642AF5] mr-3 cursor-pointer"
                />
                <label
                  htmlFor="Yes"
                  className="font-semibold text-[#1D2226] text-[14px]"
                >
                  Yes
                </label>
                <input
                  type="radio"
                  name="agency"
                  id=""
                  value="No"
                  onChange={handleChange}
                  checked={input.agency === "No"}
                  className="scale-150 accent-[#642AF5] mr-3 ml-5 cursor-pointer"
                />
                <label
                  htmlFor="No"
                  className="font-semibold text-[#1D2226] text-[14px]"
                >
                  No
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-11 bg-[#6C25FF] mt-30 text-white flex justify-center items-center font-medium text-[16px] cursor-pointer rounded-md"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
