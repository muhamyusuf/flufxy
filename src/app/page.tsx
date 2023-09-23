import { Navbar } from '@/components/Navbar';
import Hero from '@/components/landing-page/Hero';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full text-center max-w-[1440px] mx-auto">
      <Navbar />

      <Hero />

      <div className="h-screen w-full">
        <h2 className="text-[32px] font-bold">flufxy menu</h2>
      </div>
    </main>
  );
}
