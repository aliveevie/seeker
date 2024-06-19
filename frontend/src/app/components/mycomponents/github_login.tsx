"use client";

import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { signIn, signOut, useSession } from 'next-auth/react';


type MyAppProps = AppProps & {
  pageProps: {
    session: any;
  };
};

export default function GitHub_Login({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {


    console.log(session);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <div>
      {!session ? (
        <>
          <h3>Not signed in</h3>
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        </>
      ) : (
        <>
          <h3>Signed in as {session.user?.name}</h3>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>

    </SessionProvider>
  );
}
