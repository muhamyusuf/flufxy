import { DarkMode } from '@/components/DarkMode';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
      <Navbar />
      <DarkMode />
      <div className="w-full h-screen mt-20">
        <div className="flex">
          <Image
            src="/landing-page/hero-flufxy.png"
            alt="hero-image"
            className="w-auto h-auto object-cover mx-auto"
            width={1000}
            height={500}
            quality={100}
          />
        </div>
      </div>
    </main>
  );
}
