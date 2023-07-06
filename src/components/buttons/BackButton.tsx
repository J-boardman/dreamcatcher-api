"use client";
import { useRouter } from "next/navigation"
import { ChevronDoubleLeftIcon } from "@heroicons/react/20/solid"
export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="btn-circle btn btn-sm absolute z-50 m-4 btn-secondary"
      onClick={() => router.back()}
    >
    <ChevronDoubleLeftIcon className="h-6 w-6 text-white"/>
    </button>
  );
}
