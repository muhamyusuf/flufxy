import { Navbar } from '@/components/Navbar';
import Footer from '@/components/landing-page/Footer';
import Hero from '@/components/landing-page/Hero';
import Menu from '@/components/landing-page/Menu';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full text-center max-w-[1440px] mx-auto">
      <Navbar />

      <Hero />

      <Menu />

      <Footer />
    </main>
  );
}
