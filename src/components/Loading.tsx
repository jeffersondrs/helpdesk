import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-10">
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-l-2 border-gray-50 h-8 w-8"></div>
    </div>
  );
}
