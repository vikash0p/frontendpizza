"use client";
import { useAppDispatch, useAppSelector } from "@/Redux-toolkit/hooks";
import {
  DecreaseQty,
  IncreaseQty,
  removeFromCart,
} from "@/Redux-toolkit/slice/cartSlice";
import { ToastSuccess } from "@/utils/react-toastify";
import Image from "next/image";
import React from "react";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";

const CartData = () => {
  const dispatch = useAppDispatch();
  const myPizza = useAppSelector((state) => state.cart.cart);
  const pizza = [...myPizza].reverse();
  // console.log("🚀 ~ file: CartData.tsx:13 ~ pizza:", pizza);

  const totalPrice= pizza.reduce((total, item) => total + item.price * item.qty, 0);
  const totalQty= pizza.reduce((total, item) => total + item.qty, 0);

  const service = 0.1 * totalPrice;
  const tax = 0.05 * totalPrice;
const total = totalPrice + tax + service;

  // console.log("🚀 ~ file: CartData.tsx:7 ~ pizza:", pizza);

  return (
    <div>
      {pizza.length <= 0 ? (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-textColor">
            No pizza in cart
          </h1>
        </div>
      ) : (
        <div>
          <div className="overflow-x-scroll min-h-screen ">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="bg-bgColor2 divide-y divide-gray-400">
                {pizza.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-textColor uppercase ">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Image
                        width={50}
                        height={50}
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      &#8377;{item.price * item.qty}
                    </td>

                    <td className="flex flex-row  ` items-center">
                      <button
                        type="button"
                        className="bg-textColor p-1 text-white hover:bg-red-800 "
                        onClick={() => dispatch(DecreaseQty(item))}
                      >
                        <BiMinus size={25} />
                      </button>
                      <p className="px-4  py-4 whitespace-nowrap font-bold  ">
                        {item.qty}
                      </p>

                      <button
                        type="button"
                        className="bg-green-600 hover:bg-green-800 p-1 text-white "
                        onClick={() => dispatch(IncreaseQty(item))}
                      >
                        <BiPlus size={25} />{" "}
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="text-textColor hover:text-red-800 "
                        onClick={() => {
                          ToastSuccess("Item removed from cart");
                          dispatch(removeFromCart(item));
                        }}
                      >
                        <BiTrash size={30} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-72 m-auto mt-10 p-3 bg-bgColor2 ">
              <h3 className="text-xl font-bold text-[#333]">Summary</h3>
              <ul className="text-[#333] mt-6 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Service{" "}
                  <span className="ml-auto font-bold">
                    {" "}
                    &#8377;{tax.toFixed(2)}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax{" "}
                  <span className="ml-auto font-bold">
                    {" "}
                    &#8377;{service.toFixed(2)}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Product{" "}
                  <span className="ml-auto font-bold"> {myPizza.length}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Quantity{" "}
                  <span className="ml-auto font-bold"> {totalQty}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Price{" "}
                  <span className="ml-auto font-bold">
                    {" "}
                    &#8377;{totalPrice}
                  </span>
                </li>
                <div className="w-full h-[2px] bg-black"></div>
                <li className="flex flex-wrap gap-4 text-base font-bold ">
                  Total <span className="ml-auto">&#8377;{total.toFixed(2)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartData;
