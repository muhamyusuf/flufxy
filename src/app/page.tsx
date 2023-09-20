'use client';

import { DarkMode } from '@/components/DarkMode';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full text-center max-w-[1440px] mx-auto">
      <nav className="flex justify-center w-full items-center z-50">
        <DarkMode />
        <Navbar />
      </nav>

      <div className="w-full h-screen relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className="flex flex-col w-full justify-center"
        >
          <Image
            src="/landing-page/hero-flufxy.png"
            alt="hero-image"
            className="w-auto h-auto mt-10 object-cover z-10"
            width={1000}
            height={500}
            quality={100}
          />
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
            className="absolute top-5 lg:top-10 h-full w-full mx-auto text-[32px] lg:text-[90px] xl:text-[100px] font-bold font-balo"
          >
            FLUFFY & MELTED <br /> WITH
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1.5 }}
            className="absolute top-[130px] lg:top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-[32px] lg:text-[90px] xl:text-[100px] font-bold font-balo"
          >
            FLUFXY
          </motion.h1>
        </div>
      </div>
    </main>
  );
}
