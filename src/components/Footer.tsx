import { Facebook, Instagram, LayoutGridIcon, } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LayoutGridIcon className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">MentorMatch </strong> 
            is a social networking platform where students and professionals are able to learn from upperclass students or advanced professionals.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - MentorMatch</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-teal-400 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-teal-400 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-teal-400 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-teal-400 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-teal-400 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Grow</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-teal-400 cursor-pointer transition-all">
              Contribute to MentorMatch{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer