"use client";

import Image from "next/image";
import Header from "~/Header";
import Header2 from "./components/mycomponents/Header2";
import SignIn from "./components/mycomponents/signIn";
import SignUp from "./components/mycomponents/signout";
import Jobs from "./components/mycomponents/Jobs";
import Bounties from "./components/mycomponents/Bounty";

import { useState } from "react";


export default function Home() {

  const [sing, setSign] = useState(false);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24">
     
     <Header2 />
     <Jobs />
     <Bounties />
    
    </main>
  );
}
