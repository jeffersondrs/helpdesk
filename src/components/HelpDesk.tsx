import React from "react";

export default function HelpDesk() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col cursor-pointer">
        <div className="h-16 flex flex-row justify-center items-end gap-3">
          <div className="w-1 h-6 bg-gray-50 animate-[growUp_1s_ease-in-out] bottom-0 relative "></div>
          <div className="w-1 h-6 bg-gray-50 animate-[growUp_1s_ease-in-out] bottom-0 relative "></div>
          <div className="w-1 h-5 bg-gray-50 animate-[growUp_1.1s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-5 bg-gray-50 animate-[growUp_1.1s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-10 bg-gray-50 animate-[growUp_0.5s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-2 bg-gray-50 animate-[growUp_2s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-2 bg-gray-50 animate-[growUp_2s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-8 bg-gray-50 animate-[growUp_0.4s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-8 bg-gray-50 animate-[growUp_0.4s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-5 bg-gray-50 animate-[growUp_1.1s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-5 bg-gray-50 animate-[growUp_1.1s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-7 bg-gray-50 animate-[growUp_0.3s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
          <div className="w-1 h-7 bg-gray-50 animate-[growUp_0.3s_ease-in-out] bottom-0 relative transition duration-300 ease-in-out transform"></div>
        </div>
        <div className="flex flex-row justify-center items-end gap-3 py-5">
          <h1 className="text-4xl text-white font-bold">Help Desk</h1>
        </div>
      </div>
    </div>
  );
}
