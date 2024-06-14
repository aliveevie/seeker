"use client";

import Image from "next/image";
import Header from "~/Header";
import Header2 from "./components/Header2";
import SignIn from "./components/signIn";
import SignUp from "./components/signout";
import { useState } from "react";


export default function Home() {

  const [sing, setSign] = useState(false);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24">
      <Header />
      <Header2 />
      <SignUp />
      <SignIn />
    
    </main>
  );
}
