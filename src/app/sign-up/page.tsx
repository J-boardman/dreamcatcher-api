import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <main className="grid place-content-center -mx-3">
    <SignUp />
  </main>;
}