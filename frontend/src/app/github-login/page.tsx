"use client";

import { signIn, signOut, useSession, SessionProvider } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const SignIn = ({ session }: { session: any }) => {
  return (
    <SessionProvider session={session}>
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
};

export default SignIn;