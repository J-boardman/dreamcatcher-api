import Modal from "@/components/layout/Modal";
import ShareStoryForm from "@/components/forms/ShareStoryForm";
import Image from "next/image";
import Link from "next/link";
import StoriesFeed from "@/components/StoriesFeed";

export default function Dreams() {
  return (
    <main className="flex max-h-full flex-col overflow-hidden">
      <h1 className="my-4 text-center text-4xl font-bold md:text-left">
        Your <span className="text-secondary">stories</span>
      </h1>
      <StoriesFeed /> 
    </main>
  );
}
