import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getError } from "../utils/error";

const DialogRegister = ({ openModal, closeModal, isOpen }) => {
  const API_URL = "http://localhost:8040/ecommerce-floor/user/1.0.0/user";
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();
  const submitHandler = async ({ fullName, username, email, password }) => {
    try {
      const data = await axios.post(API_URL, {
        password: {
          note: "nhan test",
          password: password,
          passwordStatus: "CANCELLED",
        },
        role: {
          description: "role nhan test",
          note: "mhan test",
          roleStatus: "ACTIVE",
          roleType: "ADMIN",
        },
        user: {
          address: {
            address1: "string",
            address2: "string",
            city: "string",
            company: "string",
            country: "string",
            countryCode: "AC",
            district: "string",
            districtCode: "string",
            latitude: 0,
            longitude: 0,
            province: "string",
            provinceCode: "string",
            ward: "string",
            wardCode: "string",
            zip: "string",
          },
          birthday: "2022-10-25T15:43:07.619Z",
          byUser: {
            email: email,
            phone: "0353357781",
            userId: "1111",
            userName: username,
          },
          description: "this is user tesst post",
          email: email,
          fullName: fullName,
          gender: "MAN",
          imageUrl: "String",
          telephone: "0353357781",
          username: username,
        },
      });
      console.log(data);
      toast.success("Đăng ký tài khoàn thành công");
      router.push("/");
    } catch (err) {
      toast.error(getError(err));
      console.log(getError(err));
    }
  };
  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
          as="div"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75">
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="inline-block w-full max-w-md p-6 my-20 overflow-hidden text-left align-middle transition-all transform rounded-xl bg-white shadow-xl">
                  <div className="sticky z-50 top-0 mx-auto flex items-center w-full border-b-2">
                    <Dialog.Title
                      as="div"
                      className="text-lg font-medium leading-6 mx-auto "
                    >
                      <p className="text-lg font-bold">
                        Đăng nhập hoặc đăng ký{" "}
                      </p>
                    </Dialog.Title>
                  </div>

                  <div className="flex max-w-md mx-auto">
                    <form
                      onSubmit={handleSubmit(submitHandler)}
                      className="py-2"
                    >
                      <div className="h-14 my-4">
                        <label
                          htmlFor=""
                          className="text-gray-600  text-sm font-normal"
                        >
                          Full Name
                        </label>
                        <input
                          {...register("fullName", {
                            required: "Please enter your username",
                            minLength: {
                              value: 6,
                              message: "FullName is more than 5 chars",
                            },
                          })}
                          id="fullName"
                          type="text"
                          name="fullName"
                          className="h-10 w-96 border mt-2 px-2 rounded-md"
                          autoFocus
                        />
                        {errors.fullName && (
                          <div className="text-red-500 mb-2 w-2/5 text-left font-medium italic inline-block duration-300 transition-all">
                            {errors.fullName.message}
                          </div>
                        )}
                      </div>
                      <div className="h-14 my-4">
                        <label
                          htmlFor=""
                          className="text-gray-600  text-sm font-normal"
                        >
                          Username
                        </label>
                        <input
                          {...register("username", {
                            required: "Please enter your username",
                            minLength: {
                              value: 6,
                              message: "Username is more than 5 chars",
                            },
                          })}
                          id="username"
                          type="text"
                          name="username"
                          className="h-10 w-96 border mt-2 px-2 rounded-md"
                          autoFocus
                        />
                        {errors.username && (
                          <div className="text-red-500 mb-2 w-2/5 text-left font-medium italic inline-block duration-300 transition-all">
                            {errors.username.message}
                          </div>
                        )}
                      </div>
                      <div className="h-14 my-4">
                        <label
                          htmlFor=""
                          className="text-gray-600  text-sm font-normal"
                        >
                          Email
                        </label>
                        <input
                          {...register("email", {
                            required: "Please enter email",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                              message: "Please enter valid email",
                            },
                          })}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          className="h-10 w-96 border mt-2 px-2 rounded-md"
                        ></input>
                        {errors.email && (
                          <div className="text-red-500 mb-2 w-2/5 text-left font-medium italic inline-block duration-300 transition-all">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="h-14 my-4">
                        <label
                          htmlFor=""
                          className="text-gray-600  text-sm font-normal"
                        >
                          Password
                        </label>
                        <input
                          {...register("password", {
                            required: "Please enter password",
                            minLength: {
                              value: 6,
                              message: "Password is more than 5 chars",
                            },
                          })}
                          type="password"
                          name="password"
                          id="password"
                          className="h-10 w-96 border mt-2 px-2 rounded-md"
                        />
                        {errors.password && (
                          <div className="text-red-500 mb-2 w-2/5 text-left font-medium italic inline-block duration-200 transition-all">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                      <div className="h-1/4 mt-10 space-x-4">
                        <button className="text-white rounded font-semibold bg-cyan-500 hover:bg-cyan-700 py-2 px-6 ">
                          Post
                        </button>
                        <button
                          onClick={closeModal}
                          className="text-white rounded font-semibold bg-red-500 hover:bg-red-700 py-2 px-6 "
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog.Overlay>
        </Dialog>
      </Transition>
    </>
  );
};

export default DialogRegister;