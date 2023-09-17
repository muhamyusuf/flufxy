'use client';

import { DarkMode } from '@/components/DarkMode';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center container flex-1 w-full text-center">
      <Navbar />
      <DarkMode />

      <div className="w-full h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 2 }}
          className="flex flex-col w-full justify-center"
        >
          <Image
            src="/landing-page/hero-flufxy.png"
            alt="hero-image"
            className="w-auto mt-10 h-auto object-cover z-10"
            width={1000}
            height={500}
            quality={100}
          />
        </motion.div>

        {/* <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] font-bold font-balo"
          >
            SOUFFLE CAKE & BAKERY
          </motion.h1> */}
      </div>
    </main>
  );
}
