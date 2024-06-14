import Image from "next/image";
import Header from "~/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24">
      <Header />
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/starknetlogo.png"
        alt="Starknet Scaffold"
        width={180}
        height={40}
        priority
      />

    
    </main>
  );
}
