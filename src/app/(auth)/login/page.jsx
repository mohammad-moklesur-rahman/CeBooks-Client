"use client";

import MyContainer from "@/components/MyContainer";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useSignIn } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";

const Login = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [show, setShow] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        window.location.href = "/verify"; // redirect after login
      }
    } catch (error) {
      alert(error.errors[0].message);
    }
  };

  const { openSignIn } = useClerk();

  return (
    <div className="bg-secondary-content">
      <MyContainer>
        <div className="sm:w-96 mx-auto bg-gray-200">
          <div>
            <div className="flex justify-center items-center h-[92vh]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-[20px] font-semibold text-gray-700 text-center">
                  Login{" "}
                </h2>
                <fieldset className="fieldset rounded-box w-xs px-4 py-2 mb-4">
                  <label className="label">Email</label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    type="email"
                    className="input outline-primary focus:border-secondary"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[12px]">
                      Valid email is required
                    </span>
                  )}

                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                      type={show ? "password" : "text"}
                      className="input outline-primary focus:border-secondary"
                      placeholder="Password"
                    />
                    <div
                      onClick={() => setShow(!show)}
                      className="absolute top-[13px] right-2 z-20 cursor-pointer"
                    >
                      {show ? <FiEye /> : <FiEyeOff />}
                    </div>
                  </div>
                  {errors.password && (
                    <span className="text-red-500 text-[12px]">
                      Password must be at least 6 characters
                    </span>
                  )}

                  <button className="btn bg-secondary text-green-500 mt-2">
                    Login
                  </button>
                  <div className="divider">OR</div>
                  <button
                    onClick={() => openSignIn({ strategy: "oauth_google" })}
                    type="button"
                    className="btn bg-secondary text-green-500 mb-1"
                  >
                    <FcGoogle size={25} /> Login with Google
                  </button>
                  <p className="text-[13px]">
                    Do not have an account?{" "}
                    <Link href="/register" className="text-pink-500 underline">
                      Register here
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;
