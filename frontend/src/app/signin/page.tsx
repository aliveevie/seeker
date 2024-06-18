import SignIn from "../components/mycomponents/signIn";
import { signIn,  } from "next-auth/react";


export default async function Page() {
  return (
    <div className="container mx-auto py-10">
        <SignIn />
    </div>
  );
}
