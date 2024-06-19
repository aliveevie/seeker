"use client";

import Image from "next/image";
import Header from "~/Header";
import Header2 from "./components/mycomponents/Header2";
import SignIn from "./components/mycomponents/signIn";
import SignUp from "./components/mycomponents/signout";
import Jobs from "./components/mycomponents/Jobs";
import Bounties from "./components/mycomponents/Bounty";

import { useState } from "react";
import ApplyBounty from "./components/mycomponents/ApplyBounty";
import Welcome from "./components/mycomponents/body";
import Seeker from "./components/mycomponents/seeker";
import Reasons from "./components/mycomponents/Reasons";

import { GetSessionParams, SessionProvider } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function Home({ session }: { session: any }) {

  const [sing, setSign] = useState(false);

  console.log(session);

  return (
      <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24">
        <Header2 />
        <Welcome />
        <Seeker />
        <Reasons />
      </main>
  );
}


