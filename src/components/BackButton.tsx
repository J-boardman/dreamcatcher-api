"use client";
import { useRouter } from "next/navigation"
export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="btn-circle btn btn-sm absolute z-50 m-4 text-xl btn-secondary"
      onClick={() => router.back()}
    >
      ←
    </button>
  );
}
