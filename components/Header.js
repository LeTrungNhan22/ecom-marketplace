import Image from "next/image";
import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  UserCircleIcon,
  ShoppingCartIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { getError } from "../utils/error";
import DialogRegister from "./DialogRegister";
import SearchBar from "./SearchBar";
import { signOut, useSession } from "next-auth/react";
import AuthContext from "../utils/User";

const Header = () => {
  const sellerUrl = process.env.NEXT_PUBLIC_URL;
  const { user, logout, isLogin } = useContext(AuthContext);
  const { data: session, status } = useSession();
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <header className="p-5 sticky z-50 top-0 bg-white md:px-10 shadow-md grid grid-cols-1 md:grid-cols-3">
      <div className="relative hidden md:flex items-center h-10">
        <Link href="/">
          <a href="">
            <Image
              src="https://links.papareact.com/qd3"
              layout="fill"
              alt=""
              objectFit="contain"
              objectPosition="left"
            />
          </a>
        </Link>
      </div>

      <SearchBar />

      <div className="items-center space-x-1 justify-end hidden md:flex">
        <Link href="/cart">
          <a className="text-gray-700 lg:text-lg md:text-sm flex items-center hover:bg-gray-100 p-1  rounded-full transition duration-200 cursor-pointer">
            <ShoppingCartIcon className="h-10 p-2 hover:bg-gray-100 rounded-full transition duration-200 cursor-pointer" />
          </a>
        </Link>

        <div className="text-gray-700 lg:text-lg md:text-sm flex items-center hover:bg-gray-100 p-1  rounded-full transition duration-200 cursor-pointer">
          <BellAlertIcon className="h-10 p-2 hover:bg-gray-100 rounded-full transition duration-200 cursor-pointer" />
        </div>

        <Menu as="div">
          <div>
            <Menu.Button className="flex px-1 h-12 items-center space-x-1 border-2 rounded-full cursor-pointer hover:shadow-md duration-200 transition">
              <Bars3Icon className="p-2 pr-0 h-10 " />
              <div className="w-10 h-10 relative ">
                <Image
                  src={
                    isLogin == false
                      ? "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/273931255_274094178191687_7561785317864133920_n.jpg?stp=dst-jpg_s320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=js4seigautUAX9KUKNv&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBkLiibAndKRa4kUtilSGzi-LcqWwQA8-hJ1BL2KcZQzw&oe=639EC037"
                      : user.imageUrl
                  }
                  alt=""
                  layout="fill"
                  className="rounded-full "
                ></Image>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-10 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {isLogin === false ? (
                <div>
                  <div className="px-1 py-1 ">
                    <Link href="/user/account/register">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "hover-active" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                          >
                            {active ? (
                              <div className=" h-5 w-5" aria-hidden="true" />
                            ) : (
                              <div className=" h-5 w-5" aria-hidden="true" />
                            )}

                            <p className="font-semibold">Đăng ký</p>
                          </button>
                        )}
                      </Menu.Item>
                    </Link>

                    <Link href="/user/account/login">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "hover-active" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                          >
                            {active ? (
                              <div className=" h-5 w-5" aria-hidden="true" />
                            ) : (
                              <div className=" h-5 w-5" aria-hidden="true" />
                            )}
                            Đăng nhập
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                  </div>
                  <div className="px-1 py-1">
                    <Link href={`${sellerUrl}`}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "hover-active" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                          >
                            {active ? (
                              <div className=" h-5 w-5" aria-hidden="true" />
                            ) : (
                              <div className=" h-5 w-5" aria-hidden="true" />
                            )}
                            Kênh người bán
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logout}
                          className={`${
                            active ? "hover-active" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                        >
                          {active ? (
                            <div className=" h-5 w-5" aria-hidden="true" />
                          ) : (
                            <div className=" h-5 w-5" aria-hidden="true" />
                          )}
                          Đăng xuất
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              )}

              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "hover-active" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <div
                          className=" h-5 w-5 text-violet-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <div
                          className=" h-5 w-5 text-violet-400"
                          aria-hidden="true"
                        />
                      )}
                      Hỗ trợ
                    </button>
                  )}
                </Menu.Item>
              </div>

              <div className="px-1 py-1">
                <Link href="/user/account/profile">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "hover-active" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <div
                            className=" h-5 w-5 text-violet-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <div
                            className=" h-5 w-5 text-violet-400"
                            aria-hidden="true"
                          />
                        )}
                        Tài khoản
                      </button>
                    )}
                  </Menu.Item>
                </Link>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Dialog */}
        <DialogRegister
          openModal={openModal}
          closeModal={closeModal}
          isOpen={isOpen}
        />
        {/* Dialog */}
      </div>
    </header>
  );
};

export default Header;
