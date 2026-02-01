import { Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-primary">
        <Hero />
      </main>
    </>
  );
}
