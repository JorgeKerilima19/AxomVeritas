import { Hero, Navbar, Services } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-primary">
        <Hero />
        <Services />
      </main>
    </>
  );
}
