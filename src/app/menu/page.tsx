import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'menu',
};

export default function page() {
  return (
    <div className="w-full">
      <h1 className="h-full w-full text-center mx-auto text-[32px] md:text-[64px] xl:text-[100px] font-bold font-balo">
        all flufxy menu&lsquo;s
      </h1>
    </div>
  );
}
