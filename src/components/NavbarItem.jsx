"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div className="flex dark:bg-gray-600 p-4 lg:text-lg justify-center gap-6">
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        } `}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
