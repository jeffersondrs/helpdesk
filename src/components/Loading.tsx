import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-l-2 border-gray-950 h-64 w-64"></div>
    </div>
  );
}
