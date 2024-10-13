"use client";

import React from "react";
import Image from "next/image";
import second from "../public/image/second.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative mb-4 md:mb-0">
            <motion.div
              className="flex justify-center items-center h-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="border-4 border-green-600 p-2 md:p-4 relative">
                  <Image
                    src={second}
                    alt="Person unpacking fresh produce from a box in a kitchen"
                    layout="responsive"
                    objectFit="cover"
                    className="w-full h-full"
                    style={{ zIndex: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <motion.h2
              className="text-green-600 text-lg font-bold mb-2 md:flex md:flex-col text-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              About us
            </motion.h2>
            <motion.h1
              className="text-3xl font-bold mb-4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Your Source for essentials, Fresh produce, and Agriculture
              solutions
            </motion.h1>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <p className="text-gray-700 mb-4">
                At Agrotex, we are proud to be your trusted provider of fresh
                farm produce, groceries, and a wide range of household
                essentials. Our extensive selection of quality products,
                including fresh and organic fruits, vegetables, dairy, pantry
                staples, and more—ensures that you have everything you need.
              </p>
              <p className="text-gray-700 mb-4">
                We also offer convenient bulk purchasing options for businesses,
                non-profits, and institutions, providing unparalleled solutions
                and delivery. Additionally, Agrotex supports the agricultural
                community with essential farming supplies, irrigation solutions,
                and a wide assortment of essential items.
              </p>
              <p className="text-gray-700 mb-4">
                Shop confidently with Agrotex, where quality, convenience, and
                customer satisfaction are our top priorities.
              </p>
            </motion.div>
            <motion.button
              className="bg-green-600 text-white px-4 py-2 rounded"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              About us
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
