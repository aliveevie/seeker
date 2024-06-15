"use client";
import Profile from "../components/mycomponents/profile";
import { useRouter } from "next/router";

export default async function Page() {
  return (
    <div className="container mx-auto py-10">
        <Profile />
    </div>
  );
}
