"use client";
import { useState,useEffect } from "react";
import styles from "./styles.module.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useForm } from "react-hook-form";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import Alert from "@mui/material/Alert";

const Form = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [serverErrors, setServerErrors] = useState(null)
  const [serverSuccess, setServerSuccess]= useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm();
  const { getToken } = useAuth();

  const onSubmit = async (data: any) => {
    const template = "UserInfo";
    const token = await getToken({ template });
    console.log(token)
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:8080/add-account",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setServerSuccess(response.data);
    } catch (error: any) {
      setServerErrors(error.message);
    }
  };

  return (
    <>  
    <section className="relative top-10 p-8 mx-auto bg-transparent w-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          <div className="text-sm">
            <label className="font-normal" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className={`block w-full px-4 py-2 mt-2 ${styles.glass} border border-gray-200 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none`}
            />
            {errors.name && (
              <span className="text-red-500 text-xs font-medium">
                * Name is required
              </span>
            )}
          </div>

          <div className="text-sm">
            <label className="font-normal" htmlFor="websiteLink">
              Website Link
            </label>
            <input
              id="websiteLink"
              type="url"
              {...register("websiteLink", { required: true })}
              className={`block w-full px-4 py-2 mt-2 ${styles.glass} border border-gray-200 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none`}
            />
            {errors.websiteLink && (
              <span className="text-red-500 text-xs font-medium">
                * Website Link is required
              </span>
            )}
          </div>

          <div className="text-sm">
            <label className="font-normal" htmlFor="Username">
              Username
            </label>
            <input
              id="Username"
              type="text"
              {...register("Username", { required: true })}
              className={`block w-full px-4 py-2 mt-2 ${styles.glass} border border-gray-200 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none`}
            />
            {errors.Username && (
              <span className="text-red-500 text-xs font-medium">
                * Username is required
              </span>
            )}
          </div>

          <div className="text-sm">
            <label className="font-normal" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                className={`block w-full px-4 py-2 mt-2 ${styles.glass} border border-gray-200 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none`}
              />
              <button
                type="button"
                className="absolute right-2 top-2 opacity-75"
                onClick={() => setshowPassword(!showPassword)}
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <RemoveRedEyeOutlinedIcon />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs font-medium">
                * Password is required
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
            disabled={isValid && isSubmitting}
          >
            Save
          </button>
        </div>
      </form>
    </section>
    {serverSuccess &&
        <div className="absolute bottom-10  right-0">
        <Alert variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
      </div>
    }
    {serverErrors && 
        <div className="absolute bottom-10  right-0">
        <Alert variant="filled" severity="error">
          {serverErrors}
        </Alert>
      </div>
    }
    </>
  );
};

export default Form;
