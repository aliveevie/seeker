"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import GitHub_Login from '../components/mycomponents/github_login';

const SignIn = () => {

  return (
    <div>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>

    </div>
  );
};

export default SignIn;