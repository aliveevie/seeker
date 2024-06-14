import Image from "next/image";
import Header from "~/Header";
import Header2 from "./components/Header2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24">
      <Header />
    <Header2 />

    
    </main>
  );
}
