'use client';

import { DarkMode } from '@/components/DarkMode';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full text-center max-w-[1440px] mx-auto">
      <Navbar />

      <div className="w-full h-screen relative mt-20 md:mt-32">
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

        <div className="text-yellow">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
            className="absolute top-5 lg:top-10 h-full w-full mx-auto text-[32px] md:text-[64px] xl:text-[100px] font-bold font-balo"
          >
            fluffy and melted <br /> with
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1.5 }}
            className="absolute top-[130px] md:top-[240px] lg:top-[260px] xl:top-[380px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-[32px] md:text-[64px] xl:text-[100px] font-bold font-balo"
          >
            flufxy
          </motion.h1>
        </div>
      </div>

      <div className="h-screen w-full">
        <h2 className="text-[32px] font-bold">flufxy menu</h2>
      </div>
    </main>
  );
}
