import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image
        className="h-52"
        src="loading.svg"
        alt="loading..."
        width={100}
        height={52}
        layout="fixed"
      />
    </div>
  );
}
