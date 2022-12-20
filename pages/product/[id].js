import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronRight,
  FaDollarSign,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaShopify,
  FaShoppingBag,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import Slider from "react-slick";
import BreadCrumb from "../../components/BreadCrumb";
import Layout from "../../components/Layout";
import { dataDigitalBestSeller } from "../../data/mock-data";
import { AiFillMessage } from "react-icons/ai";
import ProductList from "../../components/product/ProductList";
import { getError } from "../../utils/error";

export default function ProductScreen() {
  const router = useRouter();
  const { id } = router.query;
  const basUrl = process.env.NEXT_PUBLIC_API_URL;
  const axios = require("axios");
  const [productDetailById, setProductDetailById] = useState([]);
  const getProductDetailById = () => {
    try {
      axios
        .get(`${basUrl}/product/1.0.0/product/${id}/detail`, {
          headers: {
            "Content-Type": "application/json",
            charset: "utf-8",
          },
        })
        .then(function (response) {
          const { data } = response;
          setProductDetailById(data);
        })
        .catch(function (error) {
          console.error(getError(error));
        });
    } catch (error) {
      console.log(getError(error));
    }
  };

  useEffect(() => {
    getProductDetailById();
  }, [id]);

  const [qty, setQty] = useState(1);
  const incQuantity = () => {
    return setQty(qty + 1);
  };
  const decQuantity = () => {
    if (qty === 0) {
      return 1;
    }
    return setQty(qty - 1);
  };
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Image
            src={productDetailById.product?.featuredImageUrl}
            alt={productDetailById.product?.name}
            width={300}
            height={170}
            className="w-full"
          ></Image>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Layout>
        <div className="bg-gray-300 pb-10 ">
          <BreadCrumb
            title={productDetailById.product?.name}
            pid={productDetailById.product?.id}
          />
          <section>
            <div className=" w-[1200px] mb-3 grid grid-cols-2 gap-6  mx-auto bg-white p-4 rounded shadow">
              {/* product image */}
              <div className="flex items-center justify-center">
                <Image
                  src={productDetailById.product?.featuredImageUrl}
                  alt={productDetailById.product?.name}
                  width={300}
                  height={170}
                  className="w-full"
                ></Image>
              </div>
              {/* product image */}

              {/* product content */}
              <div>
                <h2 className="text-3xl font-medium uppercase mb-2">
                  {productDetailById.product?.name}
                </h2>

                <div className="space-y-3">
                  <div className="text-gray-800 font-normal space-x-2">
                    <span>Loại sản phẩn:</span>
                    <span className="">
                      {productDetailById.product?.industrialType} -
                      {productDetailById.product?.industrialTypeName}
                    </span>
                  </div>
                </div>
                <div className="my-4">
                  <Image
                    src="https://cf.shopee.vn/file/4533a6c752823c3bc7491d3267e20bf2"
                    alt=""
                    height={44}
                    width={665}
                    className=""
                  ></Image>
                </div>
                <div className="flex items-baseline mb-1 space-x-2 font-bold mt-4">
                  <p className="text-4xl text-rose-600 font-semibold">
                    {productDetailById.product?.mediumPrice.amount}{" "}
                    {productDetailById.product?.mediumPrice.currencyCode}
                  </p>
                  <p className="text-base text-gray-400 font-semibold line-through">
                    $50.00
                  </p>
                </div>
                <p className="mt-4 text-gray-400 line-clamp-4">
                  {productDetailById.product?.description}
                </p>
                <div className="mt-4 grid grid-cols-4 space-x-5">
                  <h3 className="text-md text-gray-800 uppercase font-medium">
                    Kích cỡ
                  </h3>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-xs"
                        />
                        <label
                          htmlFor="size-xs"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          XS
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-s"
                        />
                        <label
                          htmlFor="size-s"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          S
                        </label>
                      </div>

                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-m"
                        />
                        <label
                          htmlFor="size-m"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          M
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-l"
                        />
                        <label
                          htmlFor="size-l"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          L
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-xl"
                        />
                        <label
                          htmlFor="size-xl"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          XL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 space-x-5">
                  <h3 className="text-md text-gray-800 uppercase font-medium">
                    Màu sắc
                  </h3>
                  <div>
                    <div className=" flex items-center gap-2">
                      {/* single color */}
                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-red"
                        />
                        <label
                          htmlFor="color-red"
                          className="border border-gray-200 rounded-sm h-5 w-5 block cursor-pointer shadow-sm bg-red-600"
                        ></label>
                      </div>
                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-white"
                        />
                        <label
                          htmlFor="color-white"
                          className="border border-gray-200 rounded-sm h-5 w-5 block cursor-pointer shadow-sm bg-white"
                        ></label>
                      </div>
                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-black"
                        />
                        <label
                          htmlFor="color-black"
                          className="border border-gray-200 rounded-sm h-5 w-5 block cursor-pointer shadow-sm bg-black"
                        ></label>
                      </div>
                      {/* single color */}
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 space-x-5 items-center">
                  <h3 className="text-md text-gray-800 uppercase font-medium">
                    Số lượng
                  </h3>
                  <div>
                    <div className=" flex border  border-gray-300 text-gray-300 w-max divide-x divide-gray-300">
                      <div
                        onClick={() => decQuantity()}
                        className="text-green-500 select-none h-8 w-8 text-xl flex items-center justify-center cursor-pointer"
                      >
                        -
                      </div>
                      <div className="select-none font-semibold text-black h-8 w-8 text-base flex items-center justify-center">
                        {qty}
                      </div>
                      <div
                        onClick={() => incQuantity()}
                        className=" text-red-500 select-none h-8 w-8 text-xl flex items-center justify-center cursor-pointer"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                  <div
                    href="#_"
                    className="cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-rose-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <div className="flex items-center space-x-2">
                      <FaShoppingBag />
                      <span className="relative">Thêm vào giỏ hàng</span>
                    </div>
                  </div>
                  <div
                    href="#_"
                    className="cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-rose-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <div className="flex items-center space-x-2">
                      <FaDollarSign />
                      <span className="relative">Mua ngay</span>
                    </div>
                  </div>
                </div>
                {/* social share */}
                <div className="flex gap-3 mt-4">
                  <a
                    href=""
                    className="text-gray-400 hover:text-gray-800 h-10 w-10 rounded-full border
                    border-gray-300 flex items-center justify-center"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href=""
                    className="text-gray-400 hover:text-gray-800 h-10 w-10 rounded-full border
                    border-gray-300 flex items-center justify-center"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href=""
                    className="text-gray-400 hover:text-gray-800 h-10 w-10 rounded-full border
                    border-gray-300 flex items-center justify-center"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              {/* product content */}
            </div>
          </section>

          <section>
            <div className=" w-[1200px] mb-3 grid grid-cols-3 gap-6  mx-auto bg-white p-4 rounded shadow">
              <div className="container flex col-span-1 py-2 px-4 space-x-3 border-r border-gray-200">
                <div>
                  <Image
                    src="https://cf.shopee.vn/file/54b3bd20025fdfd891a4f701ef0f1066_tn"
                    alt="avatar"
                    width={100}
                    height={100}
                    className="object-center object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span>Fivemart</span>
                  <span className="text-sm text-gray-500">
                    Online 4 giờ trước
                  </span>
                  <div className="flex gap-3  border-gray-200 pb-5  mt-3">
                    <div
                      href="#_"
                      className="cursor-pointer rounded px-3 py-2 overflow-hidden group bg-rose-300 relative hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-400 text-rose-600 hover:text-black hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 border border-rose-600"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <div className="flex items-center space-x-2 ">
                        <AiFillMessage />
                        <span className="relative">Chat</span>
                      </div>
                    </div>
                    <div
                      href="#_"
                      className="cursor-pointer rounded px-3 py-2 overflow-hidden group bg-white-300 relative hover:bg-gradient-to-r hover:from-gray-800 hover:to-white text-black hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all ease-out duration-300 border border-black"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <div className="flex items-center space-x-2 text-white-600 hover:text-black">
                        <FaShopify />
                        <span className="relative">Xem shop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container flex col-span-2 py-2 pl-4 justify-center">
                <div className="grid grid-cols-3 space-x-16">
                  <div className="flex flex-col justify-around">
                    <div className="space-x-3">
                      <span className="text-gray-500">Đánh giá:</span>
                      <span className="text-rose-600">71.1k</span>
                    </div>

                    <div className="space-x-3">
                      <span className="text-gray-500">Sản phẩm</span>
                      <span className="text-rose-600">302</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-around">
                    <div className="space-x-3">
                      <span className="text-gray-500">Tỉ lệ phản hồi:</span>
                      <span className="text-rose-500">71.1k</span>
                    </div>

                    <div className="space-x-3">
                      <span className="text-gray-500">Thời gian phản hồi:</span>
                      <span className="text-rose-500">71%</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-around">
                    <div className="space-x-3">
                      <span className="text-gray-500">Tham gia:</span>
                      <span className="text-rose-600">3 năm trước</span>
                    </div>

                    <div className="space-x-3">
                      <span className="text-gray-500">Người theo dõi</span>
                      <span className="text-rose-600">31.1k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* product detail */}
          <section>
            <div className=" w-[1200px]  mx-auto   bg-white p-4 pb-16 rounded shadow">
              <div className="container pb-6 px-6">
                <h3 className="border-b border-gray-200  text-gray-800 pb-3 font-medium text-3xl">
                  Chi tiết sản phẩm
                </h3>
                <div className="w-3/5 pt-6">
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur corporis ullam, voluptatum quam nisi facere
                      consequatur soluta reiciendis voluptates sequi quis
                      architecto quas nemo illo repellat laudantium expedita
                      asperiores. Quod!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt repellendus ex velit voluptates aspernatur numquam
                      minima tempore libero soluta doloremque voluptatum
                      eligendi officia repellat, itaque laborum repudiandae
                      totam sed perspiciatis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Numquam, soluta tempora! Enim veniam dolores assumenda
                      consectetur sed voluptas eos maxime inventore ducimus
                      magnam iure nam odio illum, cupiditate qui animi?
                    </p>
                  </div>
                  <div>
                    {/* <table className="table-auto border-collapse w-full text-left my-2">
                    <tr>
                      <th className="py-2 px-2 border border-gray-200 w-40 font-medium">
                        Loại sản phẩm
                      </th>
                      <th className="py-2 px-2 border border-gray-200 w-40 font-medium">
                 
                      </th>
                    </tr>
                    <tr>
                      <th className="py-2 px-2 border border-gray-200 w-40 font-medium">
                        Vị trí
                      </th>
                      <th className="py-2 px-2 border border-gray-200 w-40 font-medium">
                      
                      </th>
                    </tr>
                  </table> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" w-[1200px]  mx-auto mt-5  bg-gray-200 p-4 pb-16 rounded shadow">
              <div className="container pb-6 px-6">
                <h3 className="border-b border-rose-600  text-gray-800 pb-3 font-medium text-3xl">
                  Liên quan
                </h3>
                <ProductList />
              </div>
            </div>
          </section>
          {/* product detail end */}
        </div>
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: {},
  };
}
